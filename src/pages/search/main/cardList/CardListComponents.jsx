import React from 'react';

import S from './style';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';

const CardListComponents = ({ cardList, handleClickEvent, index }) => { 
    const { title, address, roomImg, dayPrice } = cardList;

    const [ firstAddr, secondAddr ] = address.split(" ");

    const swiperOptions = {
        pagination: { dynamicBullets: true },
        navigation: true,
        allowTouchMove: false,
        modules: [Navigation, Pagination],
    };

    const dayPriceAsString = dayPrice.toLocaleString();
    
    return (
        <S.CardListComponentsContainer onClick={() => handleClickEvent(index)}>
            <S.Swiper {...swiperOptions}>
                {
                    roomImg && roomImg.map((img, i) => 
                        (
                            <S.SwiperSlide key={i}>
                                <img src={img} alt="숙소 이미지"/>
                            </S.SwiperSlide>
                        )
                    )
                }
            </S.Swiper>
            
            <S.DescriptionSection>
                    <h6>
                        {title}
                    </h6>
                <S.AddrPrice>
                    <div>{firstAddr}/{secondAddr}</div>
                    <div>￦{dayPriceAsString}</div>
                </S.AddrPrice>
                <S.Reservation>
                    예약하기
                </S.Reservation>
            </S.DescriptionSection>
        </S.CardListComponentsContainer>
    );
};

export default CardListComponents;