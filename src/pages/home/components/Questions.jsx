import React, { useEffect, useState } from 'react';
import '../styles/Questions.css';

function Questions() {
    const [activeIndex, setActiveIndex] = useState(null);
    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target.className.includes('questions__title')) {
                        entry.target.classList.remove('animation-slide-in-down');
                        entry.target.classList.add('animation-slide-in-top');
                    } else {
                        entry.target.classList.remove('animation-fade-out');
                        entry.target.classList.add('animation-fade-in');
                    }

                } else {
                    if (entry.target.className.includes('questions__title')) {
                        entry.target.classList.add('animation-slide-in-down');
                        entry.target.classList.remove('animation-slide-in-top');
                    } else {
                        entry.target.classList.add('animation-fade-out');
                        entry.target.classList.remove('animation-fade-in');
                    }
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: "0px",
            threshold: .2,
        });

        const titleElements = document.querySelectorAll('.questions__title');
        const containerElements = document.querySelectorAll('.questions__container');
        // const sectionQuestion = document.querySelectorAll('.questions__section');
        const elementsToObserve = [...titleElements, ...containerElements];
        elementsToObserve.forEach((element) => observer.observe(element));

        return () => {
            elementsToObserve.forEach((element) => observer.unobserve(element));
        };
    }, []);

    const questions = [
        {
            question: '¿Qué es COMUNI?',
            response: 'COMUNI es una plataforma que te ayuda a descubrir y conectarte con los grupos estudiantiles de tu universidad.COMUNI es una plataforma que te ayuda a descubrir y conectarte con los grupos estudiantiles de tu universidad.COMUNI es una plataforma que te ayuda a descubrir y conectarte con los grupos estudiantiles de tu universidad.'
        },
        {
            question: '¿Qué es COMUNI?',
            response: 'COMUNI es una plataforma que te ayuda a descubrir y conectarte con los grupos estudiantiles de tu universidad.COMUNI es una plataforma que te ayuda a descubrir y conectarte con los grupos estudiantiles de tu universidad.COMUNI es una plataforma que te ayuda a descubrir y conectarte con los grupos estudiantiles de tu universidad.COMUNI es una plataforma que te ayuda a descubrir y conectarte con los grupos estudiantiles de tu universidad.COMUNI es una plataforma que te ayuda a descubrir y conectarte con los grupos estudiantiles de tu universidad.COMUNI es una plataforma que te ayuda a descubrir y conectarte con los grupos estudiantiles de tu universidad.COMUNI es una plataforma que te ayuda a descubrir y conectarte con los grupos estudiantiles de tu universidad.'
        },
        {
            question: '¿Qué es COMUNI?',
            response: 'COMUNI es una plataforma que te ayuda a descubrir y conectarte con los grupos estudiantiles de tu universidad.'
        },
        {
            question: '¿Qué es COMUNI?',
            response: 'COMUNI es una plataforma que te ayuda a descubrir y conectarte con los grupos estudiantiles de tu universidad.'
        },
        {
            question: '¿Qué es COMUNI?',
            response: 'COMUNI es una plataforma que te ayuda a descubrir y conectarte con los grupos estudiantiles de tu universidad.'
        }
    ];

    const toggleQuestion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id='questions' className="questions__section">
            <h2 className="questions__title">Preguntas frecuentes</h2>
            <div className="questions__container">
                {questions.map((question, index) => (
                    <div key={index} className={`question__box ${activeIndex === index ? 'active' : ''}`}>
                        <div
                            className="question__title"
                            onClick={() => toggleQuestion(index)}
                            style={{ cursor: 'pointer' }}
                        >
                            <i className={`fa-solid fa-chevron-down ${activeIndex === index ? 'rotate' : ''}`}></i>{question.question}
                        </div>
                        <div className="contenido-acordeon">
                            <p>{question.response}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Questions;
