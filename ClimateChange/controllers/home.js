module.exports.get_home = function(req, res, next)
{
	console.log("User in home.js: " + req.session.userName);
	if(req.session.userName){
		if("admin".localeCompare(req.session.userName)==0){
			console.log("TRYING TO REDIRECT " + req.session.userName);
			res.redirect('/manageArticles');
		}else{
			res.render('home', {userName : req.session.userName});
		}
		
	}
	
};
