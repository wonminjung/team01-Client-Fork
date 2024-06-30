import React, { useEffect, useState } from 'react';

import S from './style';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';
import HeartButton from '../../../../components/heartbutton/HeartButton';
// import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const CardListComponents = ({ cardList, setClickRoom, currentUser, isLogin }) => {
    const { title, address, roomImg, dayPrice, _id } = cardList;

    // 현재 로그인 사용자 wishList 가져오기
    const currentWishList = currentUser.wishList;

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

    const navigate = useNavigate();


    // 서버쪽으로 위시리스트 통신?
    const updateWish = async () => {
        const response = await fetch("http://localhost:8000/room/updateWishList", 
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(
                    {
                        userId: currentUser.userId,
                        roomId: _id
                    }
                ),
            }
        );
        const data = await response.json();

        return data;
    };

    // 하트버튼 클릭시 변경 함수
    const handleWishList = () => {
        if (!isLogin) {
            alert("로그인 해주세요!");
            navigate("/signIn");
            return;
        }

        if (isWishList) {
            // 이미 위시리스트에 있는데 클릭한 경우
            updateWish()
                .then((res) => {
                    console.log(res);
                    setIsWishList(!isWishList);
                });
        } else {
            // 위시리스트에 없는데 클릭한 경우
            updateWish()
                .then((res) => {
                    console.log(res);
                    setIsWishList(!isWishList);
                });
        }
    };


    // _id 변경될 때마다 로그인 한 사용자의 위시리스트 목록에 있는 숙소인지 비교
    useEffect(() => {
        if (isLogin) {
            // 현재 로그인 한 유저의 WishList(roomId)와 현재 cardList의 _id값을 비교하여 isWishList 상태 변경
            currentWishList?.includes(_id) ? setIsWishList(true) : setIsWishList(false);
        }
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
                <S.DescriptionHead>
                    <h6>
                        {title}
                    </h6>
                    <S.Addr>
                        {address}
                    </S.Addr>
                </S.DescriptionHead>

                <S.DescriptionBottom>
                    <S.Reservation onClick={() => setClickRoom(cardList)}>
                        정보보기
                    </S.Reservation>
                    <S.Price>
                        ￦{dayPriceAsString}
                    </S.Price>
                </S.DescriptionBottom>
            </S.DescriptionSection>
        </S.CardListComponentsContainer>
    );
};

export default CardListComponents;