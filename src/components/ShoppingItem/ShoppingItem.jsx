import react from 'react';
import '../ShoppingItem/ShoppingItem.css';

function ShoppingItem({props}){

    return ( (!props.item.removed) ? (
        <li>
            {item.name} {item.quantity} {item.unit}
            <button class="purchaseButton">Buy</button>
            <button onClick={() => props.removeItem(props.item.id)} >Remove</button>
        </li>
    ) : (
        <li>
            {props.item.name} {props.item.quantity} {props.item.unit} {props.item.purchased}
        </li>
        )
    )
}

export default ShoppingItem;