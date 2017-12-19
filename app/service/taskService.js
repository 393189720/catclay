/**
 * Created by clay on 2017/12/11.
 */
var taskModel = require('../models/taskModel');

/**
 * 查询任务列表
 * @param callback
 */
exports.findTaskList = function(callback){
    taskModel.find(function (err, docs) {
        if (err) {
            console.error(err);
        }else {
            console.log('docs:' + docs);
        }
        callback(err,docs);
    }).sort('-updateTime');
};

/**
 * 新建任务
 * @param callback
 */
exports.addTask = function(req, callback){
    var task = new taskModel({
        title: req.body.title,
        content: req.body.content,
        lever: req.body.taskLever,
        shopName: req.body.shopName,
        orderNo: req.body.orderNo,
        mark: "",
        status:0,
        createTime: Date.now(),
        updateTime: Date.now()
    });
    task.save(function (err, docs) {
        if (err) {
            console.error(err);
        } else {
            console.log('docs:' + docs);
        }
        callback(err, docs);
    });
};

/**
 * 删除任务
 * @param callback
 */
exports.removeTask = function(req, callback){
    var _id = req.query.taskId;
    taskModel.findByIdAndRemove({_id:_id},function (err, docs) {
        if (err) {
            console.error(err);
        } else {
            console.log('docs:' + docs);
        }
        callback(err, docs);
    });
};


/**
 * 更新任务
 * @param callback
 */
exports.updateTask = function(req, callback){
    var _id = req.body._id;
    var mark = req.body.mark;

    var task = new taskModel({
        status:1,
        mark:mark,
        updateTime: Date.now()
    });
    console.log('_id:'+ _id);

    taskModel.update({_id:_id},{$set:{status:1,mark:mark, updateTime: Date.now()}},function (err, docs) {
        // task.findByIdAndUpdate(req.query.taskId,{$set:{task:task}},task,function (err, docs) {
        if (err) {
            console.error(err);
        } else {
            console.log('docs:' + docs);
        }
        callback(err, docs);
    });
};

/**
 * 更新任务完成状态
 * @param callback
 */
exports.updateTaskStatus = function(req, callback){
    var _id = req.query.taskId;
    console.log('_id:'+ req.query.taskId);

    //少量字段更新方法
    taskModel.findByIdAndUpdate(_id, {$set:{status:1}}, function (err, docs) {
        if (err) {
            console.error(err);
        } else {
            console.log('docs:' + docs);
        }
        callback(err, docs);
    });
};