import react from 'react';
import '../ShoppingItem/ShoppingItem.css';

function ShoppingItem(props){
    return (
        <li>
            {props.item.name} {props.item.quantity} {props.item.unit}
            <button onClick={() => props.itemPurchased(props.item.id)} >Buy</button>
            <button class="removeButton">Remove</button>
        </li>
    )
}

export default ShoppingItem;