/**
 * Created by clay on 2016/11/11.
 * 默认配置文件
 */
//port:程序启动要监听的端口号
//session：express-session的配置信息
//mongodb:mongodb的地址，blog为db名
module.exports = {
    port: 4000,
    session: {
      secret: 'catclay',key: 'catclay',maxAge: 2592000000
    },
    mongodb: 'mongodb://localhost:27017/blog'
}