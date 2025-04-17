import { useState } from 'react';
import depoimg from '../../img/Clientes/client-chocolate.png';
import clienteimg from '../../img/Clientes/client-img.jpg';
import styles from './Depoimento.module.css'; // CSS Module

const depoimentos = [
  {
    nome: 'Zara Wilian',
    imagem: clienteimg,
    texto:
      'Os depoimentos dos clientes sobre a ChocoLux são uma verdadeira prova do carinho e da excelência que envolvem cada produto. Muitos destacam a qualidade incomparável dos chocolates, elogiando o sabor intenso, a textura suave e a apresentação sofisticada.',
  },
  {
    nome: 'Salvador Camiege',
    imagem: clienteimg,
    texto:
      'Comprei para o aniversário da minha mãe e ela ficou encantada! O atendimento foi impecável e os chocolates estavam deliciosos. ChocoLux virou minha primeira opção para presentear, a textura suave e a apresentação sofisticada.',
  },
  {
    nome: 'Cardoso Cuaia',
    imagem: clienteimg,
    texto:
      'Simplesmente perfeito! Desde a embalagem até o sabor, tudo é feito com muito capricho. Recomendo demais a experiência ChocoLux,  os chocolates estavam deliciosos. ChocoLux virou minha primeira opção para presentear, a textura suave e a apresentação sofisticada.',
  },
];

function Depoimentos() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex(index === 0 ? depoimentos.length - 1 : index - 1);
  const next = () => setIndex(index === depoimentos.length - 1 ? 0 : index + 1);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.depoimentoBox}>
          <h1 className={styles.title}>Depoimentos</h1>
          <div className={styles.card}>
            <img src={depoimentos[index].imagem} alt={depoimentos[index].nome} className={styles.clientImg} />
            <div className={styles.info}>
              <h2>{depoimentos[index].nome}</h2>
              <p>{depoimentos[index].texto}</p>
            </div>
          </div>
        </div>

        <div className={styles.imageBox}>
          <img src={depoimg} alt="chocolate decorativo" className={styles.chocoImg} />
        </div>
      </div>

      <div className={styles.arrows}>
        <button onClick={prev}>&#8592;</button>
        <button onClick={next}>&#8594;</button>
      </div>
    </div>
  );
}

export default Depoimentos;