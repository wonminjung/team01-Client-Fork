import React from 'react';
import S from './style';

const Refund = () => {

    const reservationTime = "7월 15일"
    return (
        <S.CategoryBox>
            <h3>
                환불 정책
            </h3>
            <h4>
                <strong>{reservationTime} 오후 11:59전까지 무료로 취소하실 수 있습니다.</strong>
                <br />
                6월 30일 전에 취소하면 부분 환불을 받으실 수 있습니다. 
                <strong><underline>자세히 알아보기</underline></strong>
            </h4>
            <S.CategoryBorder />
        </S.CategoryBox>
    );
};

export default Refund