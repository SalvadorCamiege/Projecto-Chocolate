import { useState, useEffect } from 'react';
import affterimg from '../../img/Slider/offer-img.png';
import styles from './Home.module.css';
import Sobre from './Sobre';
import Chocolate from './Chocolate';
import Depoimentos from './Depoimento';
import Contacto from './Contacto';
import Button from '../Global/Button';


import slide1 from '../../img/Slider/slider-img.png';
import slide2 from '../../img/Slider/slider-img.png';
import slide3 from '../../img/Slider/slider-img.png';

function Home() {
  const slides = [
        {
            title: 'Chocolate Gostoso',
            image: slide1,
        },
        {
            title: 'Sabor Incrível',
            image: slide2,
        },
        {
            title: 'Experimente!',
            image: slide3,
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    // Função para alternar para o próximo slide
    const handleNext = () => {
       setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    // Função para alternar para o slide anterior
    const handlePrev = () => {
       setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    // Lógica para navegação automática
   useEffect(() => {
       const intervalId = setInterval(handleNext, 4000); // Mudar a cada 3 segundos

       return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <section className={styles.Home}>
                <div className={styles.textSlide}>
                    <h1>{slides[currentSlide].title}</h1>
                </div>

                <div className={styles.imageSlide}>
                    <img src={slides[currentSlide].image} alt="slide" />
                </div>
            </section>

            <section>
                <Sobre/>
            </section>

            <section>
                <Chocolate/>
            </section>

            <section className={styles.compras}>
                 <div>
                    <h1>Ofetas em Chocolates</h1>
                    <p>Ganha 5% de desconto em qualquer item de Chocolate</p>
                    <Button/>
                 </div>
                 <img src={affterimg} alt="affter" />
            </section>

            <section>
                <Depoimentos/>
            </section>

            <section>
                <Contacto/>
            </section>

        </>
   
    );
 }

export default Home;