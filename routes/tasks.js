var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');

// initialize MongoDB
//var db = mongojs('mongodb://<user>:<password>@localhost:27017/<db>', [<collection>]);
var db = mongojs('mongodb://localhost:27017/mytasklist-MEAN', ['tasks']);


// get All tasks
router.get('/tasks', function(req, res, next){
	db.tasks.find(function(err, tasks){
		if(err)
			res.send(err);
		res.json(tasks);
		
	});
});

// get single task
router.get('/tasks/:id', function(req, res, next){
	db.tasks.findOne({_id : mongojs.ObjectId(req.params.id)}, function(err, task){
		if(err)
			res.send(err);
		res.json(task);
		
	});
});

// save task with a post request
router.post('/tasks', function(req, res, next){
	var task = req.body;
	if(!task.title || !(task.isDone + '')){
		res.status(400);
		res.json({'error' : 'Bad resquest'});
	}else{
		db.tasks.save(task, function(err, task){
			if(err){res.send(err);}
			res.json(task);
		})
	}
})

// delete task with a post request
router.delete('/tasks/:id', function(req, res, next){
		db.tasks.remove({_id : mongojs.ObjectId(req.params.id)}, function(err, task){
			if(err){res.send(err);}
			res.json(task);
		})
})

// update task with a put request
router.put('/tasks/:id', function(req, res, next){
	var task = req.body;
	var upTask = {};
	if(task.isDone){ upTask.isDone = task.isDone; }
	if(task.title){ upTask.title = task.title; }
	
	if(!upTask){
		res.status(400);
		res.json({'error' : 'Bad Data'});
	}else{
		db.tasks.update({_id : mongojs.ObjectId(req.params.id)},
			upTask, {}, function(err, task){
			if(err){res.send(err);}
			res.json(task);
		});
	}
});

module.exports = router;