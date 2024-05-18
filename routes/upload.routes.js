const express = require('express');
const { uploadSingleImage } = require('../middlewares/uploadMiddleware');
const { uploadFile } = require('../controller/file.controller');

const router = express.Router();

router.post('/', uploadSingleImage, uploadFile);

module.exports = router;
