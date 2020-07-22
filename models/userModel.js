const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true, minlength: 5 },
	displayName: { type: String },
	programid: [
		{
			type: mongoose.Schema.ObjectId,
			ref: "Program",
		},
	],
	tasks: [
		{
			name: {
				type: String,
				required: true,
			},
			detail: {
				type: String,
			},
		},
	],
});

module.exports = User = mongoose.model("User", userSchema);
