import React from 'react';
import { useEffect, useState, useContext, useParams } from 'react';
//import { useCartContext } from '../../Context/CartContext';
import ItemCounter from '../ItemCount/ItemCounter';
import getFirestore from '../../Firebase/firebase';

export const ItemDetail = ({item}) => {
    console.log(item)
    const [datos, setDatos] = useState({});
    const { idProduct } = useParams();
    //const [count, setCount] = useState(1);
    //const {cartList, addProducto} = useCartContext;

    /* function onAdd(cant){
        setCount(cant)
        addProducto({ item: item, cantidad: cant})
    }
    console.log(cartList) */


    useEffect(() => {
        const db = getFirestore()
        const dbQuery = db.collection('productos').doc({idProduct})
        dbQuery.get()
        .then(resp => setDatos( {id: resp.id, ...resp.data()} ))
    }, [])

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
