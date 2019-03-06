const pool = require('../database');
const triviaController = {};

triviaController.getCategories = (req, res, next) => {
    const query = {
        text: `SELECT * FROM categories`
    }
    pool.query(query.text, (err, categories) => {
        if (err) {
            console.log(`Error when getting categories: ${err}`);
        } else {
            res.locals.categories = categories.rows;
            next();
        }
    });
}

triviaController.getQuestions = (req, res, next) => {
    const query = {
        text: `SELECT * FROM questions
               WHERE category_id = $1`,
        values: [
            req.params.categoryId
        ]
    }
    pool.query(query.text, query.values, (err, questions) => {
        if (err) {
            console.log(`Error when getting questions: ${err}`);
        } else {
            res.locals.questions = questions.rows;
            next();
        }
    });
}

triviaController.newGame = (req, res, next) => {
    const query = {
        text: `INSERT INTO activeGames(user_id, category_id, room_name)
               VALUES($1,$2,$3,$4) RETURNING *`,
        values: [
            req.body.user_id,
            req.body.category_id,
            req.body.room_name
        ]
    }
    pool.query(query.text, query.values, (err, activeGames) => {
        if (err) {
            console.log(`Error when creating convo: ${err}`);
        } else {
            res.locals.newGame = activeGames.rows[0];
            next();
        }
    })
}

module.exports = triviaController;