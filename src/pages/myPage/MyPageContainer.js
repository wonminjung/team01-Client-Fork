import React, { useState } from 'react';
import S from './style';
import BodyTop from './BodyTop';
import Profile from './Profile';
import InfoBox from './InfoBox';
import ResetHeader from '../layout/ResetHeader';
import ScrollEvent from '../layout/ScrollEvent';

const MyPageContainer = () => {
    ResetHeader();
    ScrollEvent();

    const initialset = {
        name : "홍길동",
        email : "12345@gmail.com",
        profileImg : "uploads/profile/0f800888eb88a80c0773a6dfef5af73c",
        phone : "010-1234-5678",
        address : "경기도 성남시"
    }
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