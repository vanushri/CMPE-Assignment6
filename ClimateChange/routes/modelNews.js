var express = require("express");
var router = express.Router();
var ctrlNewsModel = require("../models/modelNews");

router.get("/", ctrlNewsModel.get_data);

//router.post("/addArticle",ctrlModel.post_addarticle);

//router.get("/search", ctrlModel.article_search);

module.exports = router;