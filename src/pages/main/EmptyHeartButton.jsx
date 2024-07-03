import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeartButton from '../../components/heartbutton/HeartButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-regular-svg-icons';
import { useSelector } from 'react-redux';

const EmptyHeartButton = ({roomid,wishList,setWishList}) => {
    const userStatus = useSelector((state)=>state.user.isLogin);
    const navigate = useNavigate();
    
    const clickEmptyBtn = () => { // 빈 위시버튼클릭시
        if(userStatus){ // 로그인판별
            // 로그인일 때
            setWishList([...wishList,roomid])
            // setWishList((prevWishList)=>[...(prevWishList ||[]),roomid])
        }else{
            // 로그인이 아닐때
            alert("로그인이 필요합니다");
            navigate('/signIn');
        }
    }
    const clickHeartBtn = async () => {
        // 위시리스트 삭제시
        setWishList(wishList.filter((list)=>list!==roomid))
        // setWishList((prevWishList) => (prevWishList || []).filter((list) => list !== roomid));
    }
    return (
        <>
            {userStatus? // 로그인판별
            wishList&&
            wishList.filter((list)=>list===roomid).length?
            // 로그인, 위시리스트에 있을때
            <HeartButton onClick={clickHeartBtn}/>
            :
            // 로그인, 위시리스트에 없을때
            <button className='emptyHeartBtn' onClick={clickEmptyBtn}>
                <FontAwesomeIcon icon={faHeartSolid} />
            </button>
            :
            // 로그인 아닐시
            <button className='emptyHeartBtn' onClick={clickEmptyBtn}>
                <FontAwesomeIcon icon={faHeartSolid} />
            </button>
            }
        </>
        
    );
};

export default EmptyHeartButton;