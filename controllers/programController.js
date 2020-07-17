const Program = require("../models/Program");

const getAllPrograms = async (req, res) => {
	const programs = await Program.find();
	res.send({
		status: "ok",
		data: programs,
	});
};

const createProgram = async (req, res) => {
	const { attributes } = req.body; // Please list out fields individually here.
	const newItem = await Item.create({
		// attributes
	});
	res.send({
		status: "ok",
		data: newItem,
	});
};

module.exports = {
	getAllPrograms,
	createProgram,
};
