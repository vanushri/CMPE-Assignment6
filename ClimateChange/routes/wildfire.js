var express = require('express');
var router = express.Router();
var ctrlWildFire = require("../controllers/wildfire");

router.get("/", ctrlWildFire.get_wildfire);

module.exports = router;
