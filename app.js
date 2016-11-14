var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var flash = require('connect-flash');
var config = require('config-lite');
var pkg = require('./package');


var routes = require('./routes/index');
var users = require('./routes/users');
var blog = require('./routes/posts');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//session中间件
app.use(session({
    name: config.session.key,//设置cookie中保存session id的字段名称
    secret: config.session.secret,//通过设置secret来计算hash值，并开放在cookie中，使产生的signedCookie防篡改
    cookie: {
        maxAge : config.session.maxAge//过期时间，过期后cookie中的session id自动删除
    },
    store: new MongoStore({
        url:config.mongodb,
        autoRemove:'native'
        // url: config.mondodb //mongodb地址
    })
}));
//flash中间件，用来显示通知
app.use(flash());

app.use('/', routes);
app.use('/users', users);
app.use('/blog', blog);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
