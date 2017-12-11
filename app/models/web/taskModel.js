var TaskNoticeSchema = new Schema({
    //--基本公告信息， index表示在mongodb中会建立索引
    //--unique: true 唯一性设置
    title: { type: String },
    content: { type: String },
    createTime: { type: Date },
    status: {type: Number}//0：待办；1：已完成
});