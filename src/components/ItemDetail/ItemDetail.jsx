import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemCounter from '../ItemCount/ItemCounter';
import getFirestore from '../../Firebase/firebase';
import { useCartContext } from '../../Context/CartContext';

export const ItemDetail = ({item}) => {
    
    // eslint-disable-next-line
    const [datos, setDatos] = useState({});
    const { idProduct } = useParams();
    const [count, setCount] = useState(1);
    // eslint-disable-next-line
    const {cartList, addProduct} = useCartContext();
    

    function onAdd(cant){
        setCount(cant)  
        addProduct({ ...item, cantidad: cant})
    }
    console.log(cartList)
    


    useEffect(() => {
        const db = getFirestore()

        db.collection('productos')
        .doc(idProduct) 
        .get()
        .then(resp => setDatos( {id: resp.id, ...resp.data()} ))
    }, [idProduct])

    return (
        <div>
            <img src={item.imgUrl} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>   
            <h4>${item.price}</h4>
            <ItemCounter onAdd={onAdd} count ={count} inicial={1} stock={item.stock} id={item.id}/>
            {/* {<button onClick= {()=>onAdd(addProducto)}>Lo quiero!</button> } */}
        </div>
    )
}
