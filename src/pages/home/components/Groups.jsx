import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import axios from "axios";
import '../styles/Groups.css';
import { Pagination, Autoplay } from 'swiper/modules';
import CardItem from './CardItem';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Groups() {
    const [loading, setLoading] = useState(true);
    const [grupos, setGrupos] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setGrupos([
                { title: 'Nucleo 1', img: 'https://via.placeholder.com/150/FF5733',description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis est hic iusto quam maxime consectetur recusandae sequi quisquam rerum, nam debitis facere voluptates, exercitationem cum quis aut quasi nulla esse." },
                { title: 'Nucleo 1', img: 'https://via.placeholder.com/150/FF5733',description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis est hic iusto quam maxime consectetur recusandae sequi quisquam rerum, nam debitis facere voluptates, exercitationem cum quis aut quasi nulla esse." },
                { title: 'Nucleo 1', img: 'https://via.placeholder.com/150/FF5733',description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis est hic iusto quam maxime consectetur recusandae sequi quisquam rerum, nam debitis facere voluptates, exercitationem cum quis aut quasi nulla esse." },
                { title: 'Nucleo 1', img: 'https://via.placeholder.com/150/FF5733',description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis est hic iusto quam maxime consectetur recusandae sequi quisquam rerum, nam debitis facere voluptates, exercitationem cum quis aut quasi nulla esse." },
                { title: 'Nucleo 1', img: 'https://via.placeholder.com/150/FF5733',description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis est hic iusto quam maxime consectetur recusandae sequi quisquam rerum, nam debitis facere voluptates, exercitationem cum quis aut quasi nulla esse." }
            ]);
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <section id='groups' className="App">
            <div className="header-groups">
                <h1 className='title-groups'>Algunas comunidades</h1>
                <Button className="edit-button" sx={{
                    bgcolor: '#5ea0b4',
                    border: '1px solid #5ea0b4',
                    textTransform:'capitalize',
                    '&:hover': {
                        bgcolor: '#3e8094',
                        border: '1px solid #3e8094'
                    }
                }} variant="contained">
                    <Link style={{
                        color: '#fff',
                        '&:hover': {
                            color: '#ffffffa2'
                        }
                    }} to={'/dashboard'}>Agregar/Editar comunidad</Link>
                </Button>
            </div>
            <div className="container">
                <div className="swiperContainer">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                        }}
                        pagination={{
                            el: ".pagination",
                            clickable: true,
                        }}
                        slidesPerView={4}
                        breakpoints={{
                            "@0.00": {
                                slidesPerView: 1,
                                spaceBetween: 25,
                            },
                            "@0.50": {
                                slidesPerView: 1.25,
                                spaceBetween: 25,
                            },
                            "@1.00": {
                                slidesPerView: 2,
                                spaceBetween: 25,
                            },
                            "@1.25": {
                                slidesPerView: 2.5,
                                spaceBetween: 20,
                            },
                            "@1.50": {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            "@1.75": {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                    >
                        {(loading ? Array.from(new Array(5)) : grupos).map((grupo, index) => (
                            <SwiperSlide key={index}>
                                <CardItem grupo={grupo} isLoading={loading} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="pagination" />
            </div>
            <Button variant="outlined" className="view-all-button" sx={{
                bgcolor: '#5ea0b4',
                border: '1px solid #5ea0b4',
                '&:hover': {
                    bgcolor: '#3e8094',
                    border: '1px solid #3e8094'
                }
            }}>
                <Link style={{
                    color: '#fff',
                    textTransform:'capitalize',
                    '&:hover': {
                        color: '#ffffffa2'
                    }
                }} to={'/groups'}>Ver todo</Link>
            </Button>
        </section>
    );
}

export default Groups;
