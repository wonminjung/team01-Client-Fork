import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function ImageSlide({img}) {
  const images = img;
  console.log(images);
  return (
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className='contentSlide'
    >
        {images.map((img,i)=>
            <SwiperSlide key={i}><img src={`${img}`} alt={`이미지${i + 1}`} /></SwiperSlide>
        )}
    </Swiper>
  );
};