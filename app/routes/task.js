var express = require('express');
var router = express.Router();
var taskNoticeController = require('../controller/taskNoticeController');


/* GET users listing. */
router.get('/', function(req, res, next) {
  var tt = taskNoticeController.taskNotice();
  res.render('task/task',tt);
  // taskNoticeModel.findOne(function (err, docs) {
  //   if (err) {
  //       return console.error(err);
  //   }else {
  //     console.log('docs:' + docs[0].string);
  //     res.render('task/task',{notice:taskNotice[0].content});
  //   }
  // });

});

/* post notice listing. */
router.post('/notice/add', function(req, res, next) {

    var taskNoticeEntity = new taskNoticeModel({
        title:'notice',
        content:req.body.notice
    });

    taskNoticeEntity.save(function (err, docs){
        if(err) console.log(err);
        console.log('保存成功：' + docs);
        res.send('发布成功！');
    });
    // taskNoticeModel.update({title:'notice'},taskNoticeEntity,function (err, docs){
    //     if(err) console.log(err);
    //     console.log('保存成功：' + docs);
    //     res.send('发布成功！');
    // });
});

/* post notice listing. */
router.post('/add', function(req, res, next) {

    var taskEntity = new taskModel({
        title:req.body.title,
        content:req.body.content
    });

    taskEntity.save(function (err, docs){
        if(err) console.log(err);
        console.log('保存成功：' + docs);
        res.send('发布成功！');
    });
});



module.exports = router;
