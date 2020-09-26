const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const feedbackRouter = require('./modules/routes/feedback.router');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/review', feedbackRouter);


/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});


// POST feedback
// app.post('/review', (req, res) => {
//     console.log('router.post req.body', req.body);
//     const feedbackList = req.body;
//     const sqlText = `INSERT INTO feedback (feeling, understanding, support, comments) 
//       VALUES ($1, $2, $3, $4)`;
//     pool.query(sqlText, [feedbackList.feeling, feedbackList.understand, feedbackList.support, feedbackList.comment])
//       .then((result) => {
//         res.sendStatus(201);
//       }).catch((error) => {
//         console.log(`Error making database query ${sqlText}`, error);
//         res.sendStatus(418);
//       }); // end pool.query
// }); // end router.post