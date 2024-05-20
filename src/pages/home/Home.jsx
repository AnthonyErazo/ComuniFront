import React, { useEffect } from "react";
import Questions from "./components/Questions";
import Groups from "./components/Groups";
import Contact from "./components/Contact";
import "./styles/Home.css";

function Home() {
    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    console.log(`Element ${entry.target.className} is in view`);
                } else {
                    console.log(`Element ${entry.target.className} is out of view`);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: "0px",
            threshold: 0.8,
        });

        const elementsToObserve = document.querySelectorAll(
            ".content"
        );
        elementsToObserve.forEach((element) => observer.observe(element));

        return () => {
            elementsToObserve.forEach((element) => observer.unobserve(element));
        };
    }, []);
    return (
        <div>
            <section id="inicio" className="section parallax">
                <div className="content">
                    <h1>Bienvenido a COMUNI</h1>
                    <p>
                        UNIFIIS es una plataforma que te ayuda a descubrir y conectarte con
                        los grupos estudiantiles de tu universidad. Aquí podrás encontrar
                        información sobre los objetivos, actividades, requisitos y datos de
                        contacto de cada grupo. También podrás unirte a los grupos que te
                        interesen y participar en su comunidad.
                    </p>
                    <a href="#groups" className="btn">
                        Explorar Grupos
                    </a>
                </div>
            </section>
            <Groups />
            <section className="section parallax">
                <Questions />
            </section>
            <Contact />
        </div>
    );
}

export default Home;
