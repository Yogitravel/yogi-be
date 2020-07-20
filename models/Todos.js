const mongoose = require("mongoose");

const TodosSchema = new mongoose.Schema({
	// attributes

	userid: {
		type: mongoose.Schema.ObjectId,
		ref: "User",
	},
	tasks: [
		{
			name: { type: String },
		},
		{
			name: { type: String },
		},
		{
			name: { type: String },
		},
		{
			name: { type: String },
		},
		{
			name: { type: String },
		},
	],
});

const Todos = mongoose.model("Todos", TodosSchema);

module.exports = Todos;
