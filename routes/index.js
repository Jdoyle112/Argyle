var express = require('express');
var router = express.Router();

var mongojs = require('mongojs');
var db = mongojs('mongodb://admin:admin123@ds053176.mlab.com:53176/argyle', ['groups']);


// route middleware that will happen on every request
router.use(function(req, res, next) {

    // log each request to the console
    console.log(req.method, req.url);

    // continue doing what we were doing and go to the route
    next(); 
});

router.get('/', function(req, res, next) {
	res.render('index.html');  
});


router.get('/profile', function(req, res, next) {
    res.render('index.html');  
});

router.get('/new_group', function(req, res, next) {
    res.render('index.html');  
});

router.get('/api/groups', function(req, res, next) {
	db.groups.find(function(err, groups){
		if(err){
			res.send(err);
		}else {
			res.json(groups);
		}
	});
});

router.post('/api/newgroup', function(req, res, next){
	var group = req.body;
	if(!group.name){
		res.status(400);
		res.json({
			"error": 'Bad Data'
		});
	} else {
		db.groups.save(group, function(err, group){
			if(err){
				res.send(err);
			} else {
				res.json(group);
			}
		});
	}
});

router.delete('/api/deletegroup/:id', function(req, res, next){
	db.groups.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, group){
		if(err){
			console.log('error');
			res.send(err);
		}
		res.json(group);
	});
});


module.exports = router;