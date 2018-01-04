var express = require('express');
var router = express.Router();
var taskNoticeController = require('../controller/taskNoticeController');
var taskController = require('../controller/taskController');


/* GET users listing. */
router.get('/', function (req, res, next) {
    taskNoticeController.findTaskNotice( function (err,taskNotice) {
        if (err) {
            return console.error(err);
        } else if (taskNotice == null){
          taskNotice = "";
        } else {
            // console.log('taskNotice:' + taskNotice);
        }
        taskController.taskList(req,function (err, taskList) {
            if (err) {
                return console.error(err);
            } else {
                // console.log('taskList:' + taskList);
            }
            res.redirect('/');
            // res.render('/index', {taskNotice:taskNotice,taskList:taskList});
        });
        // res.render('task/task', JSON.stringify(taskNotice));
    });
});

/* post notice listing. */
router.post('/add', function (req, res, next) {
    taskController.addTask(req, function (err, result) {
        if (err) {
            if (err.code == 11000){
                console.log("插入失败，数据不能重复插入！");
            }
            console.log(err);
        } else {
            console.log('保存成功：' + result);
        }
        res.redirect('/task');
        // res.render('admin', {title: '管理后台'});
    });
});

/* post notice listing. */
router.post('/notice/update', function (req, res, next) {
    taskNoticeController.updateTaskNotice(req, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log('编辑成功：' + result);
        }
        res.redirect('/task');
        // res.render('admin',{title: '管理后台'});
    });
});

/* get task update listing. */
router.get('/delete', function (req, res, next) {
    taskController.removeTask(req, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log('保存成功：' + result);
        }
        res.redirect('/');
    });
});

/* get task update listing. */
router.post('/update', function (req, res, next) {
    taskController.updateTask(req, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log('保存成功：' + result);
        }
        res.redirect('/task');
    });
});


module.exports = router;
