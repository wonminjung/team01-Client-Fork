import React from 'react';
import S from './style';
import LeftTitleBox from './LeftTitleBox';
import LeftHostBox from './LeftHostBox';
import LeftDescriptionBox from './LeftDescriptionBox';
import LeftConvenienceBox from './LeftConvenienceBox';
import LeftNoticeBox from './LeftNoticeBox';

const LeftContentBox = ({contentData, hostData, commentData,starAvr,setpopup1State}) => {
    const {address,convenience,convenienceIcon,description,roomData,notice,noticeIcon} = contentData;
    const {name,profileImg} = hostData;
    return (
        <S.LeftBox>
            <LeftTitleBox address={address} roomData={roomData}/>
            <LeftHostBox profileImg={profileImg} name={name} starAvr={starAvr} contentData={contentData} commentData={commentData} setpopup1State={setpopup1State}/>
            <LeftDescriptionBox description={description}/>
            <LeftConvenienceBox convenience={convenience} convenienceIcon={convenienceIcon}/>
            <LeftNoticeBox notice={notice} noticeIcon={noticeIcon}/>
        </S.LeftBox>
    );
};

export default LeftContentBox;