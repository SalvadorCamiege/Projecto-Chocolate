import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Leyouts/NavBar';

// Páginas do site
import Home from './Components/Pages/Home';
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
          </Routes>
        </Conteiner>
      </Router>
    </div>
  );
}

export default App;
