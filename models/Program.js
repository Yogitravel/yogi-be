const mongoose = require("mongoose");

const ProgramSchema = new mongoose.Schema({
	// attributes

	title: String,
	pictureURL: String,
	level: String,
	description: String,
});

const Program = mongoose.model("Program", ProgramSchema);

module.exports = Program;
