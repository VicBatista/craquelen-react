import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App(greetings) {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greetings="Bienvenid@!"/>
    </div>
  );
}

export default App;
