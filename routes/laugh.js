var express = require('express');
var router = express.Router();

/* GET laugh listing.
 * 请求父路径：/laugh
 */
router.get('/', function(req, res, next) {
  res.render('laugh/index', '');
});
router.post('/', function(req, res, next) {
  res.render('laugh/index', '');
  // res.send({name:"zhangsan",age:40});
});

module.exports = router;
