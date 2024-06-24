import React, { useEffect } from 'react';
import S from './style';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import PrevButton from './PrevButton';


const ReservationContainer = () => {
    return (
        <S.ReservationContainer>
            <div className='body-top'>
                <PrevButton />
                <h2>확인 및 결제</h2>
            </div>
            <div className='LRcontainer'>
                <LeftSide />
                <RightSide />
            </div>
        </S.ReservationContainer>
    );
};

export default ReservationContainer