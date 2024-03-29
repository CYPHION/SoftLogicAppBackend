const express = require('express');
const formRoute = require('./form.route')
const newsLetterRoute = require('./newsletter.route')

const router = express.Router();

router.use('/form', formRoute)
router.use('/newsletter', newsLetterRoute)


module.exports = router