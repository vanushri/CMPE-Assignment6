var express = require('express');
var router = express.Router();
var ctrlArticles = require("../controllers/articles");
var ctrlModel = require("../models/model");
// var ctrlDash = require("../controllers/dashboard");

//router.get("/", ctrlModel.get_data);
// router.get("/", ctrlDash.get_dashboard);

router.post('/articles', ctrlArticles.post_articles);

router.post('/delete', ctrlModel.post_deletearticle)

router.post('/update', ctrlModel.post_updatearticle)

router.post('/search', ctrlModel.article_search)

module.exports = router;
