const express = require('express');
const dontenv =require('dotenv');
const morgan = require('morgan')

//Route Files
const bootcamps = require('./routes/bootcamps')

// Load env vars
dontenv.config({path: './config/config.env'});

const app = express();

// dev logging middleware
if(process.env.NODE_ENV === 'development'){
app.use(morgan('dev'))
}

// Mounts routers
app.use('/api/v1/bootcamps', bootcamps)

const PORT = process.env.PORT || 5000;

app.listen(PORT,
    console.log(`App listening on ${process.env.NODE_ENV} mode on port ${PORT}!`)
);