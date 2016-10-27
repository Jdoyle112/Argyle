var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var router = express.Router();

var index = require('./routes/index');
var db = require('./routes/db');

// local port
//var port = 3000;

// heroku port
var port = process.env.PORT || 8080;

var app = express();

// view Engine
app.set('views', path.join(__dirname, '/client/app/views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// set Static Folder Angular
app.use(express.static(path.join(__dirname, '/client')));

// body body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



// routes files
app.use('/', index);
app.use('/profile', index);
app.use('/groups', index);
app.use('/api', index);

app.listen(port, function(){
	console.log('Server started on port ' + port);
});