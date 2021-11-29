import {useState} from 'react';
import './itemCounterStyles.css';

const ItemCounter = ({inicial, stock, onAdd}) => {
    const [count, setCount] = useState(inicial)
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
    function Agregar() {
        onAdd(count)
        setCount(1)
    }

    return (
        <div className="counter">
            <div className="addRestContainer">
                <button onClick={Restar} type="button" className="btn">-</button>                                
                <div className="quant">{count}</div>
                <button onClick={Sumar} type="button" className="btn">+</button>
            </div>
            <button onClick={Agregar} className="btn-add">Agregar al carrito</button>
        </div>

    )
}

export default ItemCounter
