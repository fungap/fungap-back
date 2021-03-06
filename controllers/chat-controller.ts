import { ChatlogBackup, sequelize } from '../models';
import * as Sequelize from 'sequelize';
import { Request, Response } from 'express';
import { IOldChatlogs, IoverCountChatlogs } from '../interface/chat';

//채팅로그 불러오기
const getChatlog = async (req: Request, res: Response) => {
  try {
    const { roomname } = req.query;
    console.log(roomname);

    //오래된 챗(10일 지난)을 백업공간에 넣어주는 쿼리문
    const selectOldChatlogQuery = `SELECT room_name, user_id, message, createdAt, updatedAt FROM chatlogs
    WHERE timestampdiff(second, createdAt, now()) > 864000`;

    //10일 지난 채팅 백업하기
    const oldChatlogs: IOldChatlogs[] = await sequelize.query(
      selectOldChatlogQuery,
      {
        type: Sequelize.QueryTypes.SELECT,
      }
    );

    console.log(oldChatlogs);

    if (oldChatlogs.length > 0) {
      for await (let chatlog of oldChatlogs) {
        await ChatlogBackup.create({
          room_name: chatlog.room_name,
          user_id: chatlog.user_id,
          message: chatlog.message,
          createdAt: chatlog.createdAt,
          updatedAt: chatlog.updatedAt,
        });
      }
    }

    //오래된 챗(10일 지난)을 지우는 쿼리문
    const deleteOldChatlogQuery = `DELETE FROM chatlogs
    WHERE timestampdiff(second, createdAt, now()) > 864000`;

    //10일 지난 채팅 삭제
    await sequelize.query(deleteOldChatlogQuery, {
      type: Sequelize.QueryTypes.DELETE,
    });

    ///채팅이 100개 이상 쌓이면 오래된 순으로 지우는 기능
    //roomName의 집합
    const roomNames = ['I', 'E', 'F', 'T'];

    //promiseall 결과 배열이 될 변수
    let resultPromiseall: any;

    //promiseall 돌릴 promise들 담는 배열
    let targetRoomNameSequelizeQuerys = [];

    //promiseall 돌릴 배열들 넣어주기
    for (let i = 0; i < roomNames.length; i++) {
      const targetRoomNameSequelizeQuery = new Promise((resolve, reject) => {
        resolve(
          sequelize.query(
            `SELECT count(*) as count FROM database_final_project.chatlogs
      where room_name = '${roomNames[i]}'`,
            {
              type: Sequelize.QueryTypes.SELECT,
            }
          )
        );
      });
      targetRoomNameSequelizeQuerys.push(targetRoomNameSequelizeQuery);
    }

    //promiseall 돌리고 결과를 resultPromiseall에 담는다
    await Promise.all(targetRoomNameSequelizeQuerys).then((values) => {
      resultPromiseall = values;
    });

    //현재의 roomName 타입별 채팅로그의 수
    console.log(resultPromiseall);
    let resultPromiseallIndex = 0;

    //채팅방 별로 채팅로그를 조회한 결과가 100개가 넘으면 100개 이외는 백업로그로 이동시킨 후 삭제
    if (resultPromiseall) {
      for await (let value of resultPromiseall) {
        if (value[0].count > 100) {
          const selectChatlogQuery = `SELECT room_name, user_id, message, createdAt, updatedAt
          FROM chatlogs WHERE room_name = '${
            roomNames[resultPromiseallIndex]
          }' LIMIT ${value[0].count - 100}`;

          const overCountChatlogs: IoverCountChatlogs[] = await sequelize.query(
            selectChatlogQuery,
            {
              type: Sequelize.QueryTypes.SELECT,
            }
          );

          if (overCountChatlogs.length > 0) {
            for await (let overCountChatlog of overCountChatlogs) {
              await ChatlogBackup.create({
                room_name: overCountChatlog.room_name,
                user_id: overCountChatlog.user_id,
                message: overCountChatlog.message,
                createdAt: overCountChatlog.createdAt,
                updatedAt: overCountChatlog.updatedAt,
              });
            }
          }

          const deleteQuery = `DELETE FROM database_final_project.chatlogs
          WHERE room_name = '${roomNames[resultPromiseallIndex]}'
          LIMIT ${value[0].count - 100}`;
          await sequelize.query(deleteQuery, {
            type: Sequelize.QueryTypes.DELETE,
          });
        }
        resultPromiseallIndex++;
      }
    }

    const selectChatlogQuery = `SELECT c.chat_id, c.room_name, u.user_id, u.nickname as name, u.user_image as userImage, u.user_mbti as userMbti, c.message , c.createdAt
    FROM users AS u
    LEFT OUTER JOIN chatlogs AS c
    ON (u.user_id = c.user_id)
    WHERE c.room_name = '${roomname}'
    ORDER BY c.chat_id ASC`;

    //채팅 로그 전부 불러오기
    let chatlogs = await sequelize.query(selectChatlogQuery, {
      type: Sequelize.QueryTypes.SELECT,
    });

    //채팅 로그가 50개가 넘을 경우 50개만 짤라서 보내기
    if (chatlogs.length > 50) {
      chatlogs = chatlogs.slice(chatlogs.length - 50, chatlogs.length);
    }

    res.status(200).json({
      result: 'success',
      chatlogs,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      errorMessage: '알 수 없는 오류가 발생했습니다. 관리자에게 문의해주세요.',
    });
  }
};

export { getChatlog };
