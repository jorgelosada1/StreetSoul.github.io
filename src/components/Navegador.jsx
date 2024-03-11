import React from 'react';
import '../Sass/Navegador.scss';
import Logo from '../img/Logo.png'; 

const Navegador = () => {
  return (
    <div className='Container'>
        <img src={Logo} className='Container__img' alt="Logo" /> 
        <div className='Container__sexo'>
        <div className='Container__inicio'>Inicio</div>
        <div className='Container__contacto'>Contacto</div>
        </div>
    </div>
  )
}

export { Navegador };
