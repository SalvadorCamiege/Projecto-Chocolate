import Input2 from "../Global/Input2";
import sobreimg from '../../img/Abaut/about-img.png';
import styles from './Contacto.module.css';

function Contacto() {
    return (
        <div className={styles.contactoContainer}>
            <div className={styles.formBox}>
                <Input2 />
            </div>

            <div className={styles.imageBox}>
                <img src={sobreimg} alt="sobre" />
            </div>
        </div>
    );
}

export default Contacto;