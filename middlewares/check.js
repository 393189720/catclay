/**
 * Created by clay on 2016/11/14.
 * 登录检查中间件
 */
module.exports = {
  chechLogin: function (req, res, next) {
      if (!req.session.user){
          req.flash('error', '未登录');
          return res.redirect('/blog/signin');
      }
      next();
  },

    checkNotLogin: function (req, res, next) {
        if (!req.session.user){
            req.flash('error', '已登录');
            return res.redirect('back');//返回之前的页面
        }
        next();
    }
};
