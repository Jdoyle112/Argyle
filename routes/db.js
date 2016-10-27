var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://admin:admin123@ds053176.mlab.com:53176/argyle', ['groups']);

router.get('/groups', function(req, res, next){
	db.groups.find(function(err, groups){
		if(err){
			res.send(err);
		}else {
			res.json(groups);
		}
	});
});

module.exports = router;