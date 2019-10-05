var userMap = new Map();

module.exports.get_login = function(req, res, next)
{
	var data = {
			registerMsg: '',
			loginMsg: '',
	};
	if (req.session.registerMsg) {
		data.registerMsg = req.session.registerMsg;
		req.session.registerMsg = null;
	}
	if (req.session.loginMsg) {
		data.loginMsg = req.session.loginMsg;
		req.session.loginMsg = null;
	}
	res.render('login', data);
};

module.exports.post_signin = function(req, res, next)
{
	console.log("IN SIGNIN");
	var userName = req.body.user;
	var password = req.body.password;

	console.log("User exists? " + userMap.has(userName));
	console.log("Password: " + userMap.get(userName));
	console.log("Password matches?: " + (password == userMap.get(userName)));
	
	if (userMap.has(userName) && password == userMap.get(userName)) {
		req.session.userName = userName;
		console.log("going home");
		res.redirect('/home');
		//res.render('home', {userName : userName});
	}
	else {
		console.log("going in else");
		req.session.loginMsg = 'Incorrect User Name or Password !';
		res.redirect('/login');
		//res.render('login', {loginMsg : 'Incorrect User Name or Password !'});
	}
};

module.exports.post_register = function(req, res, next)
{
	var userName = req.body.user;
	var password = req.body.password;
	console.log("User Name: " + userName);
	console.log("Password: " + password);
	
	if(userMap.has(userName)){
		req.session.loginMsg = 'User Name already exists !';
		res.redirect('/login');
		//res.render('login', {registerMsg : 'User Name already exists !'});
	}
	else {
		userMap.set(userName, password);
		console.log("Map size is now " + userMap.size);
		req.session.registerMsg = 'User successfully registered ! You can log in now';
		res.redirect('/login');
		//res.render('login', {registerMsg : 'User successfully registered ! You can log in now'});
	}
};

module.exports.logged_in = function(req, res, next)
{
	if(req.session.userName) {
		console.log("User Name in session: " + req.session.userName);
		next();
	}
	else {
		console.log("NOT LOGGED IN");
		//req.session.registerMsg = 'Please log in !';
		res.redirect('/login');
		//res.render('login', {registerMsg : 'Please log in !'});
	}

	
	
};

module.exports.get_signout = function(req, res, next)
{
	req.session.destroy();
	res.redirect('/');
}

