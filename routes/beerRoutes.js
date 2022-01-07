const router = require('express').Router();

// const { request } = require('express');
const { Beer } = require('../model/beer.js');

//create
router.post('/create', (request, response) => {
    console.log(request.body);
    const beer = new Beer(request.body);
    beer.save().then((result) => {
        response.status(201).send(`${result.beerName} has been added to the database`);
    });
});

//read all
router.get('/readAll', (request, response) => {
    Beer.find((error, beers) => {
        response.status(200).send(beers);
    });
});

//read id
router.get('/read/:id', (request, response) => {
    Beer.findById(request.params.id, (error, beer) => {
        response.status(200).send(beer);
    });
});

//update
router.put('/update/:id', (request, response) => {
    
});

//delete
router.delete('/delete/:id', (request, response) => {
    Beer.findByIdAndDelete(request.params.id, (error) => {
        response.status(202).send("deleted");
    });
});

module.exports = router;