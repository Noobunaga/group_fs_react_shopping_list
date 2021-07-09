import { useState } from 'react';

function InputForm({addItem}) {

    const [ itemName, setItemName ] = useState('');
    const [ itemQuantity, setItemQuantity] = useState('');
    const [ itemUnit, setItemUnit ] = useState('');

    const handleSubmit = (event) => {
        // prevent submit from reloading the page
        event.preventDefault();

        // tests
        console.log('Item name:', itemName);
        console.log('Quantity name:', itemQuantity);
        console.log('Unit type', itemUnit);

        // create new item object based on input fields
        const newItem = {
            name: itemName,
            quantity: itemQuantity,
            unit: itemUnit
        }

        // test
        console.log(newItem);

        // pass object into function to POST item to database
            addItem(newItem);

        // Clear form inputs
        setItemName('');
        setItemQuantity('');
        setItemUnit('');

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                onChange={(event) => setItemName(event.target.value)}
                value={itemName}
                id="nameIn"
                type="text"
                name="name"
                placeholder="name"
                />
                <br />
                <input 
                onChange={(event) => setItemQuantity(event.target.value)} 
                value={itemQuantity} 
                id="quantityIn" 
                type="number" 
                name="quantity" 
                placeholder="quantity" 
                />
                <input 
                onChange={(event) => setItemUnit(event.target.value)} 
                value={itemUnit} 
                id="unitIn" 
                type="text" 
                name="unit" 
                placeholder="Unit Type (pounds, ounces, gallons)" 
                />
                <button id="submitButton">Submit</button>
            </form>
        </>
    );
}

export default InputForm;