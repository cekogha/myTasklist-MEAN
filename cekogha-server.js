var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

// Index page - Home page
var index = require('./routes/index');
var tasks = require('./routes/tasks');

var port = 3000;
var app = express();

// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// static folder
app.use(express.static(path.join(__dirname, 'client')));

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

// routes
app.use('/', index);
app.use('/api', tasks);

// run the server
app.listen(port, function(){
	console.log('CEKOGHA\'s Server started on port '+port);
	
});
