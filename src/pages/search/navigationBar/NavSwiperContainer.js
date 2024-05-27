import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import NavSwiperComponents from './NavSwiperComponents';


import S from './style';


const NavSwiperContainer = () => {

   const category = [
      {
         name: "검색 결과",
         imgUrl: "./images/pages/search/navigationBar/searchResult.jpg"
      }, 
      {
         name: "방",
         imgUrl: "./images/pages/search/navigationBar/room.jpg"
      }, 
      {
         name: "상징적 도시",
         imgUrl: "./images/pages/search/navigationBar/city.jpg"
      }, 
      {
         name: "최고의 전망",
         imgUrl: "./images/pages/search/navigationBar/outLook.jpg"
      }, 
      {
         name: "국립공원",
         imgUrl: "./images/pages/search/navigationBar/park.jpg"
      }, 
      {
         name: "멋진 수영장",
         imgUrl: "./images/pages/search/navigationBar/pool.jpg"
      }, 
      {
         name: "인기 급상승",
         imgUrl: "./images/pages/search/navigationBar/hot.jpg"
      }, 
      {
         name: "한옥",
         imgUrl: "./images/pages/search/navigationBar/Khouse.jpg"
      }, 
      {
         name: "스키",
         imgUrl: "./images/pages/search/navigationBar/ski.jpg"
      }, 
      {
         name: "한적한 시골",
         imgUrl: "./images/pages/search/navigationBar/countryside.jpg"
      }, 
      {
         name: "캠핑장",
         imgUrl: "./images/pages/search/navigationBar/camping.jpg"
      }, 
      {
         name: "B&B",
         imgUrl: "./images/pages/search/navigationBar/bnb.jpg"
      }, 
      {
         name: "호수 근처",
         imgUrl: "./images/pages/search/navigationBar/near.jpg"
      }, 
      {
         name: "해변 근처",
         imgUrl: "./images/pages/search/navigationBar/beach.jpg"
      }, 
      {
         name: "키즈",
         imgUrl: "./images/pages/search/navigationBar/kids.jpg"
      }, 
      {
         name: "통나무집",
         imgUrl: "./images/pages/search/navigationBar/cabin.jpg"
      }, 
      {
         name: "농장",
         imgUrl: "./images/pages/search/navigationBar/farm.jpg"
      }, 
      {
         name: "초소형 주택",
         imgUrl: "./images/pages/search/navigationBar/smallHouse.jpg"
      }, 
      {
         name: "해변 바로 앞",
         imgUrl: "./images/pages/search/navigationBar/frontBeach.jpg"
      }, 
      {
         name: "호숫가",
         imgUrl: "./images/pages/search/navigationBar/lakeside.jpg"
      }, 
      {
         name: "골프장",
         imgUrl: "./images/pages/search/navigationBar/golf.jpg"
      }, 
      {
         name: "서핑",
         imgUrl: "./images/pages/search/navigationBar/surfing.jpg"
      },
   ];
   
   const swiperOptions = {
      // spaceBetween: 50,
      slidesPerView: 8,
      navigation: true,
      modules: [Navigation],
      onSlideChange: () => console.log("slide change"),
      onSwiper: (swiper) => console.log(swiper),
   };
   

   return (
      <>
         <div style={{padding: "0 0 0 24px"}}>
            <S.Swiper {...swiperOptions}>
               {category.map((data, i) => (<SwiperSlide>{data.name}</SwiperSlide>))}
            </S.Swiper>
         </div>
      </>
   );
};

export default NavSwiperContainer;