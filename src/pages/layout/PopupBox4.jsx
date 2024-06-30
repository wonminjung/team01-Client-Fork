import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setUser, setUserStatus } from '../../modules/user';

const PopupBox4 = React.forwardRef(({menuState},ref) => {

    const userStatus = useSelector((state)=>state.user.isLogin);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onClickOut = (e) => {
        e.preventDefault(false);
        dispatch(setUser({}))
        dispatch(setUserStatus(false))
        navigate('/');
    }

    return (
        <div className='userPopupBox' style={{display : menuState? "block": "none"}} ref={ref}>
            <>
            {userStatus?
                <ul>
                    <li><Link to={'/myPage'}>계정</Link></li>
                    <li><Link to={'/bookingList'}>여행</Link></li>
                    <li><Link to={'/wishList'}>위시리스트</Link></li>
                    <li><Link onClick={onClickOut}>로그아웃</Link></li>
                </ul>
            : 
                <ul>
                    <li><Link to={'/signIn'}>로그인</Link></li>
                    <li><Link to={'/signUp'}>회원가입</Link></li>
                </ul>
            }
            </>
            
        </div>
    );
});

export default PopupBox4;