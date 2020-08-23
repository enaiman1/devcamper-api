const express = require('express');
const dontenv =require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db')

// Load env vars
dontenv.config({path: './config/config.env'});

// Connect to DB
connectDB();

//Route Files
const bootcamps = require('./routes/bootcamps')

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