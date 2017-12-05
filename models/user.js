var UserSchema = new Schema({
    //--基本用户信息， index表示在mongodb中会建立索引
    //--unique: true 唯一性设置
    name: { type: String, index: true },
    loginname: { type: String, unique: true },
    pass: { type: String },
    email: { type: String, unique: true },
    url: { type: String },
    profile_image_url: {type: String},
    location: { type: String },
    signature: { type: String },
    profile: { type: String },
    weibo: { type: String },
    avatar: { type: String },
    githubId: { type: String, index: true },
    githubUsername: {type: String},
    is_block: {type: Boolean, default: false},

    //--用户产生数据meta
    score: { type: Number, default: 0 },
    topic_count: { type: Number, default: 0 },
    reply_count: { type: Number, default: 0 },
    follower_count: { type: Number, default: 0 },
    following_count: { type: Number, default: 0 },
    collect_tag_count: { type: Number, default: 0 },
    collect_topic_count: { type: Number, default: 0 },
    create_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now },
    is_star: { type: Boolean },
    level: { type: String },
    active: { type: Boolean, default: true },

    //-mail
    receive_reply_mail: {type: Boolean, default: false },
    receive_at_mail: { type: Boolean, default: false },
    from_wp: { type: Boolean },
    retrieve_time : {type: Number},
    retrieve_key : {type: String}
});