import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function ImageSlide({img,setImgModalState}) {
  const images = img;
  const openImgModal= () => {
    setImgModalState(true)
    let scrollY = "";
    scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = "-"+scrollY+"px";
    document.body.style.overflowY = "scroll";
    document.body.style.width = "100%";
  }
  return (
    <Swiper
        effect={'coverflow'}
        grabCursor={false}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        coverflowEffect={{
            rotate: 40,
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
            <SwiperSlide key={i} onClick={openImgModal}><img src={`${img}`} alt={`이미지${i + 1}`} /></SwiperSlide>
        )}
    </Swiper>
  );
};