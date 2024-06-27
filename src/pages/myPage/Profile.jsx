import React from 'react';
import S from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const Profile = ({info, setInfo}) => {
    const time = 1;
    return (
        <S.Profile>
            <div className="imageBox">
                <form>
                    <label htmlFor="profileInput">
                        <div>
                            <img src="" alt="프로필 이미지" />
                        </div>
                        <span><FontAwesomeIcon icon={faPen}/></span>
                    </label>
                    <input type="file" id='profileInput'/>
                </form>
                <h2>{info.name}</h2>
                <p>게스트</p>
                <h3>에어비앤비 가입 기간</h3>
                <p>{time}<span>개월</span></p>
            </div>
        </S.Profile>
    );
};

export default Profile;