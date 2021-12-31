import {useState} from 'react';
import { useCartContext } from '../../Context/CartContext';
import './itemCounterStyles.css';

const ItemCounter = ({inicial, stock, onAdd, item}) => {
    const [count, setCount] = useState(inicial);
    // eslint-disable-next-line
    const {cartList, addProduct} = useCartContext();
    const {changeButton, setChangeButton} = useState(true);

    function sum () {
        if (count<stock) {
            setCount(count + 1)
        }
    }
    function rest () {
        if (count>0) {
            setCount(count-1)   
        }
    }
    function addToCart (cant) {
        onAdd(count)
        setChangeButton(false)
        addProduct({ item: item, cantidad: cant})
    }

    return (
        <div className="counter">
            <div className="addRestContainer">
                <button onClick={rest} type="button" className="btn">-</button>                                
                <div className="quant">{count}</div>
                <button onClick={sum} type="button" className="btn">+</button>
            </div>
            { changeButton ? 
                <button onClick={addToCart} className="btn-add">Lo quiero!</button> 
            : 
                <button className="btn-add">Agregado</button>
            }
        </div>
    )
}

export default ItemCounter
