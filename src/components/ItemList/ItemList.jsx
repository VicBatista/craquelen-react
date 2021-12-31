import React from "react";
import Item from "../Item/Item";
import { Container } from "react-bootstrap";

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
