var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var homeRouter = require('./routes/home');
//var homeViewRouter = require('./routes/homeView');
var profileRouter = require('./routes/profile');


//assignment5 - start
var modelRouter = require('./routes/model');

//var mongo = require('mongodb');
//var monk = require('monk');

//Cloud Mongo DB - start
const url = 'mongodb+srv://cmpe:cmpe@cluster0-ddt5m.mongodb.net/cmpe280?retryWrites=true&w=majority';
const db = require('monk')(url);
const collection = db.get('All_articles')
//Cloud Mongo DB - end

/*var modelRouter = require('./routes/model');

var mongoose = require('mongoose');
//Set up default mongoose connection
var mongoDB = 'mongodb://localhost/cmpe280';
mongoose.connect(mongoDB, { useNewUrlParser: true });
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Define a schema
var mySchema = mongoose.Schema({
	Name: String,
	Link: String,
	AtrId: String
});

var ClimateModel = mongoose.model('All_Articles', mySchema);
*/

//assignment5 - end


var app = express();
//assignment5 - start
app.use(function(req, res, next)
        {
            req.db = db;
            next();
        });
//assignment5 - end

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser());
//app.use(session({secret: 'ssshhhhh'}));
app.use(session({
  secret: 'ssshhhh',
  proxy: true,
  resave: true,
  saveUninitialized: true
}));

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/home', homeRouter);
//app.use('/homeView', homeViewRouter);
app.use('/profile', profileRouter); 
//assignment5
app.use('/manageArticles', modelRouter); 


//messages
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  //res.render('error');
  res.send(err);
});





module.exports = app;
