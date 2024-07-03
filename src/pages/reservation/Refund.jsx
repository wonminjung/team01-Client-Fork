import React from 'react';
import S from './style';

const Refund = ({datas}) => {

    const {roomId, newSdate, newEdate} = datas;
    const checkIn = newSdate;
    return (
        <S.CategoryBox>
            <h3>
                환불 정책
            </h3>
            <h4>
                <strong>체크인 시간인 {checkIn.getMonth() + 1}월 {checkIn.getDate()}일 오후 3:00 전에 취소하시면,부분 환불을 받으실 수 있습니다.</strong>
                <br />
                <strong>그 이후에 취소하시면 예약 대금이 환불되지 않습니다.</strong>
                <br />
                <br />
                숙박 도중 예약 취소를 원하신다면, 호스트에게 문제 해결을 요청하실 수 있도록 에어비앤비에서 도와드리겠습니다.
                게스트는 호스트에게 문제 시정, 부분 환불 또는 예약 취소 및 전액 환불을 요청할 수 있습니다. 예약 시 사용하신 결제 수단으로 환불 금액이 지급됩니다.
            </h4>
            <S.CategoryBorder />
        </S.CategoryBox>
    );
};

export default Refund