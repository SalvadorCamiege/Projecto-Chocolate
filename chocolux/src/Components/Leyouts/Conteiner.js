import styles from './Conteiner.module.css';

function Conteiner(props) {
    return (
        <div className={`${styles.Conteiner} ${props.customclass ? styles[props.customclass] : ''}`}>
            {props.children}
        </div>
    );
}

export default Conteiner;