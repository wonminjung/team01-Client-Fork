import React from 'react';
import S from './style'
import BookingDetail from './BookingDetail';
import BookingItem from './BookingItem';


const BookingListContainer = () => {
    return (
        <S.BookingListContainer >
            <S.TitleWrapper>
                <h1 className="pageTitle">여행</h1>
                <h4 className="pageSubTitle">예정된 예약</h4>
            </S.TitleWrapper>
            <S.BookingLists >
                <div className="BookingList">
                    <BookingItem/>
                    <BookingDetail/>
                </div>
            </S.BookingLists >
        </S.BookingListContainer >
    );
};

export default BookingListContainer;