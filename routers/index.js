const express = require('express');
const router = express.Router();

const authRouter = require('./auth');
const userRouter = require('./user');
const boardRouter = require('./board');
const adminRouter = require('./admin');
// const likesRouter = require('./likes');
const commRouter = require('./comment');
router.use('/user', [userRouter]);
router.use('/auth', [authRouter]);
router.use('/board', [boardRouter]);
router.use('/comment', [commRouter]);
router.use('/admin', [adminRouter])
// router.use('/like', [likesRouter]);

module.exports = router;
