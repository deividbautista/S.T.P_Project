import '../assets/css/home.css'
import image from '../assets/img/T&F.png'


const Navbar = () => {
    return (
        <nav className='Navbar'>
            <div className='Navbar_logo'>   
                <img className='Logo' src={image} alt="" />
            </div>
            <p>Cristian chupon</p>
        </nav>                  
    )
}


export default Navbar 