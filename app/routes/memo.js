var express = require('express');
var router = express.Router();
var memoController = require('../controller/memoController');


/* GET users listing. */
router.get('/', function (req, res, next) {
    memoController.memoList(req, function (err, memoList) {
        if (err) {
            return console.error(err);
        } else {
            // console.log('taskList:' + taskList);
        }
        res.render('memo', {memoList:memoList});
    });
});

/* post notice listing. */
router.post('/add', function (req, res, next) {
    memoController.addMemo(req, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log('保存成功：' + result);
        }
        res.redirect('/memo');
    });
});

/* get memo update listing. */
router.get('/delete', function (req, res, next) {
    memoController.removeMemo(req, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log('删除成功：' + result);
        }
        res.redirect('/memo');
    });
});

/* get memo update listing. */
router.get('/update', function (req, res, next) {
    memoController.updateMemo(req, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log('保存成功：' + result);
        }
        res.redirect('/memo');
    });
});


module.exports = router;
