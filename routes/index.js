var express = require('express');
const {insert, getdata} = require('../controller/usercontroller');
var router = express.Router();

/* GET home page. */
router.post('/insert', insert);
router.get('/',getdata);

module.exports = router;
