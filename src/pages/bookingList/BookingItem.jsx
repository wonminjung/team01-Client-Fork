import React from 'react';
import S from './style';

const BookingItem = ({isClicked}) => {
    return (
        <S.BookingItemWrapper>
            <div className="textBox">
                <div className="text">
                    <h3 className="title">
                        노을빛을 품은 감성 숙소, 선셋티아
                    </h3>
                    <p className="schedule">
                        2024년 5월 19일 ~ 2024년 5월 20일
                    </p>
                    <p className="briefAddress">
                        제주시, 제주도, 한국
                    </p>
                    <p className="bookingCode">
                        예약번호 : HMZXMWA5J2
                    </p>
                </div>
            </div>
            <div className="imgBox">
                <img src="./images/pages/bookingList/room1.gif"/>
            </div>
        </S.BookingItemWrapper>
    );
};

export default BookingItem;