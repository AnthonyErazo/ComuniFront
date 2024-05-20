import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/Group.css';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

function Groups() {
    const grupos = [
        { title: 'Nucleo 1', img: 'https://via.placeholder.com/150/FF5733' },
        { title: 'Nucleo 2', img: 'https://via.placeholder.com/150/FFC300' },
        { title: 'Nucleo 2', img: 'https://via.placeholder.com/150/FFC300' },
        { title: 'Nucleo 2', img: 'https://via.placeholder.com/150/FFC300' },
        { title: 'Nucleo 2', img: 'https://via.placeholder.com/150/FFC300' },
        { title: 'Nucleo 2', img: 'https://via.placeholder.com/150/FFC300' },
        { title: 'Nucleo 2', img: 'https://via.placeholder.com/150/FFC300' },
        { title: 'Nucleo 2', img: 'https://via.placeholder.com/150/FFC300' },
        { title: 'Nucleo 2', img: 'https://via.placeholder.com/150/FFC300' }
    ];

    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log(`Element ${entry.target.className} is in view`);
                } else {
                    console.log(`Element ${entry.target.className} is out of view`);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: '0px',
            threshold: 0.8
        });

        const elementsToObserve = document.querySelectorAll('.heading, .swiper_container');
        elementsToObserve.forEach(element => observer.observe(element));

        return () => {
            elementsToObserve.forEach(element => observer.unobserve(element));
        };
    }, []);

    return (
        <section className="container" id='groups'>
            <h1 className="heading">Grupos</h1>
            <div className="swiper_container">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper_wrapper"
                >
                    {grupos.map((grupo, index) => (
                        <SwiperSlide key={index}>
                            <img src={grupo.img} alt={grupo.title} className="swiper_img" />
                            <p className='title-group'>{grupo.title}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </section>
    );
}

export default Groups;
