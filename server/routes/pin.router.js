const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

// GET router working in POSTMAN
// GETs a list of all pins from db
router.get('/', (req, res) => {
  let query = 'SELECT * FROM "pin" ORDER BY "id" ASC;'
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
  VALUES ($1, $2, $3, $4, $5, ${req.user.id});`;
  pool.query(query, [req.body.team, req.body.league, req.body.year, 
    req.body.image_url, req.body.tradeable]).then(() => {
    console.log('Pin added successfully');
    res.sendStatus(201);
  }).catch(error => {
    console.log('Error in post', error);
    res.sendStatus(500);
  });
});


// PUT router working in POSTMAN
// Updates tradeable status via http://localhost:5000/api/pin/tradeable/id
//const query = `UPDATE "pin" SET "tradeable"=${newTrade} WHERE "id"=$1`;
router.put('/tradeable/:id', rejectUnauthenticated,   (req, res) => {
  console.log(req.body, req.params)
  //let newTrade = !req.body.tradeable;
  let id = req.params.id;
  //console.log(`User updating pin ${id} to DB`, newTrade );
  const query = `UPDATE "pin" SET "tradeable" = NOT "tradeable" 
  WHERE "id"=$1;`
  pool.query(query, [id]).then(() => {
    console.log('Trade status updated successfully');
    res.sendStatus(200);
  }).catch(error => {
    console.log('Error in put', error);
    res.sendStatus(500);
  });
});



// TODO: UPDATE w/rejectUnauthenticated, TEST MORE IN POSTMAN
router.delete(`/:id`,  rejectUnauthenticated, (req, res) => {
  console.log('Deleting pin with id of:', req.params.id);
  const queryText = `DELETE FROM "pin" WHERE "id"=$1;`;
  pool.query(queryText, [req.params.id])
  .then((result) => {
    res.sendStatus(204)
  }).catch ((error) => {
    console.log('error deleting pin', error);
  })
  // endpoint functionality
});


module.exports = router;
