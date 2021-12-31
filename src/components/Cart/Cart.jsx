import { useCartContext } from '../../Context/CartContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import 'firebase/firestore';
import getFirestore from '../../Firebase/firebase';

function Cart () {

    const [orderId, setOrderId] = useState('');

    const {cartList, emptyCart, deleteFromCart, totalPrice} = useCartContext();

    const [formData, setFormData] = useState({name:'', phone:'', email: ''
    });

    const newOrder = (e) => {
        e.preventDefault();

        const order = {};
        order.date = firebase.firestore.Timestamp.fromDate(new Date());
        order.buyer = formData;
        order.total = totalPrice();
        order.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const name = cartItem.name;
            const price = cartItem.price * cartItem.cantidad;
            return {id, name, price}
        })

        const db= getFirestore();
        db.collection('orders')
        .add(order)
        .then(resp => setOrderId(resp.id))
        .catch(err => console.log(err))
        .finally(() => {
            emptyCart();
            setFormData({name:'', phone:'', email:''})
        })

        const updateStock = db.collection('productos')
        .where(firebase.firestore.FieldPath.documentId() , 'in' , cartList.map(i => i.id))

        const batch = db.batch();

        updateStock.get()
        .then( collection =>{
            collection.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref, {
                    stock: docSnapshot.data().stock - cartList.find(item => item.id).cantidad
                })
            })
            batch.commit().then(res => {
                res(console.log('Firebase actualizado'))
            })
        })

        console.log(order)
    }
    const handleChange=(e)=>{
        setFormData(
            {...formData, [e.target.name]: e.target.value}
        )
    }

    return (
        <div>
            <h1>Mi carrito</h1>
            {cartList.length === 0 ?
                <div>
                    <h2>Su carrito se encuentra vacío</h2>
                    <Link to='/'>Seguir Comprando</Link>
                </div>
            :  
                <section>
                    {orderId!==''&& <label>El localizador de su orden es: {orderId}</label>}

                    { cartList.map(prod =>
                        <div key={prod.id}>
                            <img style={{width: '50px'}} src={prod.imgUrl} alt='Foto producto' />{' '}
                            <li key={prod.id}> 
                            {prod.name} Cantidad: {prod.cantidad} </li>
                            <button onClick={()=>deleteFromCart(prod)} > X </button>
                        </div>
                    )}
                    {`Precio total: ${totalPrice()}`}
                    <button onClick={()=> emptyCart()}>Vaciar carrito</button>
                    <div>
                        <form onSubmit={newOrder} onChange={handleChange}>
                            <h3>Formulario de contacto</h3>
                            <input type='text' name='name' placeholder='Escribe tu nombre y apellido' value={formData.name}/>
                            <input type='text' name='phone' placeholder='Teléfono' value={formData.phone}/>
                            <input type='email' name='email' placeholder='Correo electrónico' value={formData.email}/>
                            <input type='email' name='email' placeholder='Confirmar correo electrónico' value={formData.email}/>
                            <button>Enviar</button>
                        </form>
                    </div>
                </section>
            }
        </div>
    )
}

export default Cart
