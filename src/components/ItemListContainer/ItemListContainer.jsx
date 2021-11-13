import React from 'react'
import Item from '../Item/Item'


function ItemListContainer() {
    return (
        <div>
            <Item name="Torta Nina" price="$2000" description="Bizcocho de chocolate, almíbar de café, ganache de chocolate semiamargo y cremoso de dulce de leche" imgUrl="https://i.ibb.co/Jd6xmR0/151137197-462827654742001-4507130926717660266-n.jpg"  />
            <Item name="Torta Marie" price="$1800" description="Bizcocho de matcha, frosting de chocolate blanco y curd de limón" imgUrl="https://i.ibb.co/K012LC4/Whats-App-Image-2021-09-21-at-10-55-13.jpg"/>
            <Item name="Cheesecake" price="$1500" description="Cheesecake con mermelada casera de frutos rojos" imgUrl="https://i.ibb.co/8Dx9TJD/Whats-App-Image-2021-09-21-at-10-55-08.jpg"/>
    
        </div>
    )
}

export default ItemListContainer
