/**
 * Created by clay on 2017/12/11.
 */
var taskService = require('../service/taskService');

exports.updateTaskStatus = function(req, callback){
    taskService.updateTaskStatus(req, function (err,taskNotice) {
        callback(err, taskNotice) ;
    });
};

exports.updateTask = function(req, callback){
    taskService.updateTask(req, function (err,taskNotice) {
        callback(err, taskNotice) ;
    });
};

exports.addTask = function(req, callback){
  taskService.addTask(req, function (err,taskNotice) {
      callback(err, taskNotice) ;
  });
};

exports.taskList = function(req, callback){
    taskService.findTaskList(function (err,taskNotice) {
        callback(err, taskNotice) ;
    });
};
