/**
 * Created by clay on 2017/12/11.
 */
var taskNoticeService = require('../service/taskNoticeService');

exports.taskNotice = function(){
  var taskNotice = taskNoticeService.findTaskNotice();
  return taskNotice;
};