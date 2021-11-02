const express = require('express');
const router = express.Router(); // 라우터라고 선언한다.
const { boardController } = require('../controllers');
const { authenticateJWTall } = require('../middlewares/authenticateJWTall');
///board/;
//홈화면
router.get('/home', authenticateJWTall, boardController.getBoardHome);

//상황별 페이지 게시글 전체 조회
router.get('/', authenticateJWTall, boardController.getSituationBoard);

//상황별 게시글
router.get('/:board_id', authenticateJWTall, boardController.getDetailBoard);

// 게시글 좋아요,취소
router.post('/:board_id/like', authenticateJWTall, boardController.changeLike);

module.exports = router;
