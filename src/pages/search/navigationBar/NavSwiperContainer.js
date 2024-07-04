import React, { useEffect, useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';

import NavSwiperComponents from './NavSwiperComponents';
import S from './style';



const NavSwiperContainer = ({ searchParams, handleFilterStatus }) => {

   // 카테고리 선택 상태
  const [ isNavActivate, setNavActivate ] = useState(0);
  
  const category = [
      {
        id: 0,
        cate: "searchResult",
        img: `${process.env.PUBLIC_URL}/images/pages/search/navigationBar/searchResult.jpg`,
        tag: "검색결과"
      },{
        id: 1,
        cate: "coolPool",
        img: `${process.env.PUBLIC_URL}/images/pages/main/cate1.jpg`,
        tag: "멋진 수영장"
      },{
        id: 2,
        cate: "nearBeach",
        img: `${process.env.PUBLIC_URL}/images/pages/main/cate2.jpg`,
        tag: "해변 근처"
      },{
        id: 3,
        cate: "design",
        img: `${process.env.PUBLIC_URL}/images/pages/main/cate3.jpg`,
        tag: "디자인"
      },{
        id: 4,
        cate: "country",
        img: `${process.env.PUBLIC_URL}/images/pages/main/cate4.jpg`,
        tag: "한적한 시골"
      },{
        id: 5,
        cate: "coolView",
        img: `${process.env.PUBLIC_URL}/images/pages/main/cate5.jpg`,
        tag: "최고의 전망"
      },{
        id: 6,
        cate: "koreanHouse",
        img: `${process.env.PUBLIC_URL}/images/pages/main/cate6.jpg`,
        tag: "한옥"
      },{
        id: 7,
        cate: "farm",
        img: `${process.env.PUBLIC_URL}/images/pages/main/cate7.jpg`,
        tag: "농장"
      },{
        id: 8,
        cate: "nearLake",
        img: `${process.env.PUBLIC_URL}/images/pages/main/cate8.jpg`,
        tag: "호수 근처"
      },{
        id: 9,
        cate: "logHouse",
        img: `${process.env.PUBLIC_URL}/images/pages/main/cate9.jpg`,
        tag: "통나무집"
      },{
        id: 10,
        cate: "camp",
        img: `${process.env.PUBLIC_URL}/images/pages/main/cate10.jpg`,
        tag: "캠핑장"
      },{
        id: 11,
        cate: "minimalHouse",
        img: `${process.env.PUBLIC_URL}/images/pages/main/cate11.jpg`,
        tag: "초소형 주택"
      },{
        id: 12,
        cate: "symbolicCity",
        img: `${process.env.PUBLIC_URL}/images/pages/main/cate12.jpg`,
        tag: "상징적 도시"
      },{
        id: 13,
        cate: "containerHouse",
        img: `${process.env.PUBLIC_URL}/images/pages/main/cate13.jpg`,
        tag: "컨테이너하우스"
      },{
        id: 14,
        cate: "grandPiano",
        img: `${process.env.PUBLIC_URL}/images/pages/main/cate14.jpg`,
        tag: "그랜드피아노"
      },{
        id: 15,
        cate: "shapeAHouse",
        img: `${process.env.PUBLIC_URL}/images/pages/main/cate15.jpg`,
        tag: "A자형 주택"
      },{
        id: 16,
        cate: "domHouse",
        img: `${process.env.PUBLIC_URL}/images/pages/main/cate16.jpg`,
        tag: "돔하우스"
      },{
        id: 17,
        cate: "golf",
        img: `${process.env.PUBLIC_URL}/images/pages/main/cate17.jpg`,
        tag: "골프장"
      },{
        id: 18,
        cate: "skiEntry",
        img: `${process.env.PUBLIC_URL}/images/pages/main/cate18.jpg`,
        tag: "스키 타고 출입"
      },{
        id: 19,
        cate: "campingCar",
        img: `${process.env.PUBLIC_URL}/images/pages/main/cate19.jpg`,
        tag: "캠핑카"
      },{
        id: 20,
        cate: "ski",
        img: `${process.env.PUBLIC_URL}/images/pages/main/cate20.jpg`,
        tag: "스키"
      }
  ]
  
  const categoryHalf = (category.length / 1.5) + 2;
  const swiperOptions = {
    slidesPerView: categoryHalf,
    slidesPerGroup: Math.floor(categoryHalf),
    allowTouchMove: false,
    navigation: true,
    modules: [Navigation],
  };


  useEffect(() => {
    // 네비게이션바 인덱스
    setNavActivate(0);
  }, []);



  return (
    <S.NavBfAfContainer>
        <S.NavLeftRightPadding>
          <S.Swiper {...swiperOptions}>
              {
                category.map((data, i) => 
                  (
                    <S.SwiperSlide key={i}>
                        <NavSwiperComponents 
                          data={data} 
                          index={i}
                          isNavActivate={isNavActivate} 
                          setNavActivate={setNavActivate}
                          searchParams={searchParams}
                        />
                    </S.SwiperSlide>
                  )
                )
              }
          </S.Swiper>

          <S.FilterButton onClick={handleFilterStatus}>
            <FontAwesomeIcon icon={faSliders}/>
            <div>필터</div>
          </S.FilterButton>

        </S.NavLeftRightPadding>
    </S.NavBfAfContainer>
  );
};

export default NavSwiperContainer;