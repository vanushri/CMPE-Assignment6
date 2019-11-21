var express = require('express');
var router = express.Router();
var ctrlFossilFuel = require("../controllers/fossilfuel");

router.get("/", ctrlFossilFuel.get_fossilfuel);

module.exports = router;
