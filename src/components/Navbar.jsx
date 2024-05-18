import React, { useState } from 'react';
import './styles/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar({style}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
      <div className="main">
        <Link to="/auth" >Autenticacion</Link>
      </div>
    </header>
  );
}

export default Navbar;
