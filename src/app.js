const express = require('express');
const app = express();
const cors = require('cors');

app.use(
	cors({
		credentials: true,
		origin: ['http://localhost:3000'],
	})
);

const indexRouter = require('./controllers/index');

app.use('/', indexRouter);

module.exports = app;
