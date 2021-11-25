import React from 'react';
import ItemCounter from '../ItemCount/ItemCounter';
//import onAdd from '../ItemCount/ItemCounter';
import './itemStyles.css';


const Item = ({producto, imgUrl, name, price, description}) => {
    
    function onAdd(cant) {
        console.log(cant)
    }
    return (
        <div className="row justify-content-center shop-container">
            <div className="contenedor-productos card col-3">
                <img src={imgUrl} className="d-block w-100 card-img-top m-3" alt="" />
                <div className="card-body p-1">
                    <h1>{name}</h1>
                    <h2>{description}</h2>
                    <h3>{price}</h3>
                    <button className="btn-primary">Detalles</button>
                </div>
                <ItemCounter inicial={1} stock={producto.quant} onAdd={onAdd} />
            </div>
        </div>
    )
}

export default Item
