const express = require('express');
const dontenv =require('dotenv')

// Load env vars
dontenv.config({path: './config/config.env'});

const app = express();

const PORT = process.env.PORT || 5000

app.listen(PORT,
    console.log(`App listening on ${process.env.NODE_ENV} mode on port ${PORT}!`)
);