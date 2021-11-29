import React from "react";
import { Container } from "react-bootstrap";
import Item from "../Item/Item";


function ItemList({data}) {
    
    return (
        <Container className="row justify-content-center"> 
            {data.map((item, index) => {
                return (
                <Item key={index} item={item} />
                )
            })}
        </Container>
    )
}

export default ItemList
