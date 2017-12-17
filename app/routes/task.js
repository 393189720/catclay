var express = require('express');
var router = express.Router();
var taskNoticeController = require('../controller/taskNoticeController');
var taskController = require('../controller/taskController');


/* GET users listing. */
router.get('/', function (req, res, next) {
    taskNoticeController.findTaskNotice( function (err,taskNotice) {
        if (err) {
            return console.error(err);
        } else {
            console.log('taskNotice:' + taskNotice.content);
        }
        taskController.taskList(req,function (err, taskList) {
            if (err) {
                return console.error(err);
            } else {
                console.log('taskList:' + taskList);
            }
            res.render('task/task', {taskNotice:taskNotice,taskList:taskList});
        });
        // res.render('task/task', JSON.stringify(taskNotice));
    });
});


/* post notice listing. */
router.post('/add', function (req, res, next) {
    taskController.addTask(req, function (err, result) {
        if (err) {
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
router.get('/update', function (req, res, next) {
    taskController.updateTaskStatus(req, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log('保存成功：' + result);
        }
        res.redirect('/task');
    });
});


module.exports = router;
