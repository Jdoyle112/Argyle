var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://admin:admin123@ds053176.mlab.com:53176/argyle', ['groups']);


router.get('/groups/:id', function(req, res, next) {
	db.groups.find({ $or: [{ admin: req.params.id }, { users: req.params.id }] }, function(err, groups){
		if(err){
			res.send(err);
		}else {
			res.json(groups);
		}
	});
});

router.post('/groups/newgroup', function(req, res, next){
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

router.delete('/groups/deletegroup/:id', function(req, res, next){
	db.groups.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, group){
		if(err){
			console.log('error');
			res.send(err);
		}
		res.json(group);
	});
});

// get individual groups
router.get('/groups/group/:id', function(req, res, next){
	db.groups.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, group){
		if(err){
			console.log('error');
			res.send(err);

		} else {
			res.json(group);
		}
	});
});


// set online status
router.put('/groups/status/:id', function(req, res, next){
	var updGroup = req.body;

	db.groups.update({ _id: mongojs.ObjectId(req.params.id) }, { $set: { onlineUsers: updGroup.onlineUsers } }, function(err, group){
		if(err){
			res.send(err);

		} else {
			res.json(group);
		}
	});
});


module.exports = router;