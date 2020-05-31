var dbCongif = require("../util/dbconfig");
getCate = (req, res) => {
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

module.exports = {
  getCate,
};
