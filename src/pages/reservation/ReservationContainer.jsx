import React, { useEffect } from 'react';
import S from './style';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import PrevButton from './PrevButton';


const ReservationContainer = () => {
    return (
        <S.ReservationContainer>
            <br/>
            <PrevButton />
            <h2 style={{margin: "20px 130px 20px"}}>확인 및 결제</h2>
            <LeftSide />
            <RightSide />
            <S.ChargeButton />
        </S.ReservationContainer>
    );
};

export default ReservationContainer