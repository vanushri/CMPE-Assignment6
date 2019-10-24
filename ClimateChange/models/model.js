
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
    var db = req.db;
    var collection = db.get('All_Articles');
    collection.remove( { "ArtId" : articleid },
                       function (err, doc) 
                       {
                           if (err) {
                               res.send("Delete failed.");
                           }
                           else {
                               res.send("Successfully deleted " + articleid);
                           }
                       });
};
