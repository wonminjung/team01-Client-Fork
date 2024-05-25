import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function Banner(){
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    const banner = ["","","",""];
  return (
    <Swiper className='bannerContainer'
      spaceBetween={10}
      effect={'fade'}
      navigation={true}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      allowTouchMove={false}
      loop={true}
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      slidesPerView={1}
    >
      {banner.map((banner,i)=><SwiperSlide key={i}><img src={`./images/pages/main/banner${i+1}.jpg`} alt={`배너${i+1}`} /></SwiperSlide>)}
        <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
        </div>
    </Swiper>
  );
};