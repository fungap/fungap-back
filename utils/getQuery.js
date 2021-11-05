const { sequelize, Sequelize } = require('../models');

//홈화면 조회 신규 순 로그인
exports.NewBoardHomeLogin = async function (user_id) {
  const queryNew = `select t1.board_id, t1.board_title, t1.board_image, t1.view_count, t1.like_count, t2.comment_count, t2.like_state from
  (SELECT b.board_id,b.board_title,b.board_image,b.view_count,count(l.board_id) as like_count
   
    FROM boards AS b
    left OUTER JOIN likes AS l
    ON b.board_id = l.board_id
    WHERE b.board_delete_code = 0
    GROUP BY b.board_id
    ORDER BY b.createdAt DESC) as t1
    join
    
  (select b.board_id, count(c.board_id) as comment_count,
  
  case u.board_id
  when b.board_id then 'true'
  else 'false'
  end as like_state
  FROM boards AS b
  LEFT OUTER JOIN comments AS c
  ON (b.board_id = c.board_id AND c.comment_delete_code=0)
  left outer join likes as u
  on b.board_id = u.board_id and u.user_id = ${user_id}
  group by b.board_id
  ORDER BY b.createdAt DESC) as t2
  on t1.board_id = t2.board_id`;

  return await sequelize.query(queryNew, {
    type: Sequelize.QueryTypes.SELECT,
  });
  // return new_board_list;
};
//홈화면 조회 인기순 로그인
exports.PopBoardHomeLogin = async function (user_id) {
  const queryPop = `select t1.board_id, t1.board_title, t1.board_image, t1.view_count, t1.like_count, t2.comment_count, t2.like_state from
  (SELECT b.board_id,b.board_title,b.board_image,b.view_count,count(l.board_id) as like_count
   
    FROM boards AS b
    left OUTER JOIN likes AS l
    ON b.board_id = l.board_id
    WHERE b.board_delete_code = 0
    GROUP BY b.board_id
    ORDER BY b.createdAt DESC) as t1
    join
    
  (select b.board_id, count(c.board_id) as comment_count,
  
  case u.board_id
  when b.board_id then 'true'
  else 'false'
  end as like_state
  FROM boards AS b
  LEFT OUTER JOIN comments AS c
  ON (b.board_id = c.board_id AND c.comment_delete_code=0)
  left outer join likes as u
  on b.board_id = u.board_id and u.user_id = ${user_id}
  group by b.board_id
  ORDER BY b.createdAt DESC) as t2
  on t1.board_id = t2.board_id
  ORDER BY t1.like_count DESC`;

  return await sequelize.query(queryPop, {
    type: Sequelize.QueryTypes.SELECT,
  });
};
//홈화면 조회 신규순 비로그인
exports.NewBoardHome = async function () {
  const query = `select t1.board_id, t1.board_title, t1.board_image, t1.view_count, t1.like_count, t2.comment_count, t2.like_state from
  (SELECT b.board_id,b.board_title,b.board_image,b.view_count,count(l.board_id) as like_count
   
    FROM boards AS b
    left OUTER JOIN likes AS l
    ON b.board_id = l.board_id
    WHERE b.board_delete_code = 0
    GROUP BY b.board_id
    ORDER BY b.createdAt DESC) as t1
    join
    
  (select b.board_id, count(c.board_id) as comment_count,
  
  case c.board_id
  when '말이안되는값' then 'true'
  else 'false'
  end as like_state
  FROM boards AS b
  LEFT OUTER JOIN comments AS c
  ON (b.board_id = c.board_id AND c.comment_delete_code=0)
  group by b.board_id
  ORDER BY b.createdAt DESC) as t2
  on t1.board_id = t2.board_id`;

  return await sequelize.query(query, {
    type: Sequelize.QueryTypes.SELECT,
  });
};
//홈화면 조회 인기순 비로그인
exports.PopBoardHome = async function () {
  const query = `select t1.board_id, t1.board_title, t1.board_image, t1.view_count, t1.like_count, t2.comment_count, t2.like_state from
  (SELECT b.board_id,b.board_title,b.board_image,b.view_count,count(l.board_id) as like_count
   
    FROM boards AS b
    left OUTER JOIN likes AS l
    ON b.board_id = l.board_id
    WHERE b.board_delete_code = 0
    GROUP BY b.board_id
    ORDER BY b.createdAt DESC) as t1
    join
    
  (select b.board_id, count(c.board_id) as comment_count,
  
  case c.board_id
  when '말이안되는값' then 'true'
  else 'false'
  end as like_state
  FROM boards AS b
  LEFT OUTER JOIN comments AS c
  ON (b.board_id = c.board_id AND c.comment_delete_code=0)
  group by b.board_id
  ORDER BY b.createdAt DESC) as t2
  on t1.board_id = t2.board_id
  ORDER BY t1.like_count DESC`;

  return await sequelize.query(query, {
    type: Sequelize.QueryTypes.SELECT,
  });
};

//상황별 페이지 시작
//상황별 페이지 게시글 전체 조회 로그인시(최신순)
exports.situationBoardLogin = async function (user_id) {
  const query = `select t1.board_id, t1.board_title, t1.board_image, t1.view_count, t1.like_count, t2.comment_count, t2.like_state from
  (SELECT b.board_id,b.board_title,b.board_image,b.view_count,count(l.board_id) as like_count
   
    FROM boards AS b
    left OUTER JOIN likes AS l
    ON b.board_id = l.board_id
    WHERE b.board_delete_code = 0
    GROUP BY b.board_id
    ORDER BY b.createdAt DESC) as t1
    join
    
  (select b.board_id, count(c.board_id) as comment_count,
  
  case u.board_id
  when b.board_id then 'true'
  else 'false'
  end as like_state
  FROM boards AS b
  LEFT OUTER JOIN comments AS c
  ON (b.board_id = c.board_id AND c.comment_delete_code=0)
  left outer join likes as u
  on b.board_id = u.board_id and u.user_id = ${user_id}
  group by b.board_id
  ORDER BY b.createdAt DESC) as t2
  on t1.board_id = t2.board_id`;

  return await sequelize.query(query, {
    type: Sequelize.QueryTypes.SELECT,
  });
};
//상황별 페이지 게시글 전체 조회 비로그인(최신순)
exports.situationBoard = async function () {
  const query = `select t1.board_id, t1.board_title, t1.board_image, t1.view_count, t1.like_count, t2.comment_count, t2.like_state from
  (SELECT b.board_id,b.board_title,b.board_image,b.view_count,count(l.board_id) as like_count
   
    FROM boards AS b
    left OUTER JOIN likes AS l
    ON b.board_id = l.board_id
    WHERE b.board_delete_code = 0
    GROUP BY b.board_id
    ORDER BY b.createdAt DESC) as t1
    join
    
  (select b.board_id, count(c.board_id) as comment_count,
  
  case c.board_id
  when '말이안되는값' then 'true'
  else 'false'
  end as like_state
  FROM boards AS b
  LEFT OUTER JOIN comments AS c
  ON (b.board_id = c.board_id AND c.comment_delete_code=0)
  group by b.board_id
  ORDER BY b.createdAt DESC) as t2
  on t1.board_id = t2.board_id`;

  return await sequelize.query(query, {
    type: Sequelize.QueryTypes.SELECT,
  });
};
//상황별 페이지 게시글 전체 조회 로그인시(인기순)
exports.situationBoardPopLogin = async function (user_id) {
  const query = `select t1.board_id, t1.board_title, t1.board_image, t1.view_count, t1.like_count, t2.comment_count, t2.like_state from
  (SELECT b.board_id,b.board_title,b.board_image,b.view_count,count(l.board_id) as like_count
   
    FROM boards AS b
    left OUTER JOIN likes AS l
    ON b.board_id = l.board_id
    WHERE b.board_delete_code = 0
    GROUP BY b.board_id
    ORDER BY b.createdAt DESC) as t1
    join
    
  (select b.board_id, count(c.board_id) as comment_count,
  
  case u.board_id
  when b.board_id then 'true'
  else 'false'
  end as like_state
  FROM boards AS b
  LEFT OUTER JOIN comments AS c
  ON (b.board_id = c.board_id AND c.comment_delete_code=0)
  left outer join likes as u
  on b.board_id = u.board_id and u.user_id = ${user_id}
  group by b.board_id
  ORDER BY b.createdAt DESC) as t2
  on t1.board_id = t2.board_id
  ORDER BY t1.like_count DESC`;

  return await sequelize.query(query, {
    type: Sequelize.QueryTypes.SELECT,
  });
};
//상황별 페이지 게시글 전체 조회 비로그인(인기순)
exports.situationBoardPop = async function () {
  const query = `select t1.board_id, t1.board_title, t1.board_image, t1.view_count, t1.like_count, t2.comment_count, t2.like_state from
  (SELECT b.board_id,b.board_title,b.board_image,b.view_count,count(l.board_id) as like_count
   
    FROM boards AS b
    left OUTER JOIN likes AS l
    ON b.board_id = l.board_id
    WHERE b.board_delete_code = 0
    GROUP BY b.board_id
    ORDER BY b.createdAt DESC) as t1
    join
    
  (select b.board_id, count(c.board_id) as comment_count,
  
  case c.board_id
  when '말이안되는값' then 'true'
  else 'false'
  end as like_state
  FROM boards AS b
  LEFT OUTER JOIN comments AS c
  ON (b.board_id = c.board_id AND c.comment_delete_code=0)
  group by b.board_id
  ORDER BY b.createdAt DESC) as t2
  on t1.board_id = t2.board_id
  ORDER BY t1.like_count DESC`;

  return await sequelize.query(query, {
    type: Sequelize.QueryTypes.SELECT,
  });
};
//상황별 페이지 게시글 전체 조회 로그인시(조회수순)
exports.situationBoardViewLogin = async function (user_id) {
  const query = `select t1.board_id, t1.board_title, t1.board_image, t1.view_count, t1.like_count, t2.comment_count, t2.like_state from
  (SELECT b.board_id,b.board_title,b.board_image,b.view_count,count(l.board_id) as like_count
   
    FROM boards AS b
    left OUTER JOIN likes AS l
    ON b.board_id = l.board_id
    WHERE b.board_delete_code = 0
    GROUP BY b.board_id
    ORDER BY b.createdAt DESC) as t1
    join
    
  (select b.board_id, count(c.board_id) as comment_count,
  
  case u.board_id
  when b.board_id then 'true'
  else 'false'
  end as like_state
  FROM boards AS b
  LEFT OUTER JOIN comments AS c
  ON (b.board_id = c.board_id AND c.comment_delete_code=0)
  left outer join likes as u
  on b.board_id = u.board_id and u.user_id = ${user_id}
  group by b.board_id
  ORDER BY b.createdAt DESC) as t2
  on t1.board_id = t2.board_id
  ORDER BY t1.view_count DESC`;

  return await sequelize.query(query, {
    type: Sequelize.QueryTypes.SELECT,
  });
};
//상황별 페이지 게시글 전체 조회 비로그인(조회수순)
exports.situationBoardView = async function () {
  const query = `select t1.board_id, t1.board_title, t1.board_image, t1.view_count, t1.like_count, t2.comment_count, t2.like_state from
  (SELECT b.board_id,b.board_title,b.board_image,b.view_count,count(l.board_id) as like_count
   
    FROM boards AS b
    left OUTER JOIN likes AS l
    ON b.board_id = l.board_id
    WHERE b.board_delete_code = 0
    GROUP BY b.board_id
    ORDER BY b.createdAt DESC) as t1
    join
    
  (select b.board_id, count(c.board_id) as comment_count,
  
  case c.board_id
  when '말이안되는값' then 'true'
  else 'false'
  end as like_state
  FROM boards AS b
  LEFT OUTER JOIN comments AS c
  ON (b.board_id = c.board_id AND c.comment_delete_code=0)
  group by b.board_id
  ORDER BY b.createdAt DESC) as t2
  on t1.board_id = t2.board_id
  ORDER BY t1.view_count DESC`;

  return await sequelize.query(query, {
    type: Sequelize.QueryTypes.SELECT,
  });
};
//상황별페이지 끝

//게시글 디테일 페이지 조회(board) (로그인)
exports.detailBoardLogin = async function (user_id, board_id) {
  const queryBoard = `
  SELECT b.board_title,b.board_image,b.board_content,b.view_count,count(l.board_id) as like_count,
  CASE u.board_id
  WHEN b.board_id THEN 'true'
  ELSE 'false'
  END AS like_state
  FROM boards AS b
  left OUTER JOIN comments AS c
  ON (b.board_id = c.board_id AND c.comment_delete_code = 0)
  left OUTER JOIN likes AS l
  ON b.board_id = l.board_id
  left OUTER JOIN likes AS u
  ON b.board_id = u.board_id AND u.user_id=${user_id}
  WHERE (b.board_delete_code = 0 AND b.board_id=${board_id})
  `;
  return await sequelize.query(queryBoard, {
    type: Sequelize.QueryTypes.SELECT,
  });
};
//게시글 디테일 페이지 조회(comments) (로그인,비로그인)
exports.detailCommentsAll = async function (board_id) {
  const queryComment = `
    SELECT u.user_image,u.user_id,c.board_id,u.user_mbti,u.nickname,c.comment,c.comment_id
    FROM comments AS c
    left OUTER JOIN users AS u
    ON c.user_id = u.user_id
    WHERE (c.comment_delete_code = 0 ANd c.board_id=${board_id})
    ORDER BY c.createdAt DESC`;

  return await sequelize.query(queryComment, {
    type: Sequelize.QueryTypes.SELECT,
  });
};

//게시글 디테일 페이지 조회(board) (비로그인)
exports.detailBoard = async function (board_id) {
  const queryBoard = `
  SELECT b.board_title,b.board_image,b.board_content,b.view_count,count(l.board_id) as like_count,
  CASE l.board_id
  WHEN '말이안되는값' THEN 'true'
  ELSE 'false'
  END AS like_state
  FROM boards AS b
  left OUTER JOIN comments AS c
  ON (b.board_id = c.board_id AND c.comment_delete_code = 0)
  left OUTER JOIN likes AS l
  ON b.board_id = l.board_id
  WHERE (b.board_delete_code = 0 AND b.board_id=${board_id})
  `;
  return await sequelize.query(queryBoard, {
    type: Sequelize.QueryTypes.SELECT,
  });
};
