var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var env = require('dotenv').config()
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var appointmentRouter = require('./routes/appointment');
var serviceRouter = require('./routes/service');

var Models = require("./models")

var app = express();

// start database
Models.sequelize.sync();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// app.use('*', cors());
// app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/appointment', appointmentRouter);
app.use('/service', serviceRouter);

module.exports = app;
