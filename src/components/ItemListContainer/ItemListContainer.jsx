import React from 'react'
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import getFirestore from '../../Firebase/firebase';

function ItemListContainer() {
    const [data, setData]= useState([]);
    const [loading, setLoading] = useState(true);
    const {catIdParams} = useParams();
    
    useEffect(() => {
        
        const db = getFirestore();
        const dbCollection = db.collection('productos');

        const dbQuery = catIdParams ? dbCollection.where('category', '==', catIdParams) : dbCollection;

        dbQuery.get()
        .then(datos => setData(datos.docs.map( item => ( { id: item.id, ...item.data()}))))
        .catch(err => {console.log(err)})
        .finally(() => {setLoading(!true)})
        
        /* if(catIdParams) {
            dbQuery.collection('productos')
            .where('category', '==', catIdParams)
            .get()
            .then(datos => setData(datos.docs.map( item => ( { id: item.id, ...item.data()}))))
            .catch(err => {console.log(err)})
            .finally(() => {setLoading(false)})
        } else {
            dbQuery.collection('productos')
            .get()
            .then(datos => setData(datos.docs.map( item => ( { id: item.id, ...item.data()}))))
            .catch(err => {console.log(err)})
            .finally(() => {setLoading(!true)})
        } */
        /* if(catIdParams){
            getFetch().then((Productos) => {
                setData(Productos.filter(producto => producto.category === catIdParams))
            })
            .catch(err => {console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })
        } else {(
            getFetch().then((data) => {setData(data)})
            .catch((err) => {console.log(err)})
            .finally(()=> {setLoading(!true)})
            )
        }   */
    })

    console.log(data)
    
    return (
        <div className="row justify-content-center">
            {loading ? <h1>Loading...</h1> : <ItemList data={data}/> }

        </div>
    )
}

export default ItemListContainer
