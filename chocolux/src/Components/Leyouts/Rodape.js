import styles from './Rodape.module.css';
import Input from '../Global/Input';

import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';

function Rodape() {
    return (
        <div className={styles.Rodape}>
            <div className={styles.leftContent}>
                <Input />

                {/* Redes sociais ao lado do input */}
                <ul className={styles.socialList}>
                    <li>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className={styles.icon} />
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn className={styles.icon} />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <FaGithub className={styles.icon} />
                        </a>
                    </li>
                </ul>
            </div>
            
            {/* Menu de Navegação (NavBar) abaixo do input */}
            <div className={styles.navBar}>
                
                <ul>
                    <h1>Menu</h1>
                    <li><a href="/">Home</a></li>
                    <li><a href="/Sobre">Sobre</a></li>
                    <li><a href="/Contatos">Chocolates</a></li>
                    <li><a href="/Contatos">Depoimentos</a></li>
                    <li><a href="/Contatos">Contatos-nos</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Rodape;