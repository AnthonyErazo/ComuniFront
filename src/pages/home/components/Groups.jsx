import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/Group.css';
import { EffectCoverflow,Pagination, Navigation } from 'swiper/modules';

function Groups() {
    let grupos = [
        { title: 'Nucleo 1', img: 'https://via.placeholder.com/150/FF5733' },
        { title: 'Nucleo 2', img: 'https://via.placeholder.com/150/FFC300' },
        { title: 'Nucleo 2', img: 'https://via.placeholder.com/150/FFC300' },
        { title: 'Nucleo 2', img: 'https://via.placeholder.com/150/FFC300' },
        { title: 'Nucleo 2', img: 'https://via.placeholder.com/150/FFC300' },
        { title: 'Nucleo 2', img: 'https://via.placeholder.com/150/FFC300' },
        { title: 'Nucleo 3', img: 'https://via.placeholder.com/150/C70039' }
    ];

    return (
        <div className="container">
            <h1 className="heading">Grupos</h1>
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
                className="swiper_container"
            >
                {grupos.map((grupo,index)=><SwiperSlide key={index}>
                    <img src={grupo.img} alt={grupo.title} />
                    <p className='title-group'>{grupo.title}</p>
                </SwiperSlide>)}
                

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    );
}

export default Groups;
