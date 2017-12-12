var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  //--基本用户信息， index表示在mongodb中会建立索引
  //--unique: true 唯一性设置
  name: { type: String, index: true },
  loginName: { type: String, unique: true },
  password: { type: String },
  email: { type: String, unique: true },
  url: { type: String },
  profile_image_url: {type: String},
  location: { type: String },
  signature: { type: String },
  profile: { type: String },
  avatar: { type: String },
  is_block: {type: Boolean, default: false},

  //--用户产生数据meta
  score: { type: Number, default: 0 },
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now },
  level: { type: String },
  active: { type: Boolean, default: true },

});
var User = mongoose.model('User', UserSchema);

module.exports = User;