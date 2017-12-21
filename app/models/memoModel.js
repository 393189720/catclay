var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BaseModel = require('./baseModel');

var MemoSchema = new Schema({
    //--基本公告信息， index表示在mongodb中会建立索引
    //--unique: true 唯一性设置
    title: {type: String},
    content: {type: String},
    createTime: {type: Date, default: Date.now()},
    status: {type: Number, default: 0},//0：待办；1：已完成；
    lever: {type: Number,default: 0},// 0：默认；1：急
    top: {type: Boolean, default: false}, // 置顶帖
    updateTime: {type: Date, default: Date.now},
});
MemoSchema.plugin(BaseModel);
MemoSchema.index({createTime: -1});
var Task = mongoose.model('Memo', MemoSchema);

module.exports = Task;