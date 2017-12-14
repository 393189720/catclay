/**
 * Created by clay on 2017/12/11.
 */
var taskNoticeModel = require('../models/taskNoticeModel');

exports.findTaskNotice = function(){
  taskNoticeModel.findOne(function (err, docs) {
    if (err) {
      return console.error(err);
    }else {
      console.log('docs:' + docs.content);
      return docs;
    }
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
