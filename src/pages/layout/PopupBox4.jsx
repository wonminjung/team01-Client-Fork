import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PopupBox4 = React.forwardRef(({menuState,setMenuState},ref) => {
    const [loginState,setLoginState] = useState(true);
    const navigate = useNavigate();
    const onClickOut = (e) => {
        e.preventDefault(false);
        setLoginState(false);
        setMenuState(false)
        navigate('/');
    }
    const userMenuOff = () => {
        setMenuState(false)
    }
    return (
        <div className='userPopupBox' style={{display : menuState? "block": "none"}} ref={ref}>
            <>
            {loginState?
                <ul>
                    <li><Link to={'/myPage'} onClick={userMenuOff}>계정</Link></li>
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