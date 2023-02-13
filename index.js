const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const cors = require('cors');
const connectDB = require('./config/db');

const port = process.env.PORT || 5000;
const app = express();

// Connect DB
connectDB();

app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}));

app.listen(port, console.log(`Server is listening on port ${port}`))
