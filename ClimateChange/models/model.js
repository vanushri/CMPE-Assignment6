module.exports.get_hello = function(req, res, next)
{
	var select = req.query.select;
	console.log("select ==> "  + select);
	ClimateModel.find({}, function(err, foundData){
		if(err){
			console.log(err);
			res.status(500).send();
		} else{
			if(foundData.length == 0){
				var responseObject = undefined;
				if(select && select =='count'){
					responseObject ={count: 0};
				}
				res.status(404).send(responseObject);
			} else{
				var responseObject = foundData;
				if(select && select =='count'){
					responseObject = {count: foundData.length};
				}
				//res.send(responseObject);
			}
		}
	});
	res.render('mydata', responseObject);
};


module.exports.get_data = function(req, res) 
{
	console.log("in get data");
    var db = req.db;
    console.log("db =>"+db);
    var collection = db.get('All_Articles');
    console.log("collection =>"+collection);
    collection.find({}, {}, 
                    function(err, docs)
                    {
                        res.render('mydata', { "ArticleList" : docs });
                    });
};