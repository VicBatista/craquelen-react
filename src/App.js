import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContextProvider from './Context/CartContext';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route path="categoria/:catIdParams" element={<ItemListContainer />} />
          <Route path="item/:itemIdParams" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />        
        </ Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
