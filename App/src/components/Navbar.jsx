import '../assets/css/home.css'
import image from '../assets/img/T&F.png'


const Navbar = () => {
    return (
        <nav className='Navbar'>
            <div className='Navbar_logo'>
                <img className='Logo' src={image} alt="" />
            </div>
            <div className='navbar-collapse'>
                <ul className='navbar-nav'>
                    <li className='nav-item'><a href="">Nosotros</a></li>
                    <li className='nav-item'><a href="">Servicios</a></li>
                    <li className='nav-item'><a href="">Productos</a></li>
                    <li className='nav-item'><a href="">PQr</a></li>
                    <li className='nav-item'><a href="">Contactenos</a></li>
                </ul>
            </div>
        </nav>
    )
}


export default Navbar 