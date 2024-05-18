
import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (

    <section id='contact' className='contact-section' >
      <div className="container-form">
        <div className="info-form">
          <h2>Contacto</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui eligendi est voluptates quae ipsam eius, in quasi odio porro aut vel beatae aperiam.</p>
          <a href="#"><i className="fa fa-phone"></i> 123-456-789</a>
          <a href="#"><i className="fa fa-envelope"></i> email@email.com</a>
          <a href="#"><i className="fa fa-map-marked"></i> Ciudad, Pais</a>
        </div>
        <form action="#" autoComplete="off" >
          <input type="text" name="nombre" placeholder="Tu Nombre" className="campo" />
          <input type="emal" name="email" placeholder="Tu Email" className="campo" />
          <textarea name="mensaje" placeholder="Tu Mensaje..."></textarea>
          <input type="submit" name="enviar" value="Enviar Mensaje" className="btn-enviar" />
        </form>
      </div>
    </section>

  );
}

export default Contact;
