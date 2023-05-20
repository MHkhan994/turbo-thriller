import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import './Gallery.css'
import 'swiper/css';
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { EffectCoverflow, Pagination, Autoplay } from 'swiper'


const Gallery = () => {
    return (
        <div>
            <h1 className='text-4xl text-center pt-20 font-semibold'>Toys Gallery</h1>
            <p className='text-center text-xl py-10 pt-3 text-gray-600 italic'>Where Imagination Comes to Life: Explore the Whimsical Toy Gallery for Kids!</p>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }
                }
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5
                }}
                modules={[Autoplay, Pagination, EffectCoverflow]}
                style={{ height: 'auto' }}
                className='lg:w-[90vw]'
            >
                <SwiperSlide className='img-slider'>
                    <img className='rounded-lg h-auto' src="slider-1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className='img-slider'>
                    <img className='rounded-lg h-auto' src="slider-2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className='img-slider'>
                    <img className='rounded-lg h-auto' src="slider-3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className='img-slider'>
                    <img className='rounded-lg h-auto' src="slider-4.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className='img-slider'>
                    <img className='rounded-lg h-auto' src="slider-5.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className='img-slider'>
                    <img className='rounded-lg h-auto' src="slider-6.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className='img-slider'>
                    <img className='rounded-lg h-auto' src="slider-7.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className='img-slider'>
                    <img className='rounded-lg h-auto' src="slider-8.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Gallery;