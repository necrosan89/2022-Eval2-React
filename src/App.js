import './App.css';
import { Menu } from './composant/Menu';
import { Acceuil } from './composant/Acceuil';
import { Panier } from './composant/Panier';
import { BonCde } from './composant/BonCde';
import { Route , Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return<div>
    <Menu />
         <div>
           <Routes>
             <Route path="/" element={<Acceuil />} />
             <Route path="/panier" element={<Panier />} />
             <Route path="/boncde" element={<BonCde />} />
           </Routes>
         </div>
  </div>
}

export default App;
