import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

export default function Category(){
  const category = ["최고의 전망","디자인","멋진 수영장","해변 근처","한적한 시골","한옥","농장","호수 근처","통나무집","캠핑장","초소형 주택","그랜드 피아노","골프장","스키타고출입","돔 하우스","A자형 주택","컨테이너하우스","상징적 도시","캠핑카","스키"];
  const addActive = () => {
    const categories = document.querySelectorAll(".categoryCard");
    categories.forEach((cate, i)=>{
        cate.classList.remove("active");
    })
    
  }
  return (
    <Swiper
      className='categoryContainer'
      navigation={true}
      modules={[Navigation]}
      slidesPerGroup={14}
      spaceBetween={10}
      slidesPerView={14}
      allowTouchMove={false}
    >
      {category.map((cate,i)=><SwiperSlide key={i}><div className={`categoryCard ${i === 0? "active" : ""}`} onClick={addActive}><div><img src={`./images/pages/main/cate${i + 1}.jpg`} /></div><div>{cate}</div></div></SwiperSlide>)}
    </Swiper>
  );
};