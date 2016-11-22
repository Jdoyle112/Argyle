var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://admin:admin123@ds053176.mlab.com:53176/argyle', ['members']);


var request = require("request");



/*
var options = { method: 'POST',
  url: 'https://jdoyle112.auth0.com/oauth/token',
  headers: { 'content-type': 'application/json' },
  body: 
   { grant_type: 'authorization_code',
     client_id: 'cftwBjfFytUEMAHX1oEaLlpRIGIC20qN',
     client_secret: 'R1IzsrUG9vvxI7I-8LDq4DQTPgbQQsJuvMQzYX99e1qyV5kdNctMMzO10WioKKHf',
     audience: 'https://jdoyle112.auth0.com/api/v2/'},
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});*/



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


	var options = { method: 'GET',
  url: 'https://jdoyle112.auth0.com/api/v2/users/'+req.params.id,
  headers: { authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlFrUkdRME0zTTBGRk1qUTVNalUzUmtOQk1qSkZSVVEyTWpOQ056azBRakpFTmpZMVJFTTJOUSJ9.eyJpc3MiOiJodHRwczovL2pkb3lsZTExMi5hdXRoMC5jb20vIiwic3ViIjoiY2Z0d0JqZkZ5dFVFTUFIWDFvRWFMbHBSSUdJQzIwcU5AY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vamRveWxlMTEyLmF1dGgwLmNvbS9hcGkvdjIvIiwiZXhwIjoxNDc5OTMzMDI1LCJpYXQiOjE0Nzk4NDY2MjUsInNjb3BlIjoicmVhZDpjbGllbnRfZ3JhbnRzIGNyZWF0ZTpjbGllbnRfZ3JhbnRzIGRlbGV0ZTpjbGllbnRfZ3JhbnRzIHVwZGF0ZTpjbGllbnRfZ3JhbnRzIHJlYWQ6dXNlcnMgdXBkYXRlOnVzZXJzIGRlbGV0ZTp1c2VycyBjcmVhdGU6dXNlcnMgcmVhZDp1c2VyX2lkcF90b2tlbnMgcmVhZDp1c2Vyc19hcHBfbWV0YWRhdGEgdXBkYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBkZWxldGU6dXNlcnNfYXBwX21ldGFkYXRhIGNyZWF0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgY3JlYXRlOnVzZXJfdGlja2V0cyByZWFkOmNsaWVudHMgdXBkYXRlOmNsaWVudHMgZGVsZXRlOmNsaWVudHMgY3JlYXRlOmNsaWVudHMgcmVhZDpjbGllbnRfa2V5cyB1cGRhdGU6Y2xpZW50X2tleXMgZGVsZXRlOmNsaWVudF9rZXlzIGNyZWF0ZTpjbGllbnRfa2V5cyByZWFkOmNvbm5lY3Rpb25zIHVwZGF0ZTpjb25uZWN0aW9ucyBkZWxldGU6Y29ubmVjdGlvbnMgY3JlYXRlOmNvbm5lY3Rpb25zIHJlYWQ6cmVzb3VyY2Vfc2VydmVycyB1cGRhdGU6cmVzb3VyY2Vfc2VydmVycyBkZWxldGU6cmVzb3VyY2Vfc2VydmVycyBjcmVhdGU6cmVzb3VyY2Vfc2VydmVycyByZWFkOmRldmljZV9jcmVkZW50aWFscyB1cGRhdGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGRlbGV0ZTpkZXZpY2VfY3JlZGVudGlhbHMgY3JlYXRlOmRldmljZV9jcmVkZW50aWFscyByZWFkOnJ1bGVzIHVwZGF0ZTpydWxlcyBkZWxldGU6cnVsZXMgY3JlYXRlOnJ1bGVzIHJlYWQ6ZW1haWxfcHJvdmlkZXIgdXBkYXRlOmVtYWlsX3Byb3ZpZGVyIGRlbGV0ZTplbWFpbF9wcm92aWRlciBjcmVhdGU6ZW1haWxfcHJvdmlkZXIgYmxhY2tsaXN0OnRva2VucyByZWFkOnN0YXRzIHJlYWQ6dGVuYW50X3NldHRpbmdzIHVwZGF0ZTp0ZW5hbnRfc2V0dGluZ3MgcmVhZDpsb2dzIHJlYWQ6c2hpZWxkcyBjcmVhdGU6c2hpZWxkcyBkZWxldGU6c2hpZWxkcyJ9.BIggWScKqZAyEDZ8Fly7iiXjcRS0tKK19Z32cMNXTSpJFkAsaFeXDPJrM5JtWABtWHU7UZavPKE11EBBjaozM9vjERG3U6_AHZTbaMC--AO16y0bLRBEH9vMb8ZcU459k8JB00FCjxSK0mf1FJiVef8qQp09rOWcsxiSKG3UF62LBP0tgr_NgoilJHWxS9pk0q_TB2Nggik_0igsfixrEQM6C1RAYvu8VAD4nmD7xcO6obfluvPTDfzVK4eWoeCZwBUcNoSYHKC-MI3-HFmhnMfVtsepClkvgugvpVW9IA-fkcrr0vKYRrwh1wLZKYzEI3E635EuR0rSt3tzNmY55g' } };

	request(options, function (error, response, body) {
		if (error){
			throw new Error(error);
		} else {
			res.send(body);
		}
	});
});



module.exports = router;