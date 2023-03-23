require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/connectdb');
const mongoose = require('mongoose');
var bodyParser= require('body-parser');


const uri = process.env.ATLAS_URI;
// console.log(uri);
connectDB();

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
// app.use(express.json());
app.get('/',(req,res)=>{res.send("hello world")})

const modelRouter = require('./routes/Model');
app.use('/models',modelRouter);

const recruiterRouter = require('./routes/Recruiter');
app.use('/recruiters',recruiterRouter);

const jobRouter = require('./routes/job');
app.use('/jobs',jobRouter);

const reviewRouter = require('./routes/Review');
app.use('/reviews',reviewRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
});


