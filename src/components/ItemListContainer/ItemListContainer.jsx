import React from 'react';
import ItemList from '../ItemList/ItemList';
import getFirestore from '../../Firebase/firebase';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
        .catch(err => console.log(err))
        .finally(() => setLoading(!true))
    }, [catIdParams])

    console.log(data)
    
    return (
        <div className="row justify-content-center">
            {loading ? <h1>Loading...</h1> : <ItemList data={data}/> }

        </div>
    )
}

export default ItemListContainer
