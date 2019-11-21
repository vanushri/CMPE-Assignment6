var express = require('express');
var router = express.Router();
var ctrlDeforest = require("../controllers/deforest");

router.get("/", ctrlDeforest.get_deforestation);

module.exports = router;
