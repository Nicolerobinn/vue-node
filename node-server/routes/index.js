var express = require('express');
var router = express.Router();
var dbCongif = require('../util/dbconfig')
/* GET home page. */
router.get('/', function(req, res, next) {
  var sql = "select * from detil"
  var sqlArr = [];
  var callBack =(err,data)=>{
    if(err){
      console.log('链接出错')
    }else{
      res.send({
        'list':data
      })
    }
  }
  dbCongif.sqlConnect(sql,sqlArr,callBack)
});

module.exports = router;
