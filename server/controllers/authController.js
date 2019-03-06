const { Pool } = require('pg');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DB_CONNECT
});

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FB_APPID,
      clientSecret: process.env.FB_SECRET,
      callbackURL: 'http://localhost:3000/auth/facebook/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('ACCESS TOKEN', accessToken);
      console.log('REFRESH TOKEN', refreshToken);
      console.log('PROFIIIIILEEEE', profile);
      done(null, profile);
    }
  )
);
