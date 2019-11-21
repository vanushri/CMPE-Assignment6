var express = require('express');
var router = express.Router();
var ctrlGlobal = require("../controllers/globalwarming");

router.get("/", ctrlGlobal.get_globalwarming);

module.exports = router;
