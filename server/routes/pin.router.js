const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

// GET router working in POSTMAN
// GETs a list of all pins from db
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


// POST router working in POSTMAN
// Adds new pins to DB
router.post('/', rejectUnauthenticated, (req, res) => {
  console.log('Adding new pin to DB');
  const query = `INSERT INTO "pin" ("team", "league", "year", "image_url", "tradeable", "user_id")
  VALUES ($1, $2, $3, $4, $5, $6);`;
  pool.query(query, [req.body.team, req.body.league, req.body.year, 
    req.body.image_url, req.body.tradeable, req.body.user_id]).then(() => {
    console.log('Pin added successfully');
    res.sendStatus(201);
  }).catch(error => {
    console.log('Error in post', error);
    res.sendStatus(500);
  });
});


// TODO: UPDATE w/rejectUnauthenticated, TEST MORE IN POSTMAN
// PUT router working in POSTMAN
// Updates tradeable status via http://localhost:5000/api/pin/tradeable/id
router.put('/tradeable/:id', rejectUnauthenticated,   (req, res) => {
  let newTrade = req.body.tradeable;
  let id = req.params.id;
  console.log(`User ${req.body.user_id} updating pin ${req.body.team} to DB`, newTrade );
  const query = `UPDATE "pin" SET "tradeable"=${newTrade} WHERE "user_cd id"=$1`;
  pool.query(query, [id]).then(() => {
    console.log('Trade status updated successfully');
    res.sendStatus(200);
  }).catch(error => {
    console.log('Error in post', error);
    res.sendStatus(500);
  });
});



// TODO: DELETE Router

module.exports = router;
