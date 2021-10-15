const { Timestamp } = require('bson');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
	payer: {
		type: String
	},
	points: {
		type: Number
	},
	timestamp: {
		type: Date,
		default: Date.now
	}
});

const Transaction = mongoose.model('Transaction', TransactionSchema);

module.exports = Transaction;
