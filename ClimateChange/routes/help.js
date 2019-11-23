var express = require('express');
var router = express.Router();
var ctrlHelp = require("../controllers/help");

router.get("/", ctrlHelp.get_help);

module.exports = router;

