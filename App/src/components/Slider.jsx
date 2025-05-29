// import {fafaArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';

// const slides = [
//     {
//         title: 'Imagen 1',
//         description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi unde nesciunt ipsum accusamus fugiat deserunt aliquid neque? Corporis iure neque, earum assumenda impedit minima dicta accusantium culpa molestiae fugiat inventore!',
//         image: 'https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg'
//     },

//     {
//         title: 'Imagen 2',
//         description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi unde nesciunt ipsum accusamus fugiat deserunt aliquid neque? Corporis iure neque, earum assumenda impedit minima dicta accusantium culpa molestiae fugiat inventore!',
//         image: 'https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg'
//     },

//     {
//         title: 'Imagen 3',
//         description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi unde nesciunt ipsum accusamus fugiat deserunt aliquid neque? Corporis iure neque, earum assumenda impedit minima dicta accusantium culpa molestiae fugiat inventore!',
//         image: 'https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg'
//     }
// ];

// const Slider = () => {
//     const [currentIndex, setCurrentIndex] = useState (0);
//     const nextSlider = () => {
//         setCurrentIndex ((prevIndex) => (prevIndex + 1) % slides.length);
//     };
//     const prevSlider = () => {
//         setCurrentIndex ((prevIndex) => (prevIndex - 1 + slider.length) % slides.length);
//     };
//     return (
//         <main className='Slider_container'>
//             <ul className='Slider'>
//                 {slides.map ((slide, index) => (
//                     <li 
//                         key={index}
//                         className={`item ${index === currentIndex ? 'active' : ''}`}
//                         style={{backgroundImage: `url(${slide.image})`}}
//                     >
//                         <div className='Content'></div>
//                         <h2 className='Title'>{slide.title}</h2>
//                         <p className='Description'>{slide.description}</p>
//                         <button> read more </button>
//                     </li>
//                 ))}
//             </ul>
//             <nav className='Nav'>
//                 <button className='Btn_prev' onClick={prevSlider}></button>
//                 <button className='Btn_next' onClick={nextSlider}></button>
//             </nav>
//         </main>
//     )
// }

// export default Slider;

// src/components/Slider.jsx

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/Slider.css';

const slides = [
  {
    title: 'Imagen 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi unde nesciunt ipsum accusamus fugiat deserunt aliquid neque?',
    image: 'https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg',
  },
  {
    title: 'Imagen 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi unde nesciunt ipsum accusamus fugiat deserunt aliquid neque?',
    image: 'https://i.pinimg.com/custom_covers/222x/305470855914997020_1585788972.jpg',
  },
  {
    title: 'Imagen 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi unde nesciunt ipsum accusamus fugiat deserunt aliquid neque?',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLL7Cjo5skzbLOMv254u7anGuXN5sOQaweRQ&s',
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

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
              <button className="read-more">Leer más</button>
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
