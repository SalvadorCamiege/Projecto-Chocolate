import { useState } from 'react';
import styles from './Input.module.css';

function Input() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    // Regex simples para verificar formato de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setError('Por favor, preencha o e-mail.');
    } else if (!emailRegex.test(email)) {
      setError('E-mail inválido.');
    } else {
      setError('');
      alert(`E-mail enviado com sucesso: ${email}`);
      setEmail(''); // limpa o campo após envio
    }
  };

  return (
    <div className={styles.inputWrapper}>
      <input
        type="email"
        className={styles.inputEmail}
        placeholder="Digite seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className={styles.sendButton}
        type="button"
        onClick={handleSubmit}
      >
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

      {/* Exibe erro, se existir */}
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
}

export default Input;