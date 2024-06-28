import React from 'react';
import S from './style';
import LeftTitleBox from './LeftTitleBox';
import LeftHostBox from './LeftHostBox';
import LeftDescriptionBox from './LeftDescriptionBox';
import LeftConvenienceBox from './LeftConvenienceBox';
import LeftNoticeBox from './LeftNoticeBox';

const LeftContentBox = ({contentData, hostData, commentData, starAvr, setpopup1State}) => {
    const {address, convenience, description, roomData, notice} = contentData;
    const {userId, profileImg} = hostData;
    return (
        <S.LeftBox>
            <LeftTitleBox address={address} roomData={roomData}/>
            <LeftHostBox profileImg={profileImg} userId={userId} starAvr={starAvr} contentData={contentData} commentData={commentData} setpopup1State={setpopup1State}/>
            <LeftDescriptionBox description={description}/>
            <LeftConvenienceBox convenience={convenience}/>
            <LeftNoticeBox notice={notice}/>
        </S.LeftBox>
    );
};

export default LeftContentBox;