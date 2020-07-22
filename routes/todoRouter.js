var express = require("express");
const User = require("../models/userModel");
var router = express.Router({ mergeParams: true });
const auth = require("../middleware/auth");

/* GET TODO TASK . */
router.get("/", auth, async (req, res) => {
	const user = await User.findById(req.user);
	// insert all tasks into todos collection
	res.send(user.tasks);
});

router.post("/", auth, async (req, res, next) => {
	const tasks = req.body.tasks;
	if (!tasks) return res.status(400).json({ status: "fail" });
	tasks.forEach((e) => delete e._id);
	console.log(tasks);
	const user = await User.findById(req.user);
	// insert all tasks into todos collection
	user.tasks = tasks;
	await user.save();
	// overwrite task arrays to user.tasks

	res.send(user.tasks);
});

module.exports = router;
