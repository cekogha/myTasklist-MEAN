var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
	//res.send('views/index.html'); // to display whatever you write - send to the server
	res.render('index.html'); // to display the html view updates from index page
	
});

module.exports = router;