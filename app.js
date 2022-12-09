require('dotenv').config()
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var db = require('./config/db');

var indexRouter = require('./routes/index');
var teachersRouter = require('./routes/teachers');
var studentsRouter = require('./routes/students');
var classesRouter = require('./routes/classes');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/teachers', teachersRouter);
app.use('/students', studentsRouter);
app.use('/classes', classesRouter);


app.listen(process.env.PORT, () => console.log('Server ON'))

module.exports = app;
