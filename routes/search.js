const express = require('express');
const router = express.Router();
const searchController = require('../controller/search');

//미들웨어
const authMiddleware = require('../middlewares/auth-middleware');
const { ROUTE } = require('../config/constants');

//검색하기
router.get(ROUTE.SEARCH.SEARCH, authMiddleware, searchController.Search);

module.exports = router;