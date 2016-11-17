var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://admin:admin123@ds053176.mlab.com:53176/argyle', ['members']);

// new member
router.post('/members/newmember', function(req, res, next){
	var member = req.body;
	if(!member.email){
		res.status(400);
		res.json({
			"error": 'Bad Data'
		});
	} else {
		db.members.save(member, function(err, member){
			if(err){
				res.send(err);
			} else {
				res.json(member);
			}
		});	
	}
});

// get members by group id
router.get('/members/:id', function(req, res, next){
	db.members.find({ groupId: req.params.id }, function(err, member){
		if(err){
			res.send(err);

		} else {
			res.json(member);
		}
	});
});



module.exports = router;