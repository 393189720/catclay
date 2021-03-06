//
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BaseModel = require('./baseModel');

var TaskNoticeSchema = new Schema({
  //--基本公告信息， index表示在mongodb中会建立索引
  //--unique: true 唯一性设置
  title: {type: String },
  content: { type: String },
  updateTime: { type: Date,default:Date.now() }
});
var TaskNotice = mongoose.model('TaskNotice', TaskNoticeSchema);

module.exports = TaskNotice;