require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const authController = require('./controllers/authController');

require('./controllers/authController');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json('hello Jonathan');
});

const authRouter = express.Router();

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

<<<<<<< HEAD
app.use('/auth', authRouter);
=======
app.get('/hello', (req,res) => {
    res.json('hello Benji');
})
>>>>>>> 999cca7aa853decd8c800256dbb12f988bede50b

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
}); // listens on port 3000 -> http://localhost:3000/
