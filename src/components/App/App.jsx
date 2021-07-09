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

    useEffect( ()=>{
        getList();
    }, []);


    return (
        <div className="App">
            <Header />
            <main>
                <h1>Add an Item:</h1>
                {/* Inputs */}
                <InputForm />
                <p>Under Construction...</p>
                <ShoppingList list={shoppingList} />
            </main>
        </div>
    );
}

export default App;
