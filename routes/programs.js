var express = require("express");
const { getAllPrograms, createProgram } = require("../controllers/programController");
var router = express.Router();

/* GET PROGRAM listing. */
router.get("/", getAllPrograms);

router.post("/", createProgram);

module.exports = router;
