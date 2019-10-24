module.exports.get_data = function(req, res) {
  console.log("in get data");
  var db = req.db;
//   console.log("db =>" + db);
  var collection = db.get("All_Articles");
  console.log("collection =>" + collection);
  collection.find({}, {}, function(err, docs) {
    // console.log("docs =>" + docs);
    res.render("manageArticles", { ArticleList: docs });
  });
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
    					console.log("docs =>"+docs);
                        res.render('manageArticles', { "ArticleList" : docs });
                    });
};


module.exports.post_deletearticle = function(req, res) 
{
    var articleid = req.body.queries;
    console.log("Article ID to Delete: " + articleid);
    var db = req.db;
    var collection = db.get('All_Articles');
    collection.remove( { "_id" : String(articleid) },
                       function (err, doc)
                       {
                           if (err) {
                               console.log("Delete failed.");

                           }
                           else {
                               console.log("Successfully deleted " + articleid);
                               collection.find({}, {}, 
                                    function(err, docs)
                                    {
                                        console.log("docs =>"+docs);
                                        res.render('manageArticles', { "ArticleList" : doc });
                                    });
                           }
                       });
module.exports.post_addarticle = function(req, res) {
console.log("jodajgodsjogjdsojgodsajogjoidjsgojdsgjodsjgaojdogj")
  var db = req.db;

  var name = req.body.name;
  var link = req.body.link;
    console.log(name);
    console.log(link);
  var collection = db.get("All_Articles");

  // Submit to the database.
  collection.insert({ Name: name, Link: link }, function(err, doc) {
    if (err) {
      res.send("Insert failed.");
    } else {
      // Forward to success page
      res.redirect('/manageArticles');
    }
  });
};
