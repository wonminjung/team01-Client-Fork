import React, { useState } from 'react';
import S from './style';
import BodyTop from './BodyTop';
import Profile from './Profile';
import InfoBox from './InfoBox';
import ResetHeader from '../layout/ResetHeader';
import ScrollEvent from '../layout/ScrollEvent';
import { useSelector } from 'react-redux';

const MyPageContainer = () => {
    ResetHeader();
    ScrollEvent();

    const currentUser = useSelector((state)=>state.user.currentUser);
    console.log(currentUser)

    const initialset = currentUser
    // 표시되는 정보 state
    const [info, setInfo] = useState(initialset);

    return (
        <S.MyPageContainer>
            <BodyTop />
            <div className='infoWrapper'>
                <InfoBox info={info} setInfo={setInfo}/>
                <Profile info={info} setInfo={setInfo}/>
            </div>
        </S.MyPageContainer>
    );
};

export default MyPageContainer;