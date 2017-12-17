var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/task');
  // res.render('index', { title: 'Express' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
    res.render('about', { title: '关于我们' });
});

module.exports = router;
