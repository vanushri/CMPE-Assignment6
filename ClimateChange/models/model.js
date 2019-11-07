module.exports.get_data = function(req, res) {
  console.log("in get data");
  var db = req.db;
  console.log("db =>" + db);
  var collection = db.get("All_Articles");
  console.log("collection =>" + collection);
  collection.find({}, {}, function(err, docs) {
    console.log("docs =>" + docs);
    res.render("manageArticles", { ArticleList: docs });
  });
};

module.exports.post_deletearticle = function(req, res) {
  var articleid = req.body.queries;
  console.log("Article ID to Delete: " + articleid);
  var db = req.db;
  var collection = db.get("All_Articles");
  collection.remove({ _id: String(articleid) }, function(err, doc) {
    if (err) {
      console.log("Delete Failed.");
    } else {
      console.log("Successfully Deleted " + articleid);
      collection.find({}, {}, function(err, docs) {
        console.log("docs =>" + docs);
        res.render("manageArticles", { ArticleList: doc });
      });
    }
  });
};

module.exports.post_addarticle = function(req, res) {
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
      // Forward to success page.
      res.redirect("/manageArticles");
    }
  });
};

module.exports.post_updatearticle = function(req, res) {
  var info = String(req.body.queries);
  console.log("INFO: " + info);
  infoArr = info.split(",");
  var articleid = infoArr[0];
  var newname = infoArr[1];
  console.log("Article ID to Update: " + articleid);
  console.log("New Article Name: " + newname);
  var db = req.db;
  var collection = db.get("All_Articles");
  collection.update(
    { _id: String(articleid) },
    { $set: { Name: String(newname) } },
    function(err, doc) {
      if (err) {
        console.log("Update Failed.");
      } else {
        console.log("Successfully Updated " + articleid);
        collection.find({}, {}, function(err, docs) {
          console.log("docs =>" + docs);
          res.render("manageArticles", { ArticleList: doc });
        });
      }
    }
  );
};

module.exports.post_searcharticles = function(req, res) {
  var searchinput = req.body.queries;
  console.log("YOOOOOOOOO" + searchinput);
  var db = req.db;
  var collection = db.get("All_Articles");
  collection.find({}, { Name: searchinput }, function(err, docs) {
    if (err) {
      console.log("Error in Search.");
    } else {
      console.log("Successful Search.");
    }
    console.log("HEREEEEEEEEEEEEE");
    console.log("found " + docs);
  });
};

module.exports.search2 = function(req, res) {
  console.log("in get data");
  var db = req.db;
  console.log("db =>" + db);
  var collection = db.get("All_Articles");
  console.log("collection =>" + collection);
  collection.find({}, {}, function(err, docs) {
    console.log("docs =>" + docs);
    res.render("manageArticles", { ArticleList: docs });
  });
};


module.exports.article_search = function(req, res) {
  var searchinput = String(req.query.q);
    console.log("User Input: " + searchinput)
    var db = req.db;
    var collection = db.get('All_Articles');
    var pattern = new RegExp(searchinput);
     
    console.log(pattern); 
    collection.find({"Name" : {$regex: pattern, $options: 'i'}},{}, 
    function(err, docs){
            if(err){
                throw err; 
            } else{
                console.log("Found Entry")
                var articleNames = docs.map(function(name){
                     return name.Name; 
                });
                console.log(articleNames);//prints array with only artcile names
                res.render('manageArticles', { "ArticleList" : docs });
            }
        }
    );
};
