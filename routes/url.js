const express = require('express');

const router = express.Router();
const {handleGenerateShortUrl,findurl} = require('../controllers/url');

router.post('/',handleGenerateShortUrl);
router.post('/findurl',findurl);

module.exports = router
    

