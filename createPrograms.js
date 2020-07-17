//tao models, va sample
// put for loop trong function va generate
//in ket qua ra

const faker = require("faker");
const Program = require("./models/Program");
const mongoose = require("mongoose");
const nSamples = parseInt(process.argv[2]);

mongoose.connect("mongodb+srv://thuongapp:isENlKgobqNkowqk@cluster0.kmbqk.mongodb.net/thuongapp?retryWrites=true&w=majority");

async function createPrograms(n_samples) {
	console.log(`Generating ${n_samples} Programs...`);
	for (let i = 0; i < n_samples; i++) {
		let item = await Program.create({
			title: faker.lorem.sentence(),
			pictureURL: faker.image.image(),
			level: faker.random.number(),
			duration: faker.random.number(),
			description: faker.lorem.sentence(),
		});
		console.log(`Created $(i+1) program`);
	}
}

createPrograms(nSamples);
