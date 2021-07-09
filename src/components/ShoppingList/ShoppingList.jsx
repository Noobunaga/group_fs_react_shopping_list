import react from 'react';
import ShoppingItem from '../ShoppingItem/ShoppingItem';
import './ShoppingList.css';

function ShoppingList(props){

    return (
        <>
            <h2>Shopping List</h2>

                <button onClick={props.resetPurchased} id="resetButton">Reset</button>
                <button onClick={props.deleteTable} id="clearButton">Clear</button>

                <table>
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Quantity</th>
                            <th>Unit</th>
                            <th>√</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {props.list.map(item => 
                        <ShoppingItem key={item.id} item={item} itemPurchased={props.itemPurchased} />
                        )}
                    </tbody>
                </table>
        </>
    )
}

export default ShoppingList;