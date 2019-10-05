var express = require('express');
var router = express.Router();
var ctrlIndex = require("../controllers/index");
var ctrlGraph = require("../controllers/graph");
var ctrlArticles = require("../controllers/articles");
var ctrlLogin = require("../controllers/login");
var ctrlHome = require("../controllers/home");

//router.get('/', ctrlIndex.get_index);

router.get('/', ctrlLogin.logged_in, ctrlHome.get_home);

router.get('/graph', ctrlGraph.get_graphs);

router.post('/articles', ctrlArticles.post_articles);

module.exports = router;
