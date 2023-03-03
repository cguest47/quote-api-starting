const express = require('express');
const req = require('express/lib/request');
const expressRouter = express.Router();
const  {quotes}  = require('./data');
const { getRandomElement, getAuthorQuotes} = require('./utils');

//GET Requests START//////////////////////////

// GET all quotes or quotes from single author
expressRouter.get('/', (req, res, next) => {
    const quotesObject = {
        quotes: []
    }
    if(!req.query.hasOwnProperty('person')) {
        quotesObject.quotes = quotes
    } else {
        const author = req.query.person;
        quotesObject.quotes = getAuthorQuotes(author, quotes);
    }
    res.send(quotesObject);
});

// GET random quote
expressRouter.get('/random', (req, res, next) => {
    const quoteObject = {
        quote: getRandomElement(quotes)
    }
    res.send(quoteObject);
});

//GET Requests END//////////////////////////

//POST Requests START//////////////////////////
// POST a new quote
expressRouter.post('/', (req, res, next) => {
    const quote = req.query.quote;
    const author = req.query.person;
    if(quote && author) {
        let newQuote = {
            quote: quote,
            author: author
        };
        quotes.push(newQuote);
        res.status(204).send(newQuote);
    } else {
        res.status(400).send("You must add a valid quote or person.");
    }
});
//POST Requests END/////////////////////////////

//PUT Requests START////////////////////////////

//PUT Requests END//////////////////////////////

//DELETE Requests START/////////////////////////

//DELETE Requests END///////////////////////////

module.exports = expressRouter;