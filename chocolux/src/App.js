import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Leyouts/NavBar';
import Rodape from './Components/Leyouts/Rodape';

// Páginas do site
import Home from './Components/Pages/Home';
import Sobre from './Components/Pages/Sobre';
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
          </Routes>
        </Conteiner>
        <Rodape/>
      </Router>
    </div>
  );
}

export default App;
