import React, { useState, useEffect } from 'react';
import S from './style';
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

    // 유저가 예약한 숙소가 있는지 여부
    const [isReserved, setIsReserved] = useState(true);

    // 상태로 관리할 active 상태
    const [activeIndex, setActiveIndex] = useState(null);

    const handleAccordionClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };


    // 사진배너 데이터들
    const itemData = [
        {
            id: "1",
            title: "노을빛을품은 감성 숙소, 선셋티아",
            img: "./images/pages/bookingList/room1.gif",
            schedule: "2024년 5월 19일 ~ 2024년 5월 20일",
            address: "제주시, 제주도, 한국",
            reservationNum: "HMZXMWA5J2",
            //=====bookingDetail=========================
            detailAddress : "제주 제주시 조천읍 선흘남4길 31",
            checkInDate : "5월 19일",
            checkInTime : "오후 3:00",
            checkOutDate : "5월 21일",
            checkOutTime : "오전 11:00",
            guests : 2,
            infants : 1,
            //===========================================
            hostPhoneNum : "010-1234-5678",
            hostName : "Sunsetia", 

            
        },
        {
            id: "2",
            title: "일상호사, Ilsanghosa A",
            img: "./images/pages/bookingList/room2.webp",
            schedule: "2024년 5월 20일 ~ 2024년 5월 21일",
            address: "구좌읍, 제주도, 한국",
            reservationNum: "HMZXMWA5J3",
        },
        {
            id: "3",
            title: "벨37, 리버스테이 A",
            img: "./images/pages/bookingList/room3.webp",
            schedule: "2024년 5월 21일 ~ 2024년 5월 22일",
            address: "연천군, 경기도, 한국",
            reservationNum: "HMZXMWA5J2",
        }
    ];

    return (
        <S.BookingListContainer>
            <S.TitleWrapper>
                <h1 className="pageTitle">여행</h1>
                <h4 className="pageSubTitle">예정된 예약</h4>
            </S.TitleWrapper>
            <ul>
                {isReserved ? ( // 예약한 숙소 있을 때,
                    itemData.map((item, index) => (
                        <div key={item.id} style={{marginBottom :'15px'}}>
                            <BookingItem item={item} onClick={() => handleAccordionClick(index)} />
                            <S.panel style={{ maxHeight: activeIndex === index ? '500px' : '0' }}>
                                <BookingDetail item={item}/>
                            </S.panel>
                        </div>
                    ))
                ) : ( // 예약한 숙소 없을 때,
                    <NotBooking />
                )}
            </ul>
        </S.BookingListContainer>
    );
};

export default BookingListContainer;