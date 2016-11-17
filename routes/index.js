var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('index.html');  
});


router.get('/profile', function(req, res, next) {
    res.render('index.html');  
});

router.get('/dialogue/:id', function(req, res, next) {
    res.render('index.html');  
});

router.get('/new_group', function(req, res, next) {
    res.render('index.html');  
});

router.get('/group/:id', function(req, res, next) {
    res.render('index.html');  
});



module.exports = router;