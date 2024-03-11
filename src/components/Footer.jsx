import '../Sass/footer.scss'
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Logo from '../img/Logo.png';
const Footer = () => {
    return (
        <div className='Contenedor'>
            
            <div className='Contenedor__logo'>
                <img src={Logo} className='Contenedor__img' alt="Logo" />
                <div className='Contenedor__gmail'>streetsoul0603@gmail.com</div>
            </div>
            <div className='Contenedor__izquierda'>
                <div className='Contenedor__titulo'>Redes Sociales</div>
                <div className="Contenedor__contactos">
                    <a href="https://wa.me/qr/X6SKM6SDM4CAB1" target="_blank" rel="noopener noreferrer" className='Contenedor__whatsapp'>
                        <FaWhatsapp />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61556826192646" target="_blank" rel="noopener noreferrer" className='Contenedor__facebook'>
                        <FaFacebookF />
                    </a>
                    <a href="https://www.tiktok.com/@street.soul77" target="_blank" rel="noopener noreferrer" className='Contenedor__tiktok'>
                        <FaTiktok />
                    </a>
                    <a href="https://www.instagram.com/street.soul11?igsh=MW15cmc1NXBzamI4bg==" target="_blank" rel="noopener noreferrer" className='Contenedor__instagram'>
                        <FaInstagram />
                    </a>
                </div>
              
            </div>
            
        </div>
    )
}

export { Footer }
