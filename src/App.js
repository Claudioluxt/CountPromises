import './App.css';
import NavBar from './componets/NavBar';
import ItemListConteiner from './componets/ItemListConteiner';
import { data } from './utils/data';

function App() {
  return (
   <>
   <NavBar/>
   <ItemListConteiner items ={data}/>
   </>
    );
}

export default App;
