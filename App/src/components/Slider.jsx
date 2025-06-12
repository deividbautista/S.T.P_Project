import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/Slider.css';

const slides = [
  {
    title: 'Desarrollo de soluciones tecnologicas.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi unde nesciunt ipsum accusamus fugiat deserunt aliquid neque?',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Mantenimiento de hardware.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi unde nesciunt ipsum accusamus fugiat deserunt aliquid neque?',
    image: 'https://images.unsplash.com/photo-1505424297051-c3ad50b055ae?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Manejo he instalación de redes.',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi unde nesciunt ipsum accusamus fugiat deserunt aliquid neque?',
    image: 'https://images.unsplash.com/photo-1506399309177-3b43e99fead2?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  // 🔁 Reinicia el temporizador cada vez que cambia currentIndex
  useEffect(() => {
    // Limpiar timeout anterior
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Crear nuevo timeout que cambia al siguiente slide
    timeoutRef.current = setTimeout(() => {
      goToNext();
    }, 10000);

    // Limpiar timeout si se desmonta el componente
    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex]);

  return (
    <main className="slider-container">
      <ul className="slider">
        {slides.map((slide, index) => (
          <li
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="content">
              <h2 className="title">{slide.title}</h2>
              <p className="description">{slide.description}</p>
              <button className="read-more">Ver más</button>
            </div>
          </li>
        ))}
      </ul>

      <nav className="navigation">
        <button className="nav-btn-l" onClick={goToPrev}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button className="nav-btn-r" onClick={goToNext}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </nav>
    </main>
  );
};

export default Slider;
