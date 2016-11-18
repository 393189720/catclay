var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { });
  // res.redirect('/blog/posts');
});
router.post('/', function(req, res, next) {
  res.render('index', { title: 'Catclay',name:"clay" });
  // res.send({name:"zhangsan",age:40});
});


module.exports = router;
