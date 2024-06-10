import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeartButton from '../../components/heartbutton/HeartButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const EmptyHeartButton = ({userData,loginUser,loginState,roomid}) => {
    let list = userData.filter((user)=>user.id===loginUser)[0].wishList;
    const navigate = useNavigate();
    const [refresh,setRefresh] = useState(0);
    const clickEmptyBtn = () => { // 빈 위시버튼클릭시
        if(loginState){ // 로그인판별
            // 로그인일 때
            // .................................... 추후 서버로 데이터옮길시 서버로 데이터변경을 요청해야함
            list.push(roomid)
            console.log(list, "추가됨")
            setRefresh(refresh? 0:1)
            // ....................................
        }else{
            // 로그인이 아닐때
            alert("로그인이 필요합니다");
            navigate('/signIn');
        }
    }
    const clickHeartBtn = () => {
        // 위시리스트 삭제시
        // .................................... 추후 서버로 데이터옮길시 서버로 데이터변경을 요청해야함
        list = list.filter((ls)=>ls !== roomid);
        console.log(list, "삭제됨")
        setRefresh(refresh? 0:1)
        // ....................................
    }
    return (
        <>
        {loginState? // 로그인판별
        (
            list.filter((list)=>list===roomid).length?
            // 로그인, 위시리스트에 있을때
            <HeartButton onClick={clickHeartBtn}/>
            :
            // 로그인, 위시리스트에 없을때
            <button className='emptyHeartBtn' onClick={clickEmptyBtn}>
                <FontAwesomeIcon icon={faHeart} />
            </button>
        )
        :
        (
            // 로그인 아닐시
            <button className='emptyHeartBtn' onClick={clickEmptyBtn}>
                <FontAwesomeIcon icon={faHeart} />
            </button>
        )
        }
        
        </>
        
    );
};

export default EmptyHeartButton;