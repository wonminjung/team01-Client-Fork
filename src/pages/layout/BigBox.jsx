import React, { useEffect, useRef, useState } from 'react';
import S from './style';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import PopupBox from './PopupBox';

const BigBox = () => {
    const [popup,setPopup] = useState("");
    const locationPopUp = () => {
        setPopup("location");
    }
    const checkInPopUp = () => {
        setPopup("checkIn");
    }
    const guestPopUp = () => {
        setPopup("guest");
    }
    const popUpRef = useRef(null);
    useEffect(()=>{
        const locationPopup = (e) => {
            if(e.target.className.includes("popupItem") === true){
            }else{
                setPopup("");
            }
        }
        window.addEventListener("click",locationPopup)
    })
    
    return (
        <div className="bigBox">
            <form action="">
                <div className='locationBox popupItem' onClick={locationPopUp}>
                    <div className='popupItem'>여행지</div>
                    <div><input type="text" className='popupItem' placeholder="여행지 검색"/></div>
                </div>
                <span></span>
                <div className='checkInBox popupItem' onClick={checkInPopUp}>
                    <div className='popupItem'>체크인</div>
                    <div className='popupItem'>날짜 추가</div>
                </div>
                <span></span>
                <div className='checkOutBox popupItem' onClick={checkInPopUp}>
                    <div className='popupItem'>체크아웃</div>
                    <div className='popupItem'>날짜 추가</div>
                </div>
                <span></span>
                <div className='guestBox popupItem' onClick={guestPopUp}>
                    <div className='popupItem'>여행자</div>
                    <div className='popupItem'>게스트 추가</div>
                </div>
                <PopupBox popup={popup} ref={popUpRef}/>
                <S.SearchBtn>
                    <Link to={"/search"}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Link>
                </S.SearchBtn>
            </form>
        </div>
    );
};

export default BigBox;