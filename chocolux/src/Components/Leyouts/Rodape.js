import styles from './Rodape.module.css';
import Input from '../Global/Input';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';

function Rodape() {
    return (
        <div className={styles.Rodape}>
            <div className={styles.leftContent}>
                {/* Input e redes sociais lado a lado */}
                <div className={styles.inputSocialContainer}>
                    <Input />

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

                {/* Menu e colunas lado a lado */}
                <div className={styles.menuAndColumns}>
                    <div className={styles.navBar}>
                        <h1 className={styles.h1}>Menu</h1>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/Sobre">Sobre</a></li>
                            <li><a href="/Chocolate">Chocolates</a></li>
                            <li><a href="/Depoimento">Depoimentos</a></li>
                            <li><a href="/Contacto">Contatos-nos</a></li>
                        </ul>
                    </div>

                    <div className={styles.columnsContainer}>
                        <div className={styles.column}>
                            <h1 className={styles.h1}>Produtos</h1>
                            <ul>
                                <li><a href="#">Chocolate ao Leite</a></li>
                                <li><a href="#">Chocolate Amargo</a></li>
                                <li><a href="#">Bombons</a></li>
                            </ul>
                        </div>
                        <div className={styles.column}>
                            <h1 className={styles.h1}>Empresa</h1>
                            <ul>
                                <li><a href="#">Quem somos</a></li>
                                <li><a href="#">Missão</a></li>
                                <li><a href="#">Visão</a></li>
                            </ul>
                        </div>
                        <div className={styles.column}>
                            <h1 className={styles.h1}>Atendimento</h1>
                            <ul>
                                <li><a href="#">Fale Conosco</a></li>
                                <li><a href="#">Suporte</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rodape;