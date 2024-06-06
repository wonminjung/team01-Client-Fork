import React, { useState } from 'react';
import S from './style'
import BookingItem from './BookingItem';
import NotBooking from './NotBooking';
import BookingDetail from './BookingDetail';
import ResetHeader from '../layout/ResetHeader';
import ScrollEvent from '../layout/ScrollEvent';

// 예약한 숙소리스트
const BookingListContainer = () => {
    ResetHeader();
    ScrollEvent();
     // RemoveHeader();



    // 사진배너 데이터들
    const itemData = [
        {
            id : "1",
            title : "노을빛을품은 감성 숙소, 선셋티아",
            img : "./images/pages/bookingList/room1.gif",
            schedule : "2024년 5월 19일 ~ 2024년 5월 20일",
            address : "제주시, 제주도, 한국",
            reservationNum : "HMZXMWA5J2",
        }
    ]

    // 유저가 예약한 숙소가 있는지 여부
    const [isReserved, setIsReserved] = useState(true);
    const [isClicked, setIsClicked] = useState(true); // false 기본값으로 바꿀것
    

    return (
        <S.BookingListContainer >
            <S.TitleWrapper>
                <h1 className="pageTitle">여행</h1>
                <h4 className="pageSubTitle">예정된 예약</h4>
            </S.TitleWrapper>
            <ul>
                { isReserved ? (
                    <>
                    {isClicked ? (
                        <div className=''>
                            <BookingItem/>
                            <BookingDetail />
                        </div>
                    ) : ( // 클릭 전, active 상태
                        <BookingItem isClicked={isClicked}  />
                    )}
                    </>
                ) : (
                        <NotBooking />
                )}
            </ul>      
        </S.BookingListContainer >
    );
};

export default BookingListContainer;
