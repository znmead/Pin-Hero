const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', (req, res) => {
  let query = 'SELECT * FROM "pin";'
  pool
    .query(query).then(
      (result) => { res.send(result.rows) })
    .catch(error => {
      console.log("Couldn't get pins from DB", error);
      res.sendStatus(500);
    })
});


/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, (req, res) => {
  // endpoint functionality
  console.log('Adding new pin to DB');
  const queryText = `INSERT INTO "pin" ("team", "league", "year", "image_url", "tradeable", "user_id")
  VALUES ($1, $2, $3, $4, $5, $6);`;

  pool.query(queryText, [req.body.team, req.body.league, req.body.year, 
    req.body.image_url, req.body.tradeable, req.body.user_id]).then(() => {
    console.log('Pin added successfully');
    res.sendStatus(201);
  }).catch(error => {
    console.log('Error in post', error);
    res.sendStatus(500);
  });
});

module.exports = router;
