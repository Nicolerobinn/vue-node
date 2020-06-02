// 引入mysql线程池
var dbCongif = require("../util/dbconfig");

//保存验证码10秒
var  nodeSms = ''

// 用于初始化测试
let getCate = (req, res) => {
  var sql = "select * from user";
  var sqlArr = [];
  var callBack = (err, data) => {
    if (err) {
      console.log("链接出错");
    } else {
      res.send({
        list: data,
      });
    }
  };
  dbCongif.sqlConnect(sql, sqlArr, callBack);
};

//随机生成四位验证码
function rand(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
// 获取验证码
let sendCode = (req, res) => {
  let {phone} = req.body;
  let code = rand(1000, 9999);
  var sql =  'select * from user where phone =?'
  var sqlArr = [phone];
  var callBack = (err, data) => {
    if (err) {
      console.log("链接出错");
    } else {
      nodeSms = code
      res.send({
        code: 200,
        msg: "发送成功",
        smscode:code
      });
    }
  };
  dbCongif.sqlConnect(sql, sqlArr, callBack);
};

// 登录接口，对登录手机号进行查询，如果未注册，则跳到addUser函数
// 如果注册则返回JWT
let login = (req, res) => {
  let {phone,sms} = req.body;
  var sql =  'select * from user where phone =?'
  var sqlArr = [phone];
  var callBack = (err, data) => {
    if (err) {
      console.log("链接出错");
    } else {
      if(nodeSms == sms){
        if(data.length>0){
         var arr =   JSON.parse(JSON.stringify(data))
        }else{
          addUser(req, res)
          return
        }
        res.send({
          code: 200,
          data:{ },
          msg: "query success",
          result: "Success",
        })
      }else{
        res.send({
          code: 200,
          msg: "请输入正确验证码",
          result: "Error",
        })
      }
    }
  };
  dbCongif.sqlConnect(sql, sqlArr, callBack);
};

// 对于未注册的用户进行注册，注册完后 返回JWT
let addUser =  async(req, res)=>{
  let {phone,sms} = req.body;
  var sql =  'insert into user(phone,name,create_data) values (?,?,?)'
  var sqlArr = [phone,'东哥奥利给_'+rand(1000, 9999),(new Date()).valueOf()];
  let query = await  dbCongif.SySqlConnect(sql, sqlArr)
  if(query){
    res.send({
      code: 200,
      data:{ },
      msg: "query success",
      result: "Success",
    })
  }
  var callBack = (err, data) => {
    if (err) {
      console.log("链接出错");
    } else {
      if(sms == sms){
        res.send({
          code: 200,
          data:{},
          msg: "query success",
          result: "Success",
        })
      }else{
        res.send({
          code: 200,
          msg: "请输入正确验证码",
          result: "Error",
        })
      }
    }
  };
}
module.exports = {
  getCate,
  login,
  sendCode
};
