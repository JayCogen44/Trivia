// EXPRESS SERVER
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');

const app = express();
const PORT = 3000;

// NPM MODULES
require('dotenv').config();

// CONTROLLERS
const triviaController = require('./controllers/triviaController');
require('./controllers/authController');

// GLOBAL ROUTES
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// USER ROUTES

const authRouter = express.Router('/auth');

authRouter.get('/facebook', passport.authenticate('facebook'), (req, res) => {
  console.log('Logging in with Facebook');
});

authRouter.get(
  '/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/'
  }),
  (req, res) => {
    req.session.user = req.user;
    res.redirect();
  }
);

// TRIVIA ROUTES
app.get('/categories', triviaController.getCategories, (req, res) => {
  res.json(res.locals.categories);
});

app.get('/questions/:categoryId', triviaController.getQuestions, (req, res) => {
  res.json(res.locals.questions);
});

app.post('/new-game', triviaController.newGame, (req, res) => {
  res.json(res.locals.newGame);
});

// post join-room - add a row in activegames table with current user id
app.post('/join-room', triviaController.joinRoom, (req, res) => {
  res.json(res.locals.joinedRoom);
});

// get results - query activegames table for current room id -> all users in room, their score,
// and the answers table that coorespond the questions in that category in that room
app.post('/results', triviaController.results, (req, res) => {
  res.json(res.locals.results);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
}); // listens on port 3000 -> http://localhost:3000/
