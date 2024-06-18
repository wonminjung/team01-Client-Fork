import React from 'react';
import Info from './Info'
import Charge from './Charge'
import Refund from './Refund'
import Rules from './Rules'
import S from './style';

const LeftSide = () => {
    return (
        <S.SideBox>
            <Info />
            <Charge />
            <Refund />
            <Rules />
        </S.SideBox>
    );
};

export default LeftSide;