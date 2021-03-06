import User from '../models/user';
import { Request, Response, NextFunction } from 'express';

export const checkAuthority = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = res.locals.userId;
    console.log(userId);
    const userInfo = await User.findOne({ where: { user_id: userId } });

    if (userInfo?.user_authority == 'public') {
      return res
        .status(409)
        .json({ result: 'fail', error: '접근 권한이 없습니다.' });
    }
    next();
  } catch (err) {
    next(err);
    return res
      .status(404)
      .json({ result: 'fail', error: '유저 정보가 존재하지 않습니다.' });
  }
};
