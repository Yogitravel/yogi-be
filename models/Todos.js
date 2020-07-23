const mongoose = require("mongoose");

const TodosSchema = new mongoose.Schema({
	// attributes

	userid: {
		type: mongoose.Schema.ObjectId,
		ref: "User",
	},
	name: {
		type: String,
		required: true,
	},
	detail: {
		type: String,
		required: true,
	},
	markdone: {
		type: Boolean,
	},
});

const Todos = mongoose.model("Todo", TodosSchema);

module.exports = Todos;
