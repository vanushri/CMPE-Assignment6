var express = require('express');
var router = express.Router();
var ctrlLogin = require("../controllers/login");


router.get('/', ctrlLogin.not_logged_in, ctrlLogin.get_login);

router.post('/signin', ctrlLogin.post_signin);

router.get('/signout', ctrlLogin.get_signout);

router.post('/register', ctrlLogin.post_register);

module.exports = router;
