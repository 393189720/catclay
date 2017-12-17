/**
 * Created by clay on 2017/12/11.
 */
var taskNoticeModel = require('../models/taskNoticeModel');

/**
 * 获取公告
 * @param callback
 */
exports.findTaskNotice = function (callback) {
    taskNoticeModel.findOne(function (err, docs) {
        if (err) {
            console.error(err);
        } else {
            console.log('docs:' + docs);
        }
        callback(err, docs);
    });
};

/**
 * 保存公告
 * @param callback
 */
exports.saveTaskNotice = function (req, callback) {
    var taskNotice = new taskNoticeModel({
        title: 'notice',
        content: req.body.notice
    });
    taskNotice.save(function (err, docs) {
        if (err) {
            console.error(err);
        } else {
            console.log('docs:' + docs);
        }
        callback(err, docs);
    });
};

/**
 * 更新公告
 * @param callback
 */
exports.updateTaskNotice = function (req, callback) {
    var taskNotice = new taskNoticeModel({
        title: 'notice',
        content: req.body.notice,
        updateTime: Date.now()
    });
    var taskNoticeJson = {title: 'notice',
        content: req.body.notice,
        updateTime: Date.now()
    };
    taskNoticeModel.update({title: 'notice'}, taskNoticeJson, function (err, docs) {
        if (err){
            taskNoticeModel.save();
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
exports.findData = function (model, conditions, fields, options, callback) {

    model.find(conditions, fields, options, function (error, result) {
        if (error) {
            console.log(error);
            callback({success: 0, flag: "find data fail"});
        } else {
            if (result.length != 0) {
                console.log('find success!');
                callback({success: 1, flag: "find data success", result: result});
            }
            else {
                console.log('find fail:no this data!');
                callback({success: 0, flag: 'find fail:no this data!'});
            }

        }

    });
}
