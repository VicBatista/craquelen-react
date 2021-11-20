import React from "react";
import Item from "../Item/Item";


function ItemList({data}) {
    return (
        <div>
            {data.map((producto) => (
                <Item key={producto.id} name={producto.name} description={producto.description} price={producto.price} imgUrl={producto.imgUrl} quant={producto.quant} />
            ))}
        </div>
    )
}

export default ItemList
