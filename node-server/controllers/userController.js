// var dbCongif = require("../util/dbconfig");
function rand(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
sendCode = (req, res) => {
  let phone = req.body.user_phone;
  let code = rand(1000, 9999);
  res.send({
    code: 200,
    msg: "发送成功",
  });
  console.log(code);
};

module.exports = {
  sendCode,
};
