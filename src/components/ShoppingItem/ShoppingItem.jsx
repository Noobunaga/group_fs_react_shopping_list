import react from 'react';
import '../ShoppingItem/ShoppingItem.css';

function ShoppingItem(props){

    const logThis = () => {
        console.log('This');
    }
    return ( (!props.item.purchased) ? (

            <tr>
                <td>{props.item.name}</td>
                <td>{props.item.quantity}</td> 
                <td>{props.item.unit}</td> 
                <td className="purchaseCell"><button onClick={() => props.itemPurchased(props.item.id)} >Buy</button></td>
                <td className="deleteCell"><button onClick={() => props.removeItem(props.item.id)}>Remove</button></td>
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