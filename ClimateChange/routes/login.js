var express = require('express');
var router = express.Router();
var ctrlLogin = require("../controllers/login");
var ctrlHome = require("../controllers/home");


//router.get('/', ctrlLogin.logged_in, ctrlHome.get_home);

router.get('/', ctrlLogin.get_login);

router.post('/signin', ctrlLogin.post_signin);

router.get('/signout', ctrlLogin.get_signout);

router.post('/register', ctrlLogin.post_register);

module.exports = router;
