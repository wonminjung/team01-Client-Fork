import React, { useEffect, useState } from 'react';

import S from './style';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';
import HeartButton from '../../../../components/heartbutton/HeartButton';
import { useSelector } from 'react-redux';



const CardListComponents = ({ cardList, setClickRoom }) => {
    const { title, address, roomImg, dayPrice, _id } = cardList;

    // 주소값 2개 파싱
    const [ firstAddr, secondAddr ] = address.split(" ");

    const swiperOptions = {
        pagination: { dynamicBullets: true },
        navigation: true,
        allowTouchMove: false,
        modules: [Navigation, Pagination],
    };

    // number타입 숫자를 쉼표를 구분점으로 하는 문자열로 변환
    const dayPriceAsString = dayPrice.toLocaleString();

    // wishList에 있는지 상태
    const [ isWishList, setIsWishList ] = useState(false);
    // 하트버튼 클릭시 변경 함수
    const handleWishList = () => {
        setIsWishList(!isWishList);
    };
    
    // 테스트용 위시리스트 목록
    const testUserWishList = [ "667adac97aa8b09d01fb7e42", "667adac97aa8b09d01fb7dfa", "667adac97aa8b09d01fb7e33" ];
    // 현재 로그인 사용자 wishList 가져오기
    const currentUserWishList = useSelector((state) => state.currentUser);

    // _id 변경될 때마다 위시리스트 목록에 있는 숙소인지 비교
    useEffect(() => {
        // 현재 로그인 한 유저의 WishList(roomId)와 현재 cardList의 _id값을 비교하여 isWishList 상태 변경
        testUserWishList.includes(_id) ? setIsWishList(true) : setIsWishList(false);
    }, [_id]);


    
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

            <S.Swiper {...swiperOptions} onClick={() => setClickRoom(cardList)}>
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
                <S.Reservation onClick={() => setClickRoom(cardList)}>
                    정보보기
                </S.Reservation>
            </S.DescriptionSection>
        </S.CardListComponentsContainer>
    );
};

export default CardListComponents;