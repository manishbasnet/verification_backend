var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const helmet = require('helmet');
var logger = require('morgan');

var indexRouter = require('./src/routes');
var verifyRouter = require('./src/routes/verify');

var app = express();

console.log(process.env.PORT);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);
app.use('/api', verifyRouter);

module.exports = app;
