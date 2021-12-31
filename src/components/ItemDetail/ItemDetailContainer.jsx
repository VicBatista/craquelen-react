import React from 'react';
import { ItemDetail } from './ItemDetail';
import getFirestore from '../../Firebase/firebase';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [productoUnico, setProductoUnico] = useState({});
    const [loading, setLoading] = useState(true);
    const { itemIdParams } = useParams();
    
    useEffect(()=> {
        const db = getFirestore();

        db.collection('productos')
        .doc(itemIdParams)
        .get()
        .then(res => setProductoUnico({id: res.id, ...res.data()}))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))

    }, [itemIdParams])

    return (
        <div>
            {loading ? <h2>Loading del detalle...</h2> : <ItemDetail item={productoUnico} />
            }
        </div>
    )
};


export default ItemDetailContainer
