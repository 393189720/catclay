var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskNoticeSchema = new Schema({
    //--基本公告信息， index表示在mongodb中会建立索引
    //--unique: true 唯一性设置
    content: { type: String },
    // createTime: { type: Date }
});