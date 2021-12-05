import React from 'react';
/* import { useState } from 'react';
import { useCartContext } from '../../Context/CartContext';
 */import ItemCounter from '../ItemCount/ItemCounter';

export const ItemDetail = ({item}) => {
    console.log(item)
    /* const [count, setCount] = useState(1);
    const {cartList, addProducto} = useCartContext;

    function onAdd(cant){
        setCount(cant)
        addProducto({ item: item, cantidad: cant})
    }
    console.log(cartList)
 */
    return (
        <div>
            <img src={item.imgUrl} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <h4>${item.price}</h4>
            <ItemCounter inicial={1} stock={item.stock} id={item.id}/>
            {/* <button onClick= {()=>onAdd(count)}>Lo quiero!</button> */}
        </div>
    )
}
