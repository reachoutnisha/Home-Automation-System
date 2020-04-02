const express = require('express')
const app = express()
require('./db/mongodb')

const routes = require('./index.router')
const port = 5500

app.use(express.json());

app.get('/', (req, res) => res.send('Home Automation System!'))

// Enable CORS from client-side
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
	res.header("Access-Control-Allow-Credentials", "true");
	next();
});

app.use('/api', routes);

app.listen(port, () => console.log(`Server running on port ${port}!`))