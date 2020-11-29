const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 7000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true, useCreateIndex:true,useUnifiedTopology: true});
 
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Database connection established');
});

const contactRouter = require('./routes/contacts');

app.use('/contacts', contactRouter);

app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
});