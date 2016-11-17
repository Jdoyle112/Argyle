var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://admin:admin123@ds053176.mlab.com:53176/argyle', ['dialogues']);


// get dialogues by group id
router.get('/dialogues/:id', function(req, res, next){
	db.dialogues.find({ groupId: req.params.id }, function(err, dialogues){
		if(err){
			console.log('error');
			res.send(err);

		} else {
			res.json(dialogues);
		}
	});
});

// get dialogue by id
router.get('/dialogues/dialogue/:id', function(req, res, next){
	db.dialogues.findOne({ _id: mongojs.ObjectId(req.params.id) }, function(err, dialogue){
		if(err){
			res.send(err);

		} else {
			res.json(dialogue);
		}
	});
});

// join dialogue
router.put('/dialogues/join/:id', function(req, res, next){
	var dialogue = req.body;
	var updDialogue = {};

	if(dialogue.name){
		updDialogue.name = dialogue.name;
	}
	if(dialogue.admin){
		updDialogue.admin = dialogue.admin;
	}
	if(dialogue._id){
		updDialogue._id = dialogue._id;
	}
	if(dialogue.members){
		updDialogue.members = dialogue.members;
	}

	db.dialogues.update({ _id: mongojs.ObjectId(req.params.id) }, { $set: {members: dialogue.members}}, function(err, dialogue){
		if(err){
			res.send(err);

		} else {
			res.json(dialogue);
		}
	});
});

router.post('/dialogues/newdialogue', function(req, res, next){
	var dialogue = req.body;
	if(!dialogue.name){
		res.status(400);
		res.json({
			"error": 'Bad Data'
		});
	} else {
		db.dialogues.save(dialogue, function(err, dialogue){
			if(err){
				res.send(err);
			} else {
				res.json(dialogue);
			}
		});
	}
});

module.exports = router;