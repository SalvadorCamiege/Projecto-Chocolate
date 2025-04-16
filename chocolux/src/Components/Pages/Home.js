import { useState, useEffect } from 'react';
import styles from './Home.module.css';
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
        <section className={styles.Home}>
           <div className={styles.textSlide}>
               <h1>{slides[currentSlide].title}</h1>
           </div>

           <div className={styles.imageSlide}>
              <img src={slides[currentSlide].image} alt="slide" />
           </div>
        </section>
   
    );
 }

export default Home;