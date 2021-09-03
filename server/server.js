const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
// bringing in dotenv as early as possible so we can use .env variables
const dotenv = require('dotenv');
// telling dotenv where to find the config file with our variables
dotenv.config({ path: './config/config.env' });
// module for DB connection
const db = require('./config/db');
// modules for routes
const items = require('./routes/items');
const contacts = require('./routes/contacts');

// If this is missing, your app won't be able to parse body content of requests. Very important!
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);

// opening DB connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('connected!'));

// for anything with /items route, use this...etc
app.use('/items', items);
app.use('/contacts', contacts);

app.listen(port, () => {
	console.log(`App listening on port ${port}!`);
});
