var express = require("express");
var router = express.Router();
var user = require("../controllers/cateController");
router.post("/sms", user.sendCode);
module.exports = router;
