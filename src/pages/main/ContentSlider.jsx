import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';

export default function Content(img) {
  const image = img.img;
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      navigation={true}
      allowTouchMove={false}
      modules={[Navigation, Pagination]}
      spaceBetween={5}
      slidesPerView={1}
    >
      {image.map((img,i)=>
        <SwiperSlide key={i}><img src={`${img}`} alt={`이미지${i+1}`} /></SwiperSlide>
      )}
    </Swiper>
  );
};