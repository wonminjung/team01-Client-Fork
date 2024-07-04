import React from 'react';
import S from './style';
import { useNavigate } from 'react-router-dom';
import BasicButton from '../button/BasicButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

const NeedLogin = () => {
    const navigate = useNavigate();
    return (
        <S.NeedLoginBox>
            <div className="needLogin">
                <FontAwesomeIcon icon={faCircleXmark}/> 
                <h1>로그인이 필요합니다</h1>
                <BasicButton onClick={()=>navigate("/", {replace:true})}>홈으로</BasicButton>
            </div>
        </S.NeedLoginBox>
    );
};

export default NeedLogin;