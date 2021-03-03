const programs = require('../source-api-outputs/programs.json');
const developers = require('../source-api-outputs/developers.json');
const express = require('express');
const router = express.Router();

// Function to get the programs info and their developers.
const getInfo = programID => {
	let posProgram = -1;
	let posDeveloper = -1;
	let program = {};
	let developer = {};
	let info = {};

	posProgram = programs.findIndex(program => program.id == programID);
	program = programs[posProgram];
	posDeveloper = developers.findIndex(developer => developer.id == program.developer_id);
	developer = developers[posDeveloper];

	const {
		id,
		title,
		version,
		url: programUrl,
		short_description,
		license,
		thumbnail,
		rating,
		total_downloads,
		compatible,
	} = program;

	const { name, url: devUrl } = developer;

	info = {
		id: '' + id,
		author_info: {
			name,
			url: devUrl,
		},
		title,
		version,
		url: programUrl,
		short_description,
		license,
		thumbnail,
		rating,
		total_downloads,
		compatible,
	};

	return info;
};

// Get all the programs.
router.get('/', (req, res) => {
  res.send(programs);
});

// Get program with developer information through a program ID.
router.get('/programs/:id', (req, res) => {
	const info = getInfo(req.params.id);

	res.send(info);
});

module.exports = router;
