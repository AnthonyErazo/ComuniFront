
import React, { useEffect } from 'react';
import '../styles/Contact.css';

function Contact() {
  // Animacion al momento de visualizar la seccion contacto
  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.className.includes('info-form')) {
            entry.target.classList.remove('animation-slide-out-left');
            entry.target.classList.add('animation-slide-in-left');

          } else {
            entry.target.classList.remove('animation-slide-out-right');
            entry.target.classList.add('animation-slide-in-right');
          }
        } else {
          if (entry.target.className.includes('info-form')) {
            entry.target.classList.add('animation-slide-out-left');
            entry.target.classList.remove('animation-slide-in-left');

          } else {
            entry.target.classList.add('animation-slide-out-right');
            entry.target.classList.remove('animation-slide-in-right');
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    });

    const infoFormElemnt = document.querySelectorAll('.info-form');
    const formContactElemnt = document.querySelectorAll('.form-contact');
    const elementsToObserve = [...infoFormElemnt, ...formContactElemnt];
    elementsToObserve.forEach((element) => observer.observe(element));

    return () => {
      elementsToObserve.forEach((element) => observer.unobserve(element));
    };
  }, []);
  // Seccion de contacto
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
        <form className='form-contact' action="#" autoComplete="off" >
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
