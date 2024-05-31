import React from 'react';
import S from './style';
import LeftTitleBox from './LeftTitleBox';
import LeftHostBox from './LeftHostBox';

const LeftContentBox = ({contentData, hostData, commentData}) => {
    const {address,convenience,discription,roomData} = contentData;
    const {hostId,name,profileImg,email,phone} = hostData;
    const {userId,body,star,grade} = commentData;
    const starAvr = () => {
        let number = 0;
        for(let i = 0; i < commentData.length; i++){
            number += commentData[i].star;
        }
        number = number / commentData.length;
        return number.toFixed(1);
    }
    return (
        <S.LeftBox>
            <LeftTitleBox address={address} roomData={roomData}/>
            <LeftHostBox profileImg={profileImg} name={name} starAvr={starAvr} commentData={commentData}/>
            
        </S.LeftBox>
    );
};

export default LeftContentBox;