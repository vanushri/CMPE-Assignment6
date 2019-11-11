var express = require('express');
var router = express.Router();
var ctrlDash = require("../controllers/dashboard");

router.get("/", ctrlDash.get_dashboard);

module.exports = router;
