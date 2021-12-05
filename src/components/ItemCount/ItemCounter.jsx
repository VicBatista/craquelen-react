import {useState} from 'react';
import { useCartContext } from '../../Context/CartContext';
import './itemCounterStyles.css';

const ItemCounter = ({inicial, stock, onAdd, item}) => {
    const [count, setCount] = useState(inicial);
    const {cartList, addProducto} = useCartContext;

 /*    function onAdd(cant){
        setCount(cant)
        addProducto({ item: item, cantidad: cant})
    }
    console.log(cartList) */


    function Sumar() {
        if (count<stock) {
            setCount(count + 1)
        }
    }
    function Restar() {
        if (count>0) {
            setCount(count-1)   
        }
    }
    function Agregar(cant) {
        onAdd(count)
        setCount(1)
        addProducto({ item: item, cantidad: cant})
    }
    console.log(cartList)

    return (
        <div className="counter">
            <div className="addRestContainer">
                <button onClick={Restar} type="button" className="btn">-</button>                                
                <div className="quant">{count}</div>
                <button onClick={Sumar} type="button" className="btn">+</button>
            </div>
            <button onClick={Agregar} className="btn-add">Lo quiero!</button>
            {/* <button onClick= {()=>onAdd(count)}>Lo quiero!</button> */}
        </div>

    )
}

export default ItemCounter
