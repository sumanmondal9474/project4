const express = require('express');
const router = express.Router();

const {shortUrl ,geturlCode ,} = require("../controllers/urlController")



router.post('/url/shorten',shortUrl)

router.get('/:urlCode',geturlCode)

module.exports = router;

