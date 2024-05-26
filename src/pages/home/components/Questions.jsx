import React, { useEffect, useState } from 'react';
import '../styles/Questions.css';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '1.2rem', color: '#fff' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#222' : '#222',
    color: '#fff',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1)
    },
    '& .MuiTypography-root': {
        flex: 1, 
        textAlign: 'left',
        margin:'10px'
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    backgroundColor: '#333',
    color: '#fff',
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

function Questions() {
    const [expanded, setExpanded] = useState('');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

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
            rootMargin: '0px',
            threshold: 0.2,
        });

        const titleElements = document.querySelectorAll('.questions__title');
        const containerElements = document.querySelectorAll('.questions__container');
        const elementsToObserve = [...titleElements, ...containerElements];
        elementsToObserve.forEach((element) => observer.observe(element));

        return () => {
            elementsToObserve.forEach((element) => observer.unobserve(element));
        };
    }, []);

    const questions = [
        {
            question: '¿Qué es COMUNI?',
            response: 'COMUNI es una plataforma que te ayuda a descubrir y conectarte con los grupos estudiantiles de tu universidad. COMUNI es una plataforma que te ayuda a descubrir y conectarte con los grupos estudiantiles de tu universidad. COMUNI es una plataforma que te ayuda a descubrir y conectarte con los grupos estudiantiles de tu universidad.',
        },
        {
            question: '¿Qué es COMUNI?',
            response: 'COMUNI es una plataforma que te ayuda a descubrir y conectarte con los grupos estudiantiles de tu universidad. COMUNI es una plataforma que te ayuda a descubrir y conectarte con los grupos estudiantiles de tu universidad. COMUNI es una plataforma que te ayuda a descubrir y conectarte con los grupos estudiantiles de tu universidad. COMUNI es una plataforma que te ayuda a descubrir y conectarte con los grupos estudiantiles de tu universidad. COMUNI es una plataforma que te ayuda a descubrir y conectarte con los grupos estudiantiles de tu universidad. COMUNI es una plataforma que te ayuda a descubrir y conectarte con los grupos estudiantiles de tu universidad. COMUNI es una plataforma que te ayuda a descubrir y conectarte con los grupos estudiantiles de tu universidad.',
        },
        {
            question: '¿Qué es COMUNI?',
            response: 'COMUNI es una plataforma que te ayuda a descubrir y conectarte con los grupos estudiantiles de tu universidad.',
        },
        {
            question: '¿Qué es COMUNI?',
            response: 'COMUNI es una plataforma que te ayuda a descubrir y conectarte con los grupos estudiantiles de tu universidad.',
        },
        {
            question: '¿Qué es COMUNI?',
            response: 'COMUNI es una plataforma que te ayuda a descubrir y conectarte con los grupos estudiantiles de tu universidad.',
        },
    ];

    return (
        <div>
            <h1 className='questions__title'>Preguntas Frecuentes</h1>
            {questions.map((question, index) => (
                <Accordion className='questions__container' key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                    <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-header`}>
                        <Typography>{question.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{question.response}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}

export default Questions;
