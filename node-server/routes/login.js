var express = require("express");
var router = express.Router();
var cate = require("../controllers/cateController");
router.post("/login", cate.login);

module.exports = router;
