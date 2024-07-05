import React from 'react';
import Info from './Info'
import Charge from './Charge'
import Refund from './Refund'
import Rules from './Rules'
import S from './style';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const LeftSide = ({datas, days}) => {

    const currentUser = useSelector(state => state.user.currentUser);
    const isLogin = useSelector(state => state.user.isLogin);
    console.log(currentUser);
    console.log(isLogin);
    // const {_id,  phone, name, email } = currentUser;

    return (
        <S.SideBox>
            <Info datas={datas} />
            <Charge />
            <Refund datas={datas}/>
            <Rules />
            { isLogin ? 
                (
                    <Link to={`/reservation/checkout?roomId=${datas.roomId}&sdate=${datas.sdate}&edate=${datas.edate}&guests=${datas.guests}&infants=${datas.infants}&title=${datas.title}&dayPrice=${datas.dayPrice}&cleanVat=${datas.cleanVat}&days=${days}`}>
                    <S.ChargeButton>
                        확인 및 결제
                    </S.ChargeButton>
                    </Link>
                )
                :
                (
                    <div>로그인이 필요한 서비스입니다.</div>
                )
            }
        </S.SideBox>
    );
};

export default LeftSide;