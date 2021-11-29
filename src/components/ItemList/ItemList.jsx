import React from "react";
import Item from "../Item/Item";


function ItemList({data}) {
    
    return (
        <div>
            {data.map((item, index) => {
                return (
                <Item key={index} item={item} />
                )
            })}
        </div>
    )
}

export default ItemList
