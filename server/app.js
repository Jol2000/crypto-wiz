var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

//const hostname = "127.0.0.1";
//const port = 3001;
var app = express();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//const twitterRouter = require('./routes/twitter');

// Serve out any static assets correctly
app.use(express.static('../client/build'))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use('/', usersRouter);
app.use('/sentiment', indexRouter);
//app.use('/twitter', twitterRouter);

// Any routes that don't match on our static assets or api should be sent to the React Application
// This allows for the use of things like React Router
app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});
  
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

// Run the server
app.listen(3000, () => console.log("Listening on port 3000!"));

module.exports = app;


