import react from 'react';
import '../ShoppingItem/ShoppingItem.css';

function ShoppingItem(props){
    return ( (!props.item.purchased) ? (
        <li>
            {props.item.name} {props.item.quantity} {props.item.unit} {props.item.purchased}
            <button onClick={() => props.itemPurchased(props.item.id)} >Buy</button>
            <button className="removeButton" onClick={() => props.removeItem(props.item.id)} >Remove</button>
        </li>
        ) : (
        <li>
            {props.item.name} {props.item.quantity} {props.item.unit} {props.item.purchased}
        </li>
        )
    )
}

export default ShoppingItem;