/**
 * Created by clay on 2017/12/11.
 */
var taskNoticeService = require('../service/taskNoticeService');

exports.findTaskNotice = function(callback){
  taskNoticeService.findTaskNotice(function (err,taskNotice) {
      callback(err, taskNotice) ;
  });
};

/**
 * 编辑公告
 * @param callback
 */
exports.updateTaskNotice = function(req, callback){
    taskNoticeService.updateTaskNotice(req, function (err, taskNotice) {
        callback(err, taskNotice) ;
    });
};

/**
 * 保存公告
 * @param callback
 */
exports.saveTaskNotice = function(req, callback){
    taskNoticeService.saveTaskNotice(req, function (err, taskNotice) {
        callback(err, taskNotice) ;
    });
};

