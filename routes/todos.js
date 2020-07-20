var express = require("express");
const Todos = require("../models/Todos");
var router = express.Router({ mergeParams: true });

/* GET TODO TASK . */
router.get("/", async (req, res) => {
	const id = req.params.id;
	const todos = await Todos.findOne({ todos: id });
	console.log(todos);
	res.send(todos);
});

module.exports = router;
