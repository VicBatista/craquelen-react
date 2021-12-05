import { useState, createContext, useContext } from 'react';

const CartContext= createContext([]);
export const useCartContext= () => useContext(CartContext);

function CartContextProvider({ children }) {
    const [cartList, setCartList] = useState([]);

    const addProducto=(producto) => {
        setCartList(...cartList, producto)
    }

    const vaciarCart=()=> {
        setCartList([])
    }
    
    return(
        <CartContext.Provider value= {{cartList, addProducto, vaciarCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider