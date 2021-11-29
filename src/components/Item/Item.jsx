import React from 'react';
import ItemCounter from '../ItemCount/ItemCounter';
//import onAdd from '../ItemCount/ItemCounter';
import { Link } from 'react-router-dom';
import './itemStyles.css';


export default function Item({item}) {
    
    function onAdd(cant) {
        console.log(cant)
    }
    return (
            <div key={item.id} className="contenedor-productos card m-4 col-3">
                <img src={item.imgUrl} className="d-block w-100 card-img-top m-3" alt={item.name} />
                <div className="card-body p-1">
                        <h1>{item.name}</h1>
                    <h2>{item.description}</h2>
                    <h3>$ {item.price}</h3>
                    <Link to={`item/${item.id}`} >
                        <button className="btn-primary">Detalles</button>
                    </Link> 
                </div>
                <ItemCounter inicial={1} stock={item.stock} id={item.id} onAdd={onAdd} />
            </div>
    )
}

