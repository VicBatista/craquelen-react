import { useCartContext } from '../../Context/CartContext';

function Cart () {

    const {cartList, vaciarCart} = useCartContext();

    return (
        <div>
            { cartList.map(prod => <li key={prod.id}> {prod.name} Cantidad: {prod.cantidad} </li>) }
            <button onClick={()=> vaciarCart()}>Vaciar carrito</button>
        </div>
    )
}

export default Cart
