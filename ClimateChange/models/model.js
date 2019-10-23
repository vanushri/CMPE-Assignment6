
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
    					console.log("docs =>"+docs);
                        res.render('manageArticles', { "ArticleList" : docs });
                    });
};