var express = require("express");
const Programdetail = require("../models/Programdetail");
var router = express.Router({ mergeParams: true });

/* GET PROGRAM DETAIL . */
router.get("/", async (req, res) => {
	const id = req.params.id;
	const programdetail = await Programdetail.findOne({ program: id });
	console.log(programdetail);
	res.send(programdetail);
});

module.exports = router;
