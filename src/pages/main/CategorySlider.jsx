import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { useState } from 'react';
import FilterBox from './FilterBox';

export default function Category(){
  const [curSlide, setSlide] = useState(0);
  const category = [
    {
      img: "./images/pages/main/cate1.jpg",
      tag: "멋진 수영장"
    },{
      img: "./images/pages/main/cate2.jpg",
      tag: "해변 근처"
    },{
      img: "./images/pages/main/cate3.jpg",
      tag: "디자인"
    },{
      img: "./images/pages/main/cate4.jpg",
      tag: "한적한 시골"
    },{
      img: "./images/pages/main/cate5.jpg",
      tag: "최고의 전망"
    },{
      img: "./images/pages/main/cate6.jpg",
      tag: "한옥"
    },{
      img: "./images/pages/main/cate7.jpg",
      tag: "농장"
    },{
      img: "./images/pages/main/cate8.jpg",
      tag: "호수 근처"
    },{
      img: "./images/pages/main/cate9.jpg",
      tag: "통나무집"
    },{
      img: "./images/pages/main/cate10.jpg",
      tag: "캠핑장"
    },{
      img: "./images/pages/main/cate11.jpg",
      tag: "초소형 주택"
    },{
      img: "./images/pages/main/cate12.jpg",
      tag: "상징적 도시"
    },{
      img: "./images/pages/main/cate13.jpg",
      tag: "컨테이너하우스"
    },{
      img: "./images/pages/main/cate14.jpg",
      tag: "그랜드피아노"
    },{
      img: "./images/pages/main/cate15.jpg",
      tag: "A자형 주택"
    },{
      img: "./images/pages/main/cate16.jpg",
      tag: "돔하우스"
    },{
      img: "./images/pages/main/cate17.jpg",
      tag: "골프장"
    },{
      img: "./images/pages/main/cate18.jpg",
      tag: "스키 타고 출입"
    },{
      img: "./images/pages/main/cate19.jpg",
      tag: "캠핑카"
    },{
      img: "./images/pages/main/cate20.jpg",
      tag: "스키"
    }
  ]
  const selectSlide = (i) => {
    setSlide(i);
  }
  return (
    <>
      <Swiper
        className='categoryContainer'
        navigation={true}
        modules={[Navigation]}
        slidesPerGroup={14}
        spaceBetween={10}
        slidesPerView={14}
        allowTouchMove={false}
      >
        {category.map((cate,i)=>
          <SwiperSlide key={i}>
            <div className={`categoryCard ${i === curSlide? "active" : ""}`} onClick={() => selectSlide(i)}>
              <div>
                <img src={cate.img} alt={`categoty${i+1}`}/>
              </div>
              <div>
                {cate.tag}
              </div>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
      <FilterBox />
    </>
    
  );
};