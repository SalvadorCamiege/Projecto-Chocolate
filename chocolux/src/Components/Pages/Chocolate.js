import { useRef } from 'react';
import styles from './Chocolate.module.css';
import slide1 from '../../img/Chocolate/chocolate1.png';
import slide2 from '../../img/Chocolate/chocolate2.png';
import slide3 from '../../img/Chocolate/chocolate3.png';

function Chocolate() {
    const chocolates = [
        { img: slide1, nome: 'Chocolate ao Leite', preco: 'R$ 12,90' },
        { img: slide2, nome: 'Chocolate Amargo', preco: 'R$ 14,50' },
        { img: slide3, nome: 'Chocolate Branco', preco: 'R$ 13,20' },
        { img: slide1, nome: 'Chocolate Recheado', preco: 'R$ 15,90' },
        { img: slide2, nome: 'Chocolate com Castanhas', preco: 'R$ 16,50' },
        { img: slide3, nome: 'ChocoMix Sortido', preco: 'R$ 18,00' },
    ];

    

    const sliderRef = useRef(null);
    const intervalRef = useRef(null);

    const scroll = (direction) => {
        const scrollAmount = 400;

        // Inicia o intervalo de rolagem contínua
        if (direction === 'left') {
            if (intervalRef.current) clearInterval(intervalRef.current);
            intervalRef.current = setInterval(() => {
                sliderRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            }, 10);
        } else {
            if (intervalRef.current) clearInterval(intervalRef.current);
            intervalRef.current = setInterval(() => {
                sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }, 10);
        }
    };

    const stopScroll = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
    };

    return (
        <div className={styles.chocolateSection}>
            <h1 className={styles.h1}>Nossos Produtos de Chocolates</h1>
            <p className={styles.p}>
                Na ChocoLux, oferecemos chocolates artesanais de alta qualidade, feitos com os
                melhores ingredientes e um toque de sofisticação.
            </p>

            <div className={styles.sliderContainer}>
                <div className={styles.chocolateSliderWrapper}>
                    <div className={styles.chocolateSlider} ref={sliderRef}>
                        {chocolates.map((item, index) => (
                            <div key={index} className={styles.chocolateCard}>
                                <img src={item.img} alt={item.nome} />
                                <div className={styles.hoverInfo}>
                                    <h3>{item.nome}</h3>
                                    <p>{item.preco}</p>
                                    <button>Compra Agora</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.arrowsBottom}>
                    <button
                        onMouseDown={() => scroll('left')}
                        onMouseUp={stopScroll}
                        onMouseLeave={stopScroll}
                        className={styles.arrow}
                    >
                        &#10094;
                    </button>
                    <button
                        onMouseDown={() => scroll('right')}
                        onMouseUp={stopScroll}
                        onMouseLeave={stopScroll}
                        className={styles.arrow}
                    >
                        &#10095;
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Chocolate;