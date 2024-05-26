import React, { useState } from 'react';
import './styles/Navbar.css';

function Navbar({style}) {

  // Acciones para menu responsive
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Barra de navegacion
  return (
    <header style={style}>
      <a href='/#inicio' className='title-page'>COMUNI</a>
      <div className=''>
        <ul className='navbar'>
          <li><a href="/#inicio" onClick={toggleMenu}>Inicio</a></li>
          <li><a href="/#groups" onClick={toggleMenu}>Grupos</a></li>
          <li><a href="/#questions" onClick={toggleMenu}>Preguntas Frecuentes</a></li>
          <li><a href="/#contact" onClick={toggleMenu}>Contacto</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
