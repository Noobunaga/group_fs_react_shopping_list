import react from 'react';
import '../ShoppingItem/ShoppingItem.css';

function ShoppingItem({item}){
    return (
        <li>
            {item.name} {item.quantity} {item.unit}
            <button class="purchaseButton">Buy</button>
            <button class="removeButton">Remove</button>
        </li>
    )
}

export default ShoppingItem;