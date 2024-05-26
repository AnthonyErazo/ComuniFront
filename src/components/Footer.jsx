import React, { useEffect } from 'react'
import './styles/Footer.css'

function Footer() {
  // Animacion al momento de visualizar el footer
  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animation-slide-in-bottom');
          entry.target.classList.remove('animation-slide-in-up');
        } else {
          entry.target.classList.remove('animation-slide-in-bottom');
          entry.target.classList.add('animation-slide-in-up');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    });

    const elementsToObserve = document.querySelectorAll(
      ".footer-text"
    );
    elementsToObserve.forEach((element) => observer.observe(element));

    return () => {
      elementsToObserve.forEach((element) => observer.unobserve(element));
    };
  }, []);
  // Footer
  return (
    <footer >
      <p className='footer-text'>&copy; 2024 UNIFIIS - Comunidad Estudiantil</p>
    </footer>
  )
}

export default Footer
