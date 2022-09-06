import './App.css';
import NavBar from './componets/NavBar';
import ItemListConteiner from '../src/container/ItemListContainer';
import { data } from './utils/data';
import ItemDetailConteiner from './componets/ItemDetailConteiner';


function App() {
  return (
   <>
   <NavBar/>
  <ItemDetail/>
   </>
    );
}

export default App;
