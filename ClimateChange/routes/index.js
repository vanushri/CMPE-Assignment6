var express = require('express');
var router = express.Router();
var ctrlIndex = require("../controllers/index");
var ctrlGraph = require("../controllers/graph");
var ctrlArticles = require("../controllers/articles");
var ctrlLogin = require("../controllers/login");
var ctrlHome = require("../controllers/home");
var ctrlModel = require("../models/model");

//router.get('/', ctrlIndex.get_index);

router.get('/', ctrlLogin.logged_in, ctrlHome.get_home);

router.get('/graph', ctrlGraph.get_graphs);

router.post('/articles', ctrlArticles.post_articles);

router.post('/delete', ctrlModel.post_deletearticle)

router.post('/update', ctrlModel.post_updatearticle)

// router.post('/search', ctrlModel.post_searcharticles)

router.post('/search', ctrlModel.article_search)

//router.get('/search2', ctrlModel.search2)

module.exports = router;
