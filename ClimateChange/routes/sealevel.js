var express = require('express');
var router = express.Router();
var ctrlSea = require("../controllers/sealevel");

router.get("/", ctrlSea.get_sealevel);

module.exports = router;
