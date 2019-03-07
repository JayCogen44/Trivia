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
        text: `INSERT INTO active_games(user_id, category_id, room_id)
               VALUES($1,$2,$3) RETURNING *`,
        values: [
            req.body.user_id,
            req.body.category_id,
            req.body.room_id
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

triviaController.joinRoom = (req, res, next) => {
    const link = req.body.linkId.split('-');
    const roomId = Number(link[0]);
    const catId = Number(link[1]);
    const query = {
        text: `INSERT INTO active_games(user_id, room_id, category_id)
               VALUES($1, $2, $3)`,
        values: [
            req.body.userId,
            roomId,
            catId
        ]
    }
    pool.query(query.text, query.values, (err, joinedRoom) => {
        if (err) {
            console.log(`Error when joining a room: ${err}`);
        } else {
            res.locals.joinedRoom = joinedRoom.rows[0];
            next();
        }
    })
}

triviaController.results = (req, res, next) => {
    const query = {
        text: `UPDATE active_games
               SET score = $1
               WHERE room_id = $2
               RETURNING active_games.*`,
        values: [
            Number(req.body.score),
            Number(req.body.room_id)
        ]
    }
    pool.query(query.text, query.values, (err, results) => {
        if (err) {
            console.log(`Error when joining a room: ${err}`);
        } else {
            res.locals.results = results.rows;
        }
    });
}

module.exports = triviaController;