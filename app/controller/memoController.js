/**
 * Created by clay on 2017/12/11.
 */
var memoService = require('../service/memoService');

exports.updateMemoStatus = function(req, callback){
    memoService.updateMemo(req, function (err,memo) {
        callback(err, memo) ;
    });
};

exports.updateMemo = function(req, callback){
    memoService.updateMemo(req, function (err,memo) {
        callback(err, memo) ;
    });
};

exports.addMemo = function(req, callback){
  memoService.addMemo(req, function (err,memo) {
      callback(err, memo) ;
  });
};

exports.removeMemo = function(req, callback){
    memoService.removeMemo(req, function (err,memo) {
        callback(err, memo) ;
    });
};

exports.memoList = function(req, callback){
    memoService.findMemoList(function (err,memo) {
        callback(err, memo) ;
    });
};
