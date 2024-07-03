import React from 'react';
import S from './style';
import BodyTop from './BodyTop';
import Profile from './Profile';
import InfoBox from './InfoBox';
import ResetHeader from '../layout/ResetHeader';
import ScrollEvent from '../layout/ScrollEvent';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const MyPageContainer = () => {
    ResetHeader();
    ScrollEvent();

    const currentUser = useSelector((state)=>state.user.currentUser);
    const userStatus = useSelector((state)=>state.user.isLogin);
    console.log(userStatus)
    // 현재 로그인 상태를 확인하여 아닌 경우
    if(!userStatus){
        // replace 왔던 기록을 없애버린다. history
        alert("로그인이 필요합니다")
        return <Navigate to={"/signIn"} replace={true}/>
    }
    console.log(currentUser)
    return (
        <S.MyPageContainer>
            <BodyTop />
            <div className='infoWrapper'>
                <InfoBox info={currentUser}/>
                <Profile info={currentUser}/>
            </div>
        </S.MyPageContainer>
    );
};

export default MyPageContainer;