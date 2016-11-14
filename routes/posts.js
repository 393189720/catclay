var express = require('express');
var router = express.Router();

/* GET blog listing.
 * 请求父路径：/blog
 */
router.get('/', function(req, res, next) {
  res.render('./jade/index',{ title: 'Blog',name:"zhangsan" });
});
router.post('/', function(req, res, next) {
  res.render('index', { title: 'Blog',name:"zhangsan" });
  // res.send({name:"zhangsan",age:40});
});

/**
 * 博客分类监听
 */
router.get('/slug', function(req, res, next) {
  res.render('index', { title: 'Express slug',name:"zhangsan" });
  // res.send({name:"zhangsan",age:40});
});

module.exports = router;
