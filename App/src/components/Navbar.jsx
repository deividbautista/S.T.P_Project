import '../assets/css/home.css';
import image from '../assets/img/T&F.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUsersViewfinder, faBriefcase, faBox, faEnvelope, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState, useCallback } from 'react';

const Navbar = () => {
  const navbarRef = useRef(null);
  const horiSelectorRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isContactActive, setIsContactActive] = useState(false);

  // Función para actualizar la posición y tamaño del hori-selector
  const updateHoriSelector = useCallback((activeItem) => {
    if (horiSelectorRef.current && activeItem) {
      const { offsetTop, offsetLeft, offsetHeight, offsetWidth } = activeItem;
      horiSelectorRef.current.style.top = `${offsetTop + offsetHeight}px`;
      horiSelectorRef.current.style.left = `${offsetLeft}px`;
      horiSelectorRef.current.style.width = `${offsetWidth}px`;
    }
  }, []);

  // Inicializar el hori-selector
  const initHoriSelector = useCallback(() => {
    const activeItem = navbarRef.current?.querySelectorAll('.Nav_item')[activeIndex];
    if (activeItem) {
      updateHoriSelector(activeItem);
    }
  }, [activeIndex, updateHoriSelector]);

  // Manejar clic en un elemento de navegación
  const handleNavItemClick = (index) => {
    setActiveIndex(index);
    setIsContactActive(index === 3); // Solo activa el ícono alternativo para el índice 3 (Contactenos)
  };

  // Recalcular el selector en la inicialización y redimensionamiento
  useEffect(() => {
    initHoriSelector();
    window.addEventListener('resize', initHoriSelector);

    return () => {
      window.removeEventListener('resize', initHoriSelector);
    };
  }, [initHoriSelector]);

  const navItems = [
    { id: 1, name: 'Nosotros', icon: faUsersViewfinder },
    { id: 2, name: 'Servicios', icon: faBriefcase },
    { id: 3, name: 'Productos', icon: faBox },
    { id: 4, name: 'Contactenos', icon: faEnvelope, activeIcon: faEnvelopeOpen },
  ];

  return (
    <nav className="Navbar">
      <div className="Navbar_logo">
        <img className="Logo" src={image} alt="Logo" />
      </div>
      <button
        className="Navbar_toggler"
        onClick={() => navbarRef.current?.classList.toggle('show')}
      >
        <FontAwesomeIcon className="Icono_bar" icon={faBars} />
      </button>
      <div className="Navbar_collapse" ref={navbarRef}>
        <div className="Hori_selector" ref={horiSelectorRef}></div>
        <ul className="Navbar_nav">
          {navItems.map((item, index) => (
            <li
              key={item.id}
              className={`Nav_item ${index === activeIndex ? 'active' : ''}`}
              onClick={() => handleNavItemClick(index)}
            >
              <FontAwesomeIcon
                className={`Nav_icon ${index === activeIndex ? 'active' : ''}`}
                icon={
                  index === 3 && isContactActive // Para Contactenos
                    ? item.activeIcon
                    : item.icon // Para otros íconos o Contactenos inactivo
                }
              />
              <a href="#">{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
