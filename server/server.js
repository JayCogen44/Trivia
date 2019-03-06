//EXPRESS SERVER
const express = require('express');
const app = express();
const PORT = 3000;

//NPM MODULES
require('dotenv').config();
const bodyParser = require("body-parser");

//CONTROLLERS
const triviaController = require('./controllers/triviaController');

//GLOBAL ROUTES
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//USER ROUTES

//TRIVIA ROUTES
app.get('/categories', triviaController.getCategories, (req, res) => {
    res.json(res.locals.categories);
})

app.get('/questions/:categoryId', triviaController.getQuestions, (req, res) => {
    res.json(res.locals.questions);
});

app.post('/new-game', triviaController.newGame, (req, res) => {
    res.json(res.locals.newGame)
});

// post join-room - add a row in activegames table with current user id

// post submit answer - add row in answers table 

// get results - query activegames table for current room id -> all users in room, their score, 
// and the answers table that coorespond the questions in that category in that room


app.listen(PORT, function () {
    console.log(`listening on port ${PORT}`);
}); //listens on port 3000 -> http://localhost:3000/