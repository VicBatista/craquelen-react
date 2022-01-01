import { useState, createContext, useContext } from 'react';

const CartContext= createContext([]);

export const useCartContext= () => useContext(CartContext);

function CartContextProvider({ children }) {
    
    const [cartList, setCartList] = useState([]);

    const addProduct=(producto) => {
        const index = cartList.findIndex(i => i.id === producto.id)

        if (index > -1) {
            const repeatProd = cartList[index].cantidad;
            cartList.splice(index, 1)
            setCartList([...cartList, {...producto, cantidad: producto.cantidad + repeatProd}])
        } else {
            setCartList([...cartList, {...producto, cantidad: producto.cantidad }])
        }
    }

    const deleteFromCart = (producto) => {
        const deleteProduct = cartList.filter((prod) => prod.id !== producto.id);
        setCartList([...deleteProduct]);
    };

    const totalPrice = () => {
        return cartList.reduce((acum, valor)=> (acum + (valor.cantidad * valor.price)), 0)
    }

    const cartWidget = () => {
        return cartList.reduce((acum, producto)=> acum = acum + producto.cantidad, 0)
    }

    const emptyCart=()=> {
        setCartList([])
    }
    
    return(
        <CartContext.Provider value= {[cartList, deleteFromCart, addProduct, emptyCart, totalPrice, cartWidget ]}>
            <h1>Hola</h1>
         [ {children} ]   
        </CartContext.Provider>
    )
}

export default CartContextProvider