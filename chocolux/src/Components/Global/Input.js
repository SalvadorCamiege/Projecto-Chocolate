import styles from './Input.module.css';

function Input() {
  return (
    <div className={styles.inputWrapper}>
      <input
        type="email"
        className={styles.inputEmail}
        placeholder="Digite seu email"
      />
      <button className={styles.sendButton}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.icon}
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </button>
    </div>
  );
}

export default Input;