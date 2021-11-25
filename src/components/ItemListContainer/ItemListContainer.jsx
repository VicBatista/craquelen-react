import React from 'react'
//import Item from '../Item/Item'
import {useEffect, useState} from 'react';
import ItemList from '../ItemList/ItemList';
import {getFetch} from '../../helpers/getFetch';

function ItemListContainer() {
    const [data, setData]= useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        
            (getFetch.then(data => setData(data))
            .catch(err => console.log(err))
            .finally(()=> setLoading(!true))
            /* getFetch.then((producto) => {
            console.log(producto);
            }).catch((err) => console.log(err));
           /*  const fetchData = fetch(producto);
            fetchData.then(resolve=> resolve.json()).then(data => setData(data)); */
            )
    }, [])

    console.log(data)
    
    return (
        <div>
            {loading ? <h1>Está ejecutandose la promesa</h1> : <ItemList data={data}/> }

        </div>
    )
}

export default ItemListContainer
