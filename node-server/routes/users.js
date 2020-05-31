var express = require("express");
var router = express.Router();
var user = require("../controllers/userController");
router.post("/sendCode", user.sendCode);

module.exports = router;
