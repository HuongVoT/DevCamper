const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });

const app = express();

const PORT = process.env.PORT || 4444;

app.listen(
	PORT,
	console.log(`Server running in ${process.env.PORT} mode on port ${PORT}`)
);
