import {useState} from 'react';
import { useCartContext } from '../../Context/CartContext';
import './itemCounterStyles.css';

const ItemCounter = ({inicial, stock, onAdd, item}) => {
    const [count, setCount] = useState(inicial);
    // eslint-disable-next-line
    const {cartList, addProduct} = useCartContext();

 /*    function onAdd(cant){
        setCount(cant)
        addProducto({ item: item, cantidad: cant})
    }
    console.log(cartList) */


    function sumar() {
        if (count<stock) {
            setCount(count + 1)
        }
    }
    function restar() {
        if (count>0) {
            setCount(count-1)   
        }
    }
    function agregar(cant) {
        onAdd(count)
        setCount(1)
        addProduct({ item: item, cantidad: cant})
    }
    //console.log(cartList)

    return (
        <div className="counter">
            <div className="addRestContainer">
                <button onClick={restar} type="button" className="btn">-</button>                                
                <div className="quant">{count}</div>
                <button onClick={sumar} type="button" className="btn">+</button>
            </div>
            { agregar ? <button onClick={agregar} className="btn-add">Lo quiero!</button> 
            : <button onClick={agregar} className="btn-add">Lo quiero!</button>}
            {/* <button onClick= {()=>onAdd(count)}>Lo quiero!</button> */}
        </div>

    )
}

export default ItemCounter
