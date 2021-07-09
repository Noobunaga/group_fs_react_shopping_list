const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

// GET route to get list items from database
router.get('/', (req, res) => {
    // When you fetch all things in these GET routes, strongly encourage ORDER BY
    // so that things always come back in a consistent order
    //create variable to hold SQL query 
    const sqlText = `SELECT * FROM shopping_list ORDER BY id DESC;`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`Got stuff back from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})

// POST-INSERT: adds a new item to the database list

router.post('/', (req, res) => {
    const item = req.body;
    const sqlText = `INSERT INTO shopping_list ("name", "quantity", "unit")
                     VALUES ($1, $2, $3)`;
    
    pool.query(sqlText, [item.name, item.quantity, item.unit])
        .then((result) => {
            console.log(`Added grocery item to the database`, item);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})


module.exports = router;