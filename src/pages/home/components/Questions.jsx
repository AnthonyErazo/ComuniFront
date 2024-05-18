import React, { useState } from 'react';
import '../styles/Questions.css';

function Questions() {
    const [activeIndex, setActiveIndex] = useState(null);

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
