var express = require("express");
var router = express.Router();

/* GET PROGRAMS page. */
router.get("/", function (req, res, next) {
	res.send({ message: "please work di" });
});

module.exports = router;
