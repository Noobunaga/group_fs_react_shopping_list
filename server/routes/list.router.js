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

//PUT to update purchased status

router.put('/:id', (req, res) => {
    const itemId = req.params.id;
    let sqlText = `UPDATE "shopping_list" SET "purchased"='true' WHERE id=$1;`;

    pool.query(sqlText, [itemId])
    .then(dbResponse => {
        console.log('Updated Item Purchased Status:', dbResponse.rowCount);
        res.sendStatus(202);
    })
    .catch(error => {
        console.log('There was an error updating the table', error);
        res.sendStatus(500);
    });
})

//DELETE - DELETE: Delete a task from the to do list

router.delete('/delete/:id', (req, res) => {
    console.log('Request URL: ', req.url);
    console.log('Request route parameters: ', req.params);
    const itemId = req.params.id;
    console.log(`Item ID is: ${itemId}`);

    // creates string to delete task
    const sqlText = `
    DELETE FROM shopping_list WHERE id = $1
    `;

    pool.query(sqlText, [itemId])
        .then(dbResponse => {
            console.log('How many rows deleted:', dbResponse.rowsCount);
            res.sendStatus(200);
        })
        .catch(error => {
            console.log(`ERROR! Unable to delete Item with id ${itemId}. Error: ${error}`);
            res.sendStatus(500);
        });
});

module.exports = router;