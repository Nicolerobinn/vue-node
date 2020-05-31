var express = require("express");
var router = express.Router();
var cate = require("../controllers/cateController");
router.get("/", cate.getCate);

module.exports = router;
