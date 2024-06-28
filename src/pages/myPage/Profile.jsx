import React, { useRef, useState } from 'react';
import S from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import BasicButton from '../../components/button/BasicButton';

const Profile = ({info, setInfo}) => {
    const userId = "HwangKH";
    const time = 1;
    const imgRef = useRef(null);
    const fileInputRef = useRef(null);
    const [content, setContent] = useState(<></>);
    const thumbImg = (input) => {
        if(input.target.files && input.target.files[0]){
            const reader = new FileReader();
            reader.onload = (e) => {
                imgRef.current.src = e.target.result;
            };
            reader.readAsDataURL(input.target.files[0])
            setContent(<>
                <div className='submitBox'>
                    <BasicButton type="submit">적용</BasicButton>
                </div>
            </>)
        }else{
            imgRef.current.src = `http://localhost:8000/${info.profileImg}`;
            setContent(<></>);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('profileImg', e.target.profileImg.files[0]);
        formData.append('userId', userId);
        uploadFetch(formData)
    }
    const uploadFetch = async (formData) => {
        try{
            const response = await fetch("http://localhost:8000/user/myPage", {
                method : "POST",
                body : formData,
            })
            const userInfo = await response.json();
            const message = userInfo.message;
            const info = userInfo.user;
            alert(message)
            console.log(info)
            setInfo(info)
            setContent(<></>)
        }catch(error){
            console.log(error)
        }
    }
    return (
        <S.Profile>
            <div className="imageBox">
                <form encType='multipart/form-data' onSubmit={handleSubmit}>
                    <label htmlFor="profileImg">
                        <div>
                            <img src={`http://localhost:8000/${info.profileImg}`} ref={imgRef} alt="프로필 이미지" />
                        </div>
                        <span><FontAwesomeIcon icon={faPen}/></span>
                    </label>
                    <input type="file" 
                        ref={fileInputRef} 
                        id='profileImg' 
                        name='profileImg' 
                        onChange={thumbImg}
                        accept='image/jpg, image/png, image/jpeg'
                    />
                    {content}
                </form>
                <h2>{info.name}</h2>
                <p>게스트</p>
                <h3>에그비앤비 가입 기간</h3>
                <p>{time}<span>개월</span></p>
            </div>
        </S.Profile>
    );
};

export default Profile;