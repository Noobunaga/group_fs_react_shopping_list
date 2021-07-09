import react from 'react';
import ShoppingItem from '../ShoppingItem/ShoppingItem';

function ShoppingList(props){

    return (
        <>
            <h2>Shopping List</h2>

                <button onClick={props.resetPurchased} id="resetButton">Reset</button>
                <button id="clearButton">Clear</button>

                <button id="resetButton">Reset</button>
                <button onClick={props.deleteTable} id="clearButton">Clear</button>

                <ul>
                    {props.list.map(item => 
                        <ShoppingItem item={item} itemPurchased={props.itemPurchased} />
                        )}
                </ul>
        </>
    )
}

export default ShoppingList;