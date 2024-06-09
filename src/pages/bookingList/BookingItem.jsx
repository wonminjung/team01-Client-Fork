import React from 'react';
import S from './style';

const BookingItem = ({item, onClick}) => {
    return (
        <S.BookingItemWrapper className='bookingItem' onClick={onClick}>
            <div className="textBox">
                <div className="text">
                    <div className="title">{item.title}</div>
                    <div className="schedule">{item.schedule}</div>
                    <div className="briefAddress">{item.address}</div>
                    <div className="bookingCode"> 예약번호 : {item.reservationNum}</div>
                </div>
            </div>
            <div className="imgBox">
                <img src={item.img} alt="숙소 이미지"/>
            </div>
        </S.BookingItemWrapper>
    );
};

export default BookingItem;