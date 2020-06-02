const mysql = require("mysql");
module.exports = {
  // 数据库配置
  config: {
    host: "localhost",
    port: "3306",
    user: "root",
    password: "123456",
    database: "test",
  },
  // 链接数据库，使用mysql的连接池连接方式
  // 链接池对象
  sqlConnect(sql, sqlArr, callBack) {
    var pool = mysql.createPool(this.config);
    pool.getConnection((err, conn) => {
      if (err) {
        console.log("连接失败");
        return;
      }
      //事件驱动回调
      conn.query(sql, sqlArr, callBack);
      //释放连接
      conn.release();
    });
  },
  // 异步
  // 链接数据库，使用mysql的连接池连接方式
  // 链接池对象
  SySqlConnect(sql, sqlArr){
   return new Promise((resolve,reject)=>{
    var pool = mysql.createPool(this.config);
      pool.getConnection((err, conn) => {
        if (err) {
          reject(err)
        }else{
          //事件驱动回调
          conn.query(sql, sqlArr, (err,data)=>{
            if(err){
              reject(err)
            }else{
              resolve(data)
            }
          });
          //释放连接
          conn.release();
        }
      });
   })
  }
};
