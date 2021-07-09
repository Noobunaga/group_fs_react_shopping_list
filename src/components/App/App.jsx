import React from 'react';
import axios from 'axios';

import ShoppingList from '../ShoppingList/ShoppingList.jsx';
import Header from '../Header/Header.jsx';
import './App.css';


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


    return (
        <div className="App">
            <Header />
            <main>
                <h1>Add an Item:</h1>
                {/* Inputs */}
                <ShoppingList list={shoppingList} />
            </main>
        </div>
    );
}

export default App;
