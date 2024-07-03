import React from 'react';
import Info from './Info'
import Charge from './Charge'
import Refund from './Refund'
import Rules from './Rules'
import S from './style';
import { Link } from 'react-router-dom';

const LeftSide = ({datas}) => {
    return (
        <S.SideBox>
            <Info datas={datas} />
            <Charge />
            <Refund datas={datas}/>
            <Rules />
            <Link to={'/reservation/checkout'}>
                <S.ChargeButton>
                    확인 및 결제
                </S.ChargeButton>
            </Link>
        </S.SideBox>
    );
};

export default LeftSide;