var express = require('express');
const {insert} = require('../controller/usercontroller');
var router = express.Router();

/* GET home page. */
router.post('/insert', insert);

module.exports = router;
