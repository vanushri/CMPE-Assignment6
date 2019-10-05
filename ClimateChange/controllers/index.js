module.exports.get_index = function(req, res, next)
{
	//res.render('index');
	
	//removing some extra pages and navigating index to login
	res.render('login');
	//res.render('home');
};
