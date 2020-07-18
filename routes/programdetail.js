var express = require("express");
const Programdetail = require("../models/Programdetail");
var router = express.Router();

/* GET PROGRAM DETAIL . */
router.get("/:programId", async (req, res) => {
	const id = req.params.programId;
	const programdetail = await Programdetail.findOne({ _id: id });
	console.log(programdetail);
	res.send(programdetail);
});

module.exports = router;
