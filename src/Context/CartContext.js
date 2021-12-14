import { useState, createContext, useContext } from 'react';

const CartContext= createContext([]);
export const useCartContext= () => useContext(CartContext);

function CartContextProvider({ children }) {
    
    const [cartList, setCartList] = useState([]);

    const addProducto=(producto) => {
        const index = cartList.findIndex(i => i.id === producto.id)

        if (index > -1) {
            const repProd = cartList[index].cantidad;
            cartList.splice(index, 1)
            setCartList([...cartList, {...producto, cantidad: producto.cantidad + repProd}])
        } else {
            setCartList([...cartList, {...producto, cantidad: producto.cantidad }])
        }
    }

    const totalPrice = () => {
        return cartList.reduce((acum, valor)=> (acum + (valor.cantidad * valor.price)), 0)
    }

    const quantItem = () => {
        return cartList.reduce((acum, producto)=> acum = acum + producto.cantidad, 0)
    }

    const emptyCart=()=> {
        setCartList([])
    }
    
    return(
        <CartContext.Provider value= {{cartList, addProducto, emptyCart, totalPrice, quantItem }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider