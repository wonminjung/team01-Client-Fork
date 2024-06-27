import React, { useState } from 'react';

import S from './style';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';
import HeartButton from '../../../../components/heartbutton/HeartButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const CardListComponents = ({ cardList, handleClickEvent, index }) => {
    const { title, address, roomImg, dayPrice } = cardList;

    
    const [ isWishList, setIsWishList ] = useState(false);
    const handleWishList = () => {
        setIsWishList(!isWishList);
    };

    // 주소값 2개 추출
    const [ firstAddr, secondAddr ] = address.split(" ");

    const swiperOptions = {
        pagination: { dynamicBullets: true },
        navigation: true,
        allowTouchMove: false,
        modules: [Navigation, Pagination],
    };

    // number타입 숫자를 문자열로 변환하며 쉼표 생성
    const dayPriceAsString = dayPrice.toLocaleString();
    
    return (
        <S.CardListComponentsContainer>
            <S.WishContainer onClick={handleWishList}>
                {
                    isWishList ? 
                    (
                        <S.HeartButtonWrapper>
                            <HeartButton />
                        </S.HeartButtonWrapper>
                    )
                    : 
                    (
                        <S.HeartDisabled>
                            <img src="./images/pages/search/main/heart-regular.svg"/>
                        </S.HeartDisabled>
                    )
                }
            </S.WishContainer>

            <S.Swiper {...swiperOptions} onClick={() => handleClickEvent(index)}>
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
                <S.Reservation onClick={() => handleClickEvent(index)}>
                    예약하기
                </S.Reservation>
            </S.DescriptionSection>
        </S.CardListComponentsContainer>
    );
};

export default CardListComponents;