var express = require('express');
var router = express.Router();
var taskNoticeController = require('../controller/taskNoticeController');
var taskNoticeModel = require('../models/taskNoticeModel');

/* GET users listing. */
router.get('/', function(req, res, next) {


    function getByConditions(){
        var wherestr = {'content' : 'wo的第一个公告'};

        taskNoticeModel.find(wherestr, function(err, res){
            if (err) {
                console.log("Error:" + err);
            }
            else {
                console.log("Res:" + res);
            }
        })
    }

    getByConditions();

  res.render('task/task',{ title: '任务' });
});

module.exports = router;
