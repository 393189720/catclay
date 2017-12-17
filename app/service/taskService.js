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
  }).sort('-createTime');
};

/**
 * 新建任务
 * @param callback
 */
exports.addTask = function(req, callback){
    var task = new taskModel({
        title: req.body.title,
        content: req.body.content,
        status:0
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
 * 更新任务
 * @param callback
 */
exports.updateTask = function(req, callback){
    var title    = req.body.title;
    var content  = req.body.t_content;
    var _id = req.params.tid;
    var tab      = req.body.tab;

    var task = new taskModel({
        status:1
    });
    console.log('_id:'+ req.query.taskId);

    task.update({_id:req.query.taskId},{$set:{status:1}},function (err, docs) {
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



/**
 * 公共find方法 非关联查找
 * @param model
 * @param conditions
 * @param fields 查找时限定的条件，如顺序，某些字段不查找等
 * @param options
 * @param callback
 */
exports.findData =function(model,conditions,fields,options,callback) {

    model.find(conditions, fields, options, function(error, result){
        if(error) {
            console.log(error);
            callback({success: 0, flag: "find data fail"});
        } else {
            if(result.length!=0){
                console.log('find success!');
                callback({success: 1, flag: "find data success",result:result});
            }
            else{
                console.log('find fail:no this data!');
                callback({success: 0, flag: 'find fail:no this data!'});
            }

        }

    });
}
