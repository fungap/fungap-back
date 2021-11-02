const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { Op } = require('sequelize');
const { cloneNode } = require('@babel/types');

exports.jwtCreate = async (profile) => {
  const basicInfo = {
    email: profile.data?.kakao_account?.email || profile.data?.properties.email,
    nickname:
      profile.data?.kakao_account?.profile.nickname ||
      profile.data?.properties.nickname,
    user_image:
      profile.data?.kakao_account?.profile.profile_image_url ||
      profile.data?.properties?.profile_image,
    provider: 'kakao',
  };

  const snsId = profile.data?.id || profile.id;

  //refresh token 발급
  const refreshToken = jwt.sign({}, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_REFRESH_EXPIRE,
  });

  try {
    const exUser = await User.findOne({
      where: { [Op.and]: [{ sns_id: snsId }, { provider: 'kakao' }] },
    });

    if (exUser) {
      //카카오톡 사용자의 정보를 로그인 시마다 DB에 update
      await User.update(
        {
          ...basicInfo,
          refresh_token: refreshToken,
        },
        {
          where: { sns_id: snsId },
        }
      );
    } else {
      await User.create({
        ...basicInfo,
        sns_id: snsId,
        refresh_token: refreshToken,
      });
    }
    const user = await User.findOne({
      where: {
        [Op.or]: [
          { email: profile?.response?.email },
          { nickname: profile?.response?.nickname },
        ],
      },
    });
    const user_id = user.user_id;
    basicInfo.user_id = user_id;
    //access token 발급
    const accessToken = jwt.sign(basicInfo, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_ACCESS_EXPIRE,
    });
    return [accessToken, refreshToken];
  } catch (error) {
    console.error(error);
  }
};

exports.jwtGoogleCreate = async (profile) => {
  const basicInfo = {
    email: profile?.email,
    nickname: profile?.name,
    user_image: profile?.picture,
    provider: 'google',
  };
  //refresh token 발급
  const refreshToken = jwt.sign({}, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_REFRESH_EXPIRE,
  });

  try {
    const exUser = await User.findOne({
      where: { [Op.and]: [{ sns_id: profile?.sub }, { provider: 'google' }] },
    });

    if (exUser) {
      //구글사용자의 정보를 로그인 시마다 DB에 update
      await User.update(
        {
          ...basicInfo,
          refresh_token: refreshToken,
        },
        {
          where: { sns_id: profile?.sub },
        }
      );
    } else {
      await User.create({
        ...basicInfo,
        sns_id: profile?.sub,
        refresh_token: refreshToken,
      });
    }
    const user = await User.findOne({
      where: {
        [Op.or]: [
          { email: profile?.response?.email },
          { nickname: profile?.response?.nickname },
        ],
      },
    });
    const user_id = user.user_id;
    basicInfo.user_id = user_id;
    //access token 발급
    const accessToken = jwt.sign(basicInfo, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_ACCESS_EXPIRE,
    });
    return [accessToken, refreshToken];
  } catch (error) {
    console.error(error);
  }
};
//네이버
exports.jwtNaverCreate = async (profile) => {
  // const userId = await User.findOne({
  //   where: {
  //     [Op.or]: [
  //       { email: profile?.response?.email },
  //       { nickname: profile?.response?.nickname },
  //     ],
  //   },
  // });
  const basicInfo = {
    // user_id: userId?.user_id,
    email: profile?.response?.email,
    nickname: profile?.response?.nickname,
    user_image: profile?.response?.profile_image,
    provider: 'naver',
  };
  console.log(basicInfo);

  const snsId = profile?.response?.id;

  //refresh token 발급
  const refreshToken = jwt.sign({}, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_REFRESH_EXPIRE,
  });

  try {
    const exUser = await User.findOne({
      where: { [Op.and]: [{ sns_id: snsId }, { provider: 'naver' }] },
    });

    if (exUser) {
      //네이버 사용자의 정보를 로그인 시마다 DB에 update
      await User.update(
        {
          ...basicInfo,
          refresh_token: refreshToken,
        },
        {
          where: { sns_id: snsId },
        }
      );
    } else {
      await User.create({
        ...basicInfo,
        sns_id: snsId,
        provider: 'naver',
        refresh_token: refreshToken,
      });
      const user = await User.findOne({
        where: {
          [Op.or]: [
            { email: profile?.response?.email },
            { nickname: profile?.response?.nickname },
          ],
        },
      });
      const user_id = user.user_id;
      basicInfo.user_id = user_id;
    }
    console.log(basicInfo);
    console.log('---------------------------------');
    //access token 발급
    const accessToken = jwt.sign(basicInfo, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_ACCESS_EXPIRE,
    });
    return [accessToken, refreshToken];
  } catch (error) {
    console.error(error);
  }
};

//로컬로그인
exports.jwtLocalCreate = async (profile) => {
  const basicInfo = {
    email: profile?.dataValues?.email,
    nickname: profile?.dataValues?.nickname,
    user_image: profile?.dataValues?.profile_image,
    user_mbti: profile?.dataValues?.user_mbti,
    user_authority: profile?.dataValues?.user_authority,
    provider: profile?.dataValues?.provider,
  };

  const refreshToken = jwt.sign({}, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_REFRESH_EXPIRE,
  });

  try {
    await User.update(
      {
        refresh_token: refreshToken,
      },
      {
        where: { email: profile?.dataValues?.email, provider: 'local' },
      }
    );

    const user_id = profile?.dataValues?.user_id;
    basicInfo.user_id = user_id;
    //access token 발급
    const accessToken = jwt.sign(basicInfo, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_ACCESS_EXPIRE,
    });
    return [accessToken, refreshToken];
  } catch (error) {
    console.error(error);
  }
};
