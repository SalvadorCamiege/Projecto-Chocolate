import {Link} from 'react-router-dom';
import { FaSearch, FaUser } from 'react-icons/fa';

import styles from './NavBar.module.css';
import Conteiner from "./Conteiner";


function NavBar() {
    return(
        <div className={styles.Geral}>
            <nav className={styles.NavBar}>
                <Conteiner>
                    <Link  to="/" className={styles['titulo-link']}>
                         <h1 className={styles.titulo}>Chocolux</h1>  
                    </Link> 

                    <ul className={styles.list}>
                       <li className={styles.item}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/sobre">Sobre</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/">Chocolates</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/">Depoimentos</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/">Contata-Nos</Link>
                        </li>

                       <li className={styles.item}>
                           <Link to="/pesquisa">
                               <FaSearch size={20} />
                           </Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/login">
                                <FaUser size={20} />
                            </Link>
                        </li>
                    </ul>
                </Conteiner>  
            </nav>        
        </div>
    );
    
}

export default  NavBar;