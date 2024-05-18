import React from 'react';
import Questions from './components/Questions';
import Groups from './components/Groups';
import Contact from './components/Contact';
import './styles/Home.css';

function Home() {
    return (
        <div>
            <section id="inicio" className="section parallax">
                <div className="content">
                    <h1>Bienvenido a COMUNI</h1>
                    <p>
                        UNIFIIS es una plataforma que te ayuda a descubrir y conectarte con los grupos estudiantiles de tu universidad.
                        Aquí podrás encontrar información sobre los objetivos, actividades, requisitos y datos de contacto de cada grupo.
                        También podrás unirte a los grupos que te interesen y participar en su comunidad.
                    </p>
                    <a href="#groups" className="btn">Explorar Grupos</a>
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
