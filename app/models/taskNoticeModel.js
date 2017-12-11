//
var mongoose = require('mongoose');
var taskNoticeSchema = require('../schema/TaskNoticeSchema');
var TaskNotice = mongoose.model('TaskNotice', taskNoticeSchema);



module.exports = TaskNotice;