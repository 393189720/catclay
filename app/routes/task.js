var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('task/task',{ title: '任务' });
});

module.exports = router;
