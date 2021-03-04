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

// catch 404 and forward to error handler
app.use((req, res) => {
	res.status(404).json({ code: 'not found' });
});

app.use((err, req, res) => {
	// always log the error
	console.error('ERROR', req.method, req.path, err);

	// only render if the error ocurred before sending the response
	if (!res.headersSent) {
		res.status(500).json({ code: 'unexpected', error: err });
	}
});

module.exports = app;
