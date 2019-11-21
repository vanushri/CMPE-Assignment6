var express = require('express');
var router = express.Router();
var ctrlEmission = require("../controllers/emission");

router.get("/", ctrlEmission.get_emission);

module.exports = router;
