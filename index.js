const express = require('express');
const cors = require('cors');
const beerRoutes = require('./routes/beerRoutes.js');

const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/beerCollection', {useNewUrlParser: true}, 
(error) => {
    if (error) {
        console.log('cannot connect to db');
    } else if (!error) {
        console.log('connected to the db');
    }
});

app.use('/beer', beerRoutes);

const server = app.listen(5015, () => {
    console.log('server started');
});