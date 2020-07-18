const mongoose = require("mongoose");

const ProgramdetailSchema = new mongoose.Schema({
	// attributes

	title: String,
	description: String,
	videoURLList: [
		{
			url: {
				type: String,
			},
			name: {
				type: String,
			},
		},
		{
			url: {
				type: String,
			},
			name: {
				type: String,
			},
		},
		{
			url: {
				type: String,
			},
			name: {
				type: String,
			},
		},
		{
			url: {
				type: String,
			},
			name: {
				type: String,
			},
		},
		{
			url: {
				type: String,
			},
			name: {
				type: String,
			},
		},
	],
	program: {
		type: mongoose.Schema.ObjectId,
		ref: "Program",
	},
});

const Programdetail = mongoose.model("Programdetail", ProgramdetailSchema);

module.exports = Programdetail;
