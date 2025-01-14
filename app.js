var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var swaggerJSDoc = require('swagger-jsdoc');
var swaggerUi = require('swagger-ui-express');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: "NodeJS Homework Session 5",
    version: "0.0.1",
  },
  servers: [
    {
      url: "http://localhost:3000"
    }
  ]
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*js'],
};

const openapiSpecification = swaggerJSDoc(options);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

 app.use('/docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

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
  res.render('error');
});

module.exports = app;
