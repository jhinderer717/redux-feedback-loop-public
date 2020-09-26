const express = require('express');
const router = express.Router();
const pool = require('../pool');

// POST feedback
router.post('/', (req, res) => {
  console.log('router.post req.body', req.body);
  const feedbackList = req.body;
  const sqlText = `INSERT INTO feedback (feeling, understanding, support, comments) 
    VALUES ($1, $2, $3, $4)`;
    pool.query(sqlText, [feedbackList.feeling, feedbackList.understand, feedbackList.support, feedbackList.comment])
    .then((result) => {
      res.sendStatus(201);
    }).catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(418);
    }); // end pool.query
}); // end router.post

module.exports = router