const express = require('express');
const formRoute = require('./form.route')
const newsLetterRoute = require('./newsletter.route')
const briefFromRoute = require('./briefForm.routes')
const uploadsRoute = require('./upload.routes')

const router = express.Router();

router.use('/form', formRoute)
router.use('/newsletter', newsLetterRoute)
router.use('/brief-from', briefFromRoute)
router.use('/uploads', uploadsRoute)


module.exports = router