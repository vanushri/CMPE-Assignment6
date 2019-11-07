var express = require("express");
var router = express.Router();
var ctrlModel = require("../models/model");

router.get("/", ctrlModel.get_data);

router.post("/addArticle",ctrlModel.post_addarticle);

router.get("/search", ctrlModel.article_search);

module.exports = router;