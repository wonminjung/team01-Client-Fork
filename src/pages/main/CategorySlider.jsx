import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { useState } from 'react';
import FilterBox from './FilterBox';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function Category(){
  const [curSlide, setSlide] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams('?cate=coolPool');
  const getKey = searchParams.get('cate');
  const navigate = useNavigate();
  const category = [
    {
      id: 1,
      cate: "coolPool",
      img: "./images/pages/main/cate1.jpg",
      tag: "멋진 수영장"
    },{
      id: 2,
      cate: "nearBeach",
      img: "./images/pages/main/cate2.jpg",
      tag: "해변 근처"
    },{
      id: 3,
      cate: "design",
      img: "./images/pages/main/cate3.jpg",
      tag: "디자인"
    },{
      id: 4,
      cate: "country",
      img: "./images/pages/main/cate4.jpg",
      tag: "한적한 시골"
    },{
      id: 5,
      cate: "coolView",
      img: "./images/pages/main/cate5.jpg",
      tag: "최고의 전망"
    },{
      id: 6,
      cate: "koreanHouse",
      img: "./images/pages/main/cate6.jpg",
      tag: "한옥"
    },{
      id: 7,
      cate: "farm",
      img: "./images/pages/main/cate7.jpg",
      tag: "농장"
    },{
      id: 8,
      cate: "nearLake",
      img: "./images/pages/main/cate8.jpg",
      tag: "호수 근처"
    },{
      id: 9,
      cate: "logHouse",
      img: "./images/pages/main/cate9.jpg",
      tag: "통나무집"
    },{
      id: 10,
      cate: "camp",
      img: "./images/pages/main/cate10.jpg",
      tag: "캠핑장"
    },{
      id: 11,
      cate: "minimalHouse",
      img: "./images/pages/main/cate11.jpg",
      tag: "초소형 주택"
    },{
      id: 12,
      cate: "symbolicCity",
      img: "./images/pages/main/cate12.jpg",
      tag: "상징적 도시"
    },{
      id: 13,
      cate: "containerHouse",
      img: "./images/pages/main/cate13.jpg",
      tag: "컨테이너하우스"
    },{
      id: 14,
      cate: "grandPiano",
      img: "./images/pages/main/cate14.jpg",
      tag: "그랜드피아노"
    },{
      id: 15,
      cate: "shapeAHouse",
      img: "./images/pages/main/cate15.jpg",
      tag: "A자형 주택"
    },{
      id: 16,
      cate: "domHouse",
      img: "./images/pages/main/cate16.jpg",
      tag: "돔하우스"
    },{
      id: 17,
      cate: "golf",
      img: "./images/pages/main/cate17.jpg",
      tag: "골프장"
    },{
      id: 18,
      cate: "skiEntry",
      img: "./images/pages/main/cate18.jpg",
      tag: "스키 타고 출입"
    },{
      id: 19,
      cate: "campingCar",
      img: "./images/pages/main/cate19.jpg",
      tag: "캠핑카"
    },{
      id: 20,
      cate: "ski",
      img: "./images/pages/main/cate20.jpg",
      tag: "스키"
    }
  ]
  const selectSlide = (nav,i) => {
    setSlide(i);
    navigate(`/?cate=${nav}`);
    console.log("selected");
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
            <div className={`categoryCard ${i === curSlide? "active" : ""}`} onClick={() => selectSlide(cate.cate,i)}>
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