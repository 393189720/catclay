var express = require('express');
var router = express.Router();
var taskNoticeController = require('../controller/taskNoticeController');
var taskNoticeModel = require('../models/taskNoticeModel');
var taskModel = require('../models/taskModel');

/* GET users listing. */
router.get('/', function(req, res, next) {
  taskNoticeModel.find(function (err, taskNotice) {
    if (err) {
        return console.error(err);
    }else {
      console.log('taskNotice===' + taskNotice[0].content);
      res.render('task/task',{notice:taskNotice[0].content});
    }
  });

});

/* GET users listing. */
router.post('/notice/add', function(req, res, next) {
  // var taskNoticeEntity = new taskNoticeModel({
  //   content:"aaaaaaaaaaaabbbbbb"
  // });
  // taskNoticeEntity.save(function(err, docs){
  //   if(err) console.log(err);
  //   console.log('保存成功：' + docs);
  // })

  //5a2f7433a06d19f64a19b1eb
  taskNoticeModel.update({title:'notice'},{content:req.body.notice},function (err, docs){
    if(err) console.log(err);
      console.log('保存成功：' + docs);
  });

  // taskNoticeModel.find(function (err, taskNotice) {
  //   if (err) {
  //     return console.error(err);
  //   }else {
  //     console.log('res===' + taskNotice.title);
  //   }
  // });
  //
  // res.render('admin',{ title: 'glhy' });
});

module.exports = router;
