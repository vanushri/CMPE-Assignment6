var express = require("express");
var router = express.Router();
var ctrlHome = require("../controllers/home");
var ctrlModel = require("../models/model");
var ctrlLogin = require("../controllers/login");

//router.get('/', ctrlModel.get_data);

router.get("/", ctrlLogin.admin_logged_in, ctrlModel.get_data);

router.post("/addArticle",ctrlModel.post_addarticle);

router.get("/", ctrlModel.search2);

//router.post('/delete', ctrlModel.post_deletearticle)

module.exports = router;