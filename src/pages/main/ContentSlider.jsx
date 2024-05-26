import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

export default function Content(img) {
  const image = img.img;
  console.log(image[0]);
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      spaceBetween={5}
      slidesPerView={1}
    >
      {image.map((img,i)=>
        <SwiperSlide key={i}><img src={`${img[i]}`} alt={`이미지${i+1}`} /></SwiperSlide>
      )}
    </Swiper>
  );
};