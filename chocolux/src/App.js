import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Leyouts/NavBar';
import Rodape from './Components/Leyouts/Rodape';

// Páginas do site
import Home from './Components/Pages/Home';
import Sobre from './Components/Pages/Sobre';
import Chocolate from './Components/Pages/Chocolate';
import Depoimentos from './Components/Pages/Depoimento';
import Contacto from './Components/Pages/Contacto';
// Fim das páginas do site

import Conteiner from './Components/Leyouts/Conteiner';

function App() {
  return (
    <div className="site">
      <Router>
         <NavBar/>
         <Conteiner customClass="minHeight">
          <Routes>
             <Route path='/' element={<Home />} />
             <Route path='/sobre' element={<Sobre />} />
             <Route path='/chocolate' element={<Chocolate />} />
             <Route path='/depoimento' element={<Depoimentos />} />
             <Route path='/contacto' element={<Contacto />} />
          </Routes>
        </Conteiner>
        <Rodape/>
      </Router>
    </div>
  );
}

export default App;
