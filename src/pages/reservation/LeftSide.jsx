import React from 'react';
import Info from './Info'
import Charge from './Charge'
import Refund from './Refund'
import Rules from './Rules'
import S from './style';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const LeftSide = ({datas}) => {

    const currentUser = useSelector(state => state.user.currentUser);
    const isLogin = useSelector(state => state.user.isLogin);
    console.log(currentUser);
    // const {_id,  phone, name, email } = currentUser;

    return (
        <S.SideBox>
            <Info datas={datas} />
            <Charge />
            <Refund datas={datas}/>
            <Rules />
            <Link to={`/reservation/checkout?title=${datas.title}&dayPrice=${datas.dayPrice}`}>
                <S.ChargeButton>
                    확인 및 결제
                </S.ChargeButton>
            </Link>
        </S.SideBox>
    );
};

export default LeftSide;