import React from 'react';
import S from './style'

const Profile = () => {
    const time = 1;
    return (
        <S.Profile>
            <div>
                <div><img src="" alt="profile" /></div>
                <div><h1>승민</h1></div>
                <div><h3>게스트</h3></div>
            </div>
            <div>
                <div><h4>에어비앤비 가입 기간</h4></div>
                <div><h5>{time}</h5><h4>개월</h4></div>
            </div>
        </S.Profile>
    );
};

export default Profile;