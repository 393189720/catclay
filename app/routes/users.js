var express = require('express');
var router = express.Router();

var taskNoticeController = require('../controller/taskNoticeController');
var userModel = require('../models/UserModel');

/* GET users listing. */
router.get('/', function(req, res, next) {
  userModel.find(function (err, users) {
    if (err) {
      return console.error(err);
    }else {
      console.log('res===' + users);
      res.send('respond with a resource = '+ users);
    }
  });

});

router.post('/', function (req, res, next) {
    var user = req.body;
    var name = user.userName;
});

module.exports = router;
