import React from 'react';
import { useEffect, useState } from 'react';
import { Productos } from '../../helpers/Productos';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';

const ItemDetailContainer = () => {
    const [productoUnico, setProductoUnico] = useState({});
    const [loading, setLoading] = useState (true);
    const {itemIdParams} = useParams();
    
    useEffect(()=> {
        const promesaProdUnico = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(Productos.find(producto => producto.id.toString() === itemIdParams))
            }, 2000)
        });
        promesaProdUnico.then((prodEncontrado) => {
            setProductoUnico(prodEncontrado)
        })
        .catch((err)=> {
            console.log('Error');
        })
        .finally(()=> {
            setLoading(false)
        })
    }, [itemIdParams])

    return (
        <div>
            {loading ? <h2>Loading del detalle...</h2> : <ItemDetail item={productoUnico} />
            }
        </div>
    )
};


export default ItemDetailContainer
