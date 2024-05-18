const express = require('express');
const briefFormController = require('../controller/briefForm.controller');

const router = express.Router();


//Student Year Route

router.post('/create', briefFormController.createBriefForm);

module.exports = router;