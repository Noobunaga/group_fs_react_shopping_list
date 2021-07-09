import react from 'react';
import '../ShoppingItem/ShoppingItem.css';

function ShoppingItem(props){
    return ( (!props.item.purchased) ? (
        <tr>
            <td>{props.item.name}</td>
            <td>{props.item.quantity}</td> 
            <td>{props.item.unit}</td> 
            <td className="purchaseCell"><button onClick={() => props.itemPurchased(props.item.id)} >Buy</button></td>
            <td className="deleteCell"><button className="removeButton">Remove</button></td>
        </tr>
        ) : (
            <tr className="purchased">
                <td>{props.item.name}</td>
                <td>{props.item.quantity}</td> 
                <td>{props.item.unit}</td> 
                <td className="purchaseCell">√</td>
                <td className="deleteCell"></td>
            </tr>
        )
    )
}

export default ShoppingItem;