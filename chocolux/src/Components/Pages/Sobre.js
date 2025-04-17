import styles from './Sobre.module.css';
import sobreimg from '../../img/Abaut/about-img.png';


function Sobre() {
    return(
        <div className={styles.Sobre}>
            <div>
                 <h1>Sobre nossa empresa</h1>
                 <p>A Chocolux é uma empresa apaixonada por transformar momentos simples em experiências inesquecíveis através do sabor único de seus chocolates. Combinando tradição, qualidade e inovação, oferecemos uma linha especial de produtos feitos com os melhores ingredientes, garantindo textura cremosa.</p>
            </div>

            <div>
                 <img src={sobreimg} alt="sobre" />
            </div>
       </div>
    )
}

export default Sobre;