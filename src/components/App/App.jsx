import React, { useEffect } from 'react';
import axios from 'axios';

import { useState } from 'react';

import Header from '../Header/Header.jsx';
import './App.css';
// Components go here
import InputForm from '../InputForm/InputForm.jsx';
import ShoppingList from '../ShoppingList/ShoppingList.jsx';


function App() {
    const [shoppingList, setShoppingList] = useState([]);
    const getList = () => {
        axios({
            method: 'GET',
            url: '/list'
        })
        .then( response => {
            console.log('GET data', response.data);
            setShoppingList(response.data);
        })
        .catch( err => {
            console.log('Error during GET', err);
        });
    }

    // POST a new item to the database
    const addItem = (newItemObject) => {
        axios({
            method: 'POST',
            url: '/list',
            data: newItemObject
            })
            .then( dbResponse => {
                console.log('New Item successfully added:', dbResponse);
                getList();
            })
            .catch(error => {
                console.log('Error when posting new Item. Error:', error);
            });
    }


    const itemPurchased = (itemId) => {
        axios({
            method:'PUT',
            url:`/list/${itemId}`,
        })
        .then( response => {
            getList();
        })
        .catch( err => {
            console.log('Error purchasing (put) item', err);
        });

    // DELETE the database contents

    const deleteTable = () => {
        axios({
            method: 'DELETE',
            url: '/list/clear',
            data: {}
            })
            .then( dbResponse => {
                console.log('Table successfully cleared:', dbResponse);
                getList();
            })
            .catch(error => {
                console.log('Error when clearing. Error:', error);
            });

    }
   
    // PUT request to reset all purchased values to false
    const resetPurchased = () => {
        axios({
            method: 'PUT',
            url: '/list/reset',
            data: {}
        })
            .then(dbResponse => {
                console.log('Successfully reset the purchase status of all items', dbResponse);
                getList();
            })
            .catch(error => {
                console.log('Error updating all purchase statuses:', error);
            });
    }

    useEffect( ()=>{
        getList();
    }, []);

    return (
        <div className="App">
            <Header />
            <main>
                <h1>Add an Item:</h1>
                {/* Inputs */}
                <InputForm addItem={addItem}/>

                <ShoppingList list={shoppingList} resetPurchased={resetPurchased} itemPurchased={itemPurchased} deleteTable={deleteTable}/>

            </main>
        </div>
    );
}

export default App;
