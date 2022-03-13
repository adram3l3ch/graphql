const mongoose = require('mongoose');
const Author = require('./author.js');

const bookSchema = new mongoose.Schema(
	{
		name: String,
		genre: String,
		authorID: { type: mongoose.Types.ObjectId, ref: 'Author' },
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Book', bookSchema);
