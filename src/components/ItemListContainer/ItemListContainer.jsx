import React from 'react'
//import Item from '../Item/Item'
import ItemCounter from '../ItemCount/ItemCounter'
import {useEffect, useState} from 'react';
import ItemList from '../ItemList/ItemList';
import {getFetch} from './helpers/getFetch';

function ItemListContainer() {
    const [data, setData]= useState([]);
    
    useEffect(() => {
        (setTimeout(() => {
        const getFetch = fetch(producto);
        getFetch.then((resolved)=> resolved.get()).then((data) => setData(data));
    }, 2000))
    }, [])

    console.log(data)

    function onAdd(cant) {
        console.log(cant)
    }
    
    return (
        <div>
            <ItemList />
            <ItemCounter inicial={1} stock={producto.quant} onAdd={onAdd} />
    
        </div>
    )
}

export default ItemListContainer
