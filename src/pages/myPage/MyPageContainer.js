import React from 'react';
import S from './style';
import BodyTop from './BodyTop';
import Profile from './Profile';
import InfoBox from './InfoBox';
import ResetHeader from '../layout/ResetHeader';
import ScrollEvent from '../layout/ScrollEvent';
import { useSelector } from 'react-redux';
import NeedLogin from '../../components/needLogin/NeedLogin';

const MyPageContainer = () => {
    ResetHeader();
    ScrollEvent();

    const currentUser = useSelector((state)=>state.user.currentUser);
    const userStatus = useSelector((state)=>state.user.isLogin);
    
    return (
        <S.MyPageContainer>
            {userStatus?
            <>
                <BodyTop />
                <div className='infoWrapper'>
                    <InfoBox info={currentUser}/>
                    <Profile info={currentUser}/>
                </div>
            </>
            :
            // 현재 로그인 상태를 확인하여 아닌 경우
            <>
                <NeedLogin />
            </>}
        </S.MyPageContainer>
    );
};

export default MyPageContainer;