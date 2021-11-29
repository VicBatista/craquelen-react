import React from 'react';
import ItemCounter from '../ItemCount/ItemCounter';

export const ItemDetail = ({item}) => {
    console.log(item)
    return (
        <div>
            <img src={item.imgUrl} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <h4>{item.price}</h4>
            <ItemCounter stock={item.stock} id={item.id}/>   
        </div>
    )
}
