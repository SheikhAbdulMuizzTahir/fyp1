require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/connectdb');
const mongoose = require('mongoose');

const uri = process.env.ATLAS_URI;
// console.log(uri);
connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.get('/',(req,res)=>{res.send("hello world")})



app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
});


