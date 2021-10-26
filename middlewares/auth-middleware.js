const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");
const { User } = require("../models");
const SECRET_KEY = process.env.MY_SECRET_KEY;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  console.log("미들웨어다", authorization);
  let [tokenType, tokenValue] = [];
  try {
    [tokenType, tokenValue] = authorization.split(" ");
  } catch (error) {
    return res.status(500).send({
      errorMessage: "로그인 후 사용하세요",
    });
  }
  console.log(tokenType);
  if (tokenType !== "Bearer") {
    console.log("미들웨어가 안먹힘");
    res.status(401).send({
      errorMessage: "로그인 후 사용하세요",
    });
    return;
  }
  try {
    console.log("미들웨어 지나갑니다!");
    const { userId } = jwt.verify(tokenValue, SECRET_KEY);
    console.log("미들웨어", userId);
    User.findOne({ where: { userId } }).then((user) => {
      // console.log("미들웨어 유저", user)
      res.locals.user = user;
      console.log("마지막 테스트", res.locals.user);
      next();
    });
  } catch (error) {
    console.log("미들웨어 오류 났네요!");
    res.status(401).send({
      errorMessage: "로그인 후 사용하세요!",
    });
    return;
  }
};
