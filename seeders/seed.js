const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect('mongodb://localhost/transaction', {
	useNewUrlParser: true,
	useFindAndModify: false,
	useUnifiedTopology: true
});

const transactionSeed = [
	// COME BACK TO ALL THESE

	{
		// day: new Date(new Date().setDate(new Date().getDate() - 9)),
		payer: 'CHEWY',
		points: 500,
		timestamp: '2021-02-02T10:00:00Z'
	},
	{
		// day: new Date(new Date().setDate(new Date().getDate() - 8)),
		payer: 'MEIJER',
		points: 2000,
		timestamp: '2021-01-31T14:00:00Z'
	},
	{
		// day: new Date(new Date().setDate(new Date().getDate() - 7)),
		payer: 'LUSH',
		points: 400,
		timestamp: '2021-01-29T04:00:00Z'
	},
	{
		// day: new Date(new Date().setDate(new Date().getDate() - 6)),
		payer: 'CHEWY',
		points: 1600,
		timestamp: '2021-02-01T11:00:00Z'
	},
	{
		// day: new Date(new Date().setDate(new Date().getDate() - 5)),
		payer: 'STARBUCKS',
		points: 150,
		timestamp: '2021-01-30T09:00:00Z'
	}
];

// db.Workout
// 	.deleteMany({})
// 	.then(() => db.Workout.collection.insertMany(workoutSeed))
// 	.then((data) => {
// 		console.log(data.result.n + ' records inserted!');
// 		process.exit(0);
// 	})
// 	.catch((err) => {
// 		console.error(err);
// 		process.exit(1);
// 	});
