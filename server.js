const express = require('express');
// const logger = require('morgan');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./routes/api.js');

const PORT = process.env.PORT || 3000;

const app = express();

// app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/transaction-db', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false
});

// // Takes you to index.html
// app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));

// // Takes you to the exercise.html
// app.get('/exercise', (req, res)  => res.sendFile(path.join(__dirname, 'public/exercise.html')));

// // Takes you to stats.html
// app.get('/stats', (req, res) => res.sendFile(path.join(__dirname, 'public/stats.html')));

app.use(routes);

// Start the server
app.listen(PORT, () => {
	console.log(`App running on port ${PORT}!`);
});
