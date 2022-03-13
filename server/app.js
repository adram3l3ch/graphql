require('dotenv').config();
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema.js');
const connectDB = require('./db/connect.js');
const cors = require('cors');

const app = express();

app.use(cors({}));
app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));

const PORT = 4000 || process.env.PORT;

const start = async () => {
	try {
		await connectDB();
		app.listen(PORT, () => {
			console.log(`Server is listening on port ${PORT}...`);
		});
	} catch (error) {
		console.log(error);
	}
};

start();
