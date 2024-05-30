import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import S from './style';

import 'swiper/css';
import 'swiper/css/navigation';


const NavSwiperComponents = (props) => {
    const { data } = props;
    
    return (
        <S.SwiperSlide>
            <S.CategoryWrapper>
                <S.CategoryImg src={data.imgUrl}/>
                <S.CategoryName>{data.name}</S.CategoryName>
            </S.CategoryWrapper>
        </S.SwiperSlide>
    );
};

export default NavSwiperComponents;