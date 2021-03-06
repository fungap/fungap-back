import * as express from 'express';
const router = express.Router();

import authRouter from './auth';
import userRouter from './user';
import mypageRouter from './mypage';
import adminRouter from './admin';
import boardRouter from './board';
import mbtiRouter from './mbti';
import commRouter from './comment';
import chatRouter from './chat';
import gameRouter from './game';
import allContentRouter from './allcontent';

router.use('/user', [userRouter]);
router.use('/auth', [authRouter]);
router.use('/mypage', [mypageRouter]);
router.use('/admin', [adminRouter]);
router.use('/games', [gameRouter]);
router.use('/board', [boardRouter]);
router.use('/comment', [commRouter]);
router.use('/mbti', [mbtiRouter]);
router.use('/chat', [chatRouter]);
router.use('/allcontent', [allContentRouter]);

export default router;
