var express = require('express');
var router = express.Router();
var taskNoticeController = require('../controller/taskNoticeController');
var taskController = require('../controller/taskController');


/* GET home page. */
router.get('/', function(req, res, next) {
    taskNoticeController.findTaskNotice( function (err,taskNotice) {
        if (err) {
            return console.error(err);
        } else if (taskNotice == null){
            taskNotice = "";
        } else {
            console.log('taskNotice:' + taskNotice);
        }
        taskController.taskList(req,function (err, taskList) {
            if (err) {
                return console.error(err);
            } else {
                console.log('taskList:' + taskList);
            }
            res.render('index', {taskNotice:taskNotice,taskList:taskList});
        });
        // res.render('task/task', JSON.stringify(taskNotice));
    });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
    res.render('about', { title: '关于我们' });
});

module.exports = router;
