import React from 'react'
//import Item from '../Item/Item'
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { getFetch } from '../../helpers/Productos';
import { useParams } from 'react-router-dom';
import getFirestore from '../../Firebase/firebase';
// import { dataBase } from '../../Firebase/firebase';

function ItemListContainer() {
    const [data, setData]= useState([]);
    const [loading, setLoading] = useState(true);
    const {catIdParams} = useParams();
    
    useEffect(() => {
        
        const db = getFirestore();
        const dbQuery = db.collection('productos')
        .where('category', '==', catIdParams)
        dbQuery.get()
        .then(datos => setData(datos.docs.map( item => ( { id: item.id, ...item.data()}))))
        
        console.log(data)
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
    }, [catIdParams])

    console.log(data)
    
    return (
        <div className="row justify-content-center">
            {loading ? <h1>Loading...</h1> : <ItemList data={data}/> }

        </div>
    )
}

export default ItemListContainer
