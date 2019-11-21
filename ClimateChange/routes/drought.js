var express = require('express');
var router = express.Router();
var ctrlDrought = require("../controllers/drought");

router.get("/", ctrlDrought.get_drought);

module.exports = router;
