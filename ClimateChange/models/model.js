
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


module.exports.post_deletearticle = function(req, res) 
{
    var articleid = req.body.queries;
    console.log("WOOHOOOOO" + articleid);
    var db = req.db;
    var collection = db.get('All_Articles');
    collection.remove( { "_id" : ObjectId("5daffc6a1c9d440000544fda") },
                       function (err, doc) 
                       {
                           if (err) {
                               console.log("Delete failed.")

                           }
                           else {
                               console.log("Successfully deleted " + articleid)
                           }
                       });
};
