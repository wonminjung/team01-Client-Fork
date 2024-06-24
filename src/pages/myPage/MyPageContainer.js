import React from 'react';
import S from './style';
import BodyTop from './BodyTop';
import Profile from './Profile';
import InfoBox from './InfoBox';

const MyPageContainer = () => {
    return (
        <S.MyPageContainer>
            <BodyTop />
            <Profile />
            <InfoBox />
        </S.MyPageContainer>
    );
};

export default MyPageContainer;