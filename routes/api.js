const router = require('express').Router();
const { Transaction } = require('../models');

// COME BACK TO ALL THESE

// Aggregate
router.get('/api/workouts', (req, res) => {
	Workout.aggregate([ { $addFields: { totalDuration: { $sum: '$exercises.duration' } } } ])
		.then((dbWorkout) => {
			res.json(dbWorkout);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

router.post('/api/workouts', ({ body }, res) => {
	Workout.create(body)
		.then((dbWorkout) => {
			res.json(dbWorkout);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

router.put('/api/workouts/:id', (req, res) => {
	Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
		.then((dbWorkout) => {
			res.json(dbWorkout);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

// Aggregate
router.get('/api/workouts/range', (req, res) => {
	Workout.aggregate([ { $addFields: { totalDuration: { $sum: '$exercises.duration' } } } ])
		.then((dbWorkout) => {
			res.json(dbWorkout);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

module.exports = router;
