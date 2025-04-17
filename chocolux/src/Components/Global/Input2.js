import { useState } from 'react';
import styles from './Input2.module.css';

function Input2() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    mensagem: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.nome.trim()) newErrors.nome = 'Nome é obrigatório';
    if (!formData.telefone.trim()) newErrors.telefone = 'Telefone é obrigatório';
    else if (!/^\d{9,15}$/.test(formData.telefone)) newErrors.telefone = 'Telefone inválido';
    if (!formData.email.trim()) newErrors.email = 'Email é obrigatório';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email inválido';
    if (!formData.mensagem.trim()) newErrors.mensagem = 'Mensagem é obrigatória';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Formulário enviado com sucesso!');
      setFormData({ nome: '', telefone: '', email: '', mensagem: '' });
      setErrors({});
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label>Nome completo</label>
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Digite seu nome completo"
        />
        {errors.nome && <span className={styles.error}>{errors.nome}</span>}
      </div>

      <div className={styles.formGroup}>
        <label>Telefone</label>
        <input
          type="text"
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
          placeholder="Ex: 934567890"
        />
        {errors.telefone && <span className={styles.error}>{errors.telefone}</span>}
      </div>

      <div className={styles.formGroup}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Ex: exemplo@email.com"
        />
        {errors.email && <span className={styles.error}>{errors.email}</span>}
      </div>

      <div className={styles.formGroup}>
        <label>Mensagem</label>
        <textarea
          name="mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          placeholder="Escreva sua mensagem aqui..."
        ></textarea>
        {errors.mensagem && <span className={styles.error}>{errors.mensagem}</span>}
      </div>

      <button type="submit" className={styles.button}>Enviar</button>
    </form>
  );
}

export default Input2;
