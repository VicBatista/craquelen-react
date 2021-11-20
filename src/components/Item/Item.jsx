import React from 'react';
import './itemStyles.css';


const Item = ({imgUrl, name, price, description}) => {

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
            </div>
        </div>
    )
}

export default Item
