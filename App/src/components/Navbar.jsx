import '../assets/css/home.css'
import image from '../assets/img/T&F.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
    const navbarRef = useRef(null);
    const horiSelectorRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
  
    // Función para actualizar la posición y tamaño del hori-selector
    const updateHoriSelector = (activeItem) => {
      if (horiSelectorRef.current && activeItem) {
        const { offsetTop, offsetLeft, offsetHeight, offsetWidth } = activeItem;
        horiSelectorRef.current.style.top = `${offsetTop + offsetHeight}px`;
        horiSelectorRef.current.style.left = `${offsetLeft}px`;
        horiSelectorRef.current.style.width = `${offsetWidth}px`;
      }
    };
  
    // Inicializar el hori-selector
    const initHoriSelector = () => {
      const activeItem = navbarRef.current?.querySelectorAll(".nav-item")[activeIndex];
      if (activeItem) {
        updateHoriSelector(activeItem);
        console.log("perro")
      }
    };
  
    // Manejar clic en un elemento de navegación
    const handleNavItemClick = (index) => {
      setActiveIndex(index);
    };
  
    // Recalcular el selector en la inicialización y redimensionamiento
    useEffect(() => {
      initHoriSelector();
      window.addEventListener("resize", initHoriSelector);
  
      return () => {
        window.removeEventListener("resize", initHoriSelector);
      };
    },[activeIndex]);
  
    return (
      <nav className="Navbar">
        <div className="Navbar_logo">
          <img className="Logo" src={image} alt="Logo" />
        </div>
        <button
          className="Navbar_toggler"
          onClick={() => navbarRef.current?.classList.toggle("show")}
        >
          <FontAwesomeIcon className="Icono_bar" icon={faBars} />
        </button>
        <div className="navbar-collapse" ref={navbarRef}>
          <div className="hori-selector" ref={horiSelectorRef}></div> 
          <ul className="navbar-nav">
            {["Nosotros", "Servicios", "Productos", "Contactenos"].map((item, index) => (
              <li
                key={index}
                className={`nav-item ${index === activeIndex ? "active" : ""}`}
                onClick={() => handleNavItemClick(index)}
              >
                {/* <FontAwesomeIcon className="icono-bar" icon={faUsersViewfinder} /> */}
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  };


export default Navbar 