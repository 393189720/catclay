/**
 * Created by clay on 2017/12/11.
 */
var userDao = require('../models/userModel');
var userService;

userDao.find(function (err, res) {
  if (err) {
    return console.error(err);
  }else {
    console.log('res===' + res);
  }
});

modal.exports = userService;