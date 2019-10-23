var express = require('express');
var router = express.Router();
var ctrlHome = require("../controllers/home");
var ctrlModel = require("../models/model");

router.get('/', ctrlModel.get_data);

module.exports = router;
