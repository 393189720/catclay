/**
 * Created by clay on 2017/12/11.
 */
var memoModel = require('../models/memoModel');

/**
 * 查询备忘录列表
 * @param callback
 */
exports.findMemoList = function(callback){
    memoModel.find(function (err, docs) {
        if (err) {
            console.error(err);
        }else {
            // console.log('docs:' + docs);
        }
        callback(err,docs);
    }).sort('-updateTime');
};

/**
 * 新建备忘录
 * @param callback
 */
exports.addMemo = function(req, callback){
    var memo = new memoModel({
        content: req.body.memo,
        status:0,
        createTime: Date.now(),
        updateTime: Date.now()
    });
    memo.save(function (err, docs) {
        if (err) {
            console.error(err);
        } else {
            console.log('docs:' + docs);
        }
        callback(err, docs);
    });
};

/**
 * 删除备忘录
 * @param callback
 */
exports.removeMemo = function(req, callback){
    var _id = req.query.memoId;
    memoModel.findByIdAndRemove({_id:_id},function (err, docs) {
        if (err) {
            console.error(err);
        } else {
            console.log('docs:' + docs);
        }
        callback(err, docs);
    });
};


/**
 * 更新备忘录
 * @param callback
 */
exports.updateMemo = function(req, callback){
    var _id = req.query.memoId;
    var status = req.query.status;

    var memo = {
        $set:{status:status, updateTime: Date.now()}
    };
    console.log('_id:'+ _id);

    memoModel.update({_id:_id},memo,function (err, docs) {
        if (err) {
            console.error(err);
        } else {
            // console.log('docs:' + docs);
        }
        callback(err, docs);
    });
};
