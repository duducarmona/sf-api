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

	if (posProgram === -1) {
		// The program doesn't exist
		return;
	}

	program = programs[posProgram];
	posDeveloper = developers.findIndex(developer => developer.id == program.developer_id);

	if (posDeveloper === -1) {
		// The developer doesn't exist
		return;
	}

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

	if (info) {
		res.send(info);
	} else {
		res.status(404).json('not found');
	}
});

module.exports = router;
