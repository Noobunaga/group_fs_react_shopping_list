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

    const removeItem = (itemId) => {
        axios({
            method: 'DELETE',
            url: '/list/delete/${itemId}',
          })
          .then(response => {
            console.log('Successfully removed');
            getList();
          })
          .catch(err => {
            alert('Error removing Item');
            console.log(err);
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
                <InputForm removeItem={removeItem}/>
                <p>Under Construction...</p>
                <ShoppingList list={shoppingList} removeItem={removeItem} />
            </main>
        </div>
    );
}

export default App;
