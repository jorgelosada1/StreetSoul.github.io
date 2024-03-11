import React from 'react';
import '../Sass/Carta.scss';
import { TiShoppingCart } from "react-icons/ti";

const Carta = (props) => {
    const mensajeWhatsapp = encodeURIComponent("Hola, buenas tardes. ¿Podrías ayudarme con esta prenda?");
    const urlWhatsapp = `https://wa.me/qr/X6SKM6SDM4CAB1?text=${mensajeWhatsapp}`;

    return (
        <div className='Carta'>
            <img src={props.imagenUrl} alt="Imagen de carta" className='Carta__img' />
            <div className='Carta__titulo'>Hermosa Camiseta Talla:</div>
            <div className='Carta__talla'>{props.talla}</div>
            <div className='Carta__precio'>{props.precio}</div>
            <a href={urlWhatsapp} target="_blank" rel="noopener noreferrer" className='Contenedor__whatsapp'>
                <TiShoppingCart className='Carta__carrito' />
            </a>
        </div>
    );
}

export { Carta };
