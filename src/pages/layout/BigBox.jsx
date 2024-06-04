import React, { useEffect, useRef, useState } from 'react';
import S from './style';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import PopupBox from './PopupBox';
import PopupBox2 from './PopupBox2';
import PopupBox3 from './PopupBox3';

const BigBox = () => {
    const boxRef = useRef(null);
    const inputRef = useRef(null);
    const [inputValue, setInputValue] = useState("");
    const inputChange = (e) => {
        setInputValue(e.target.value);
    }
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modal2IsOpen, setModal2IsOpen] = useState(false);
    const [modal3IsOpen, setModal3IsOpen] = useState(false);
    useEffect(() => {
        const handleOutsideClose = (e) => {
            // useRef current에 담긴 엘리먼트 바깥을 클릭 시 드롭메뉴 닫힘
            if(modalIsOpen && (!boxRef.current.contains(e.target)))setModalIsOpen(false)
            if(modal2IsOpen && (!boxRef.current.contains(e.target)))setModal2IsOpen(false)
            if(modal3IsOpen && (!boxRef.current.contains(e.target)))setModal3IsOpen(false)
        };
        document.addEventListener('click', handleOutsideClose);
        return () => document.removeEventListener('click', handleOutsideClose);
    }, [modalIsOpen,modal2IsOpen,modal3IsOpen]);
    return (
        <div className="bigBox" ref={boxRef}>
            <form action="">
                <div className='locationBox' onClick={()=>{setModalIsOpen(true);setModal2IsOpen(false);setModal3IsOpen(false);}}>
                    <div>여행지</div>
                    <div><input type="text" placeholder="여행지 검색" ref={inputRef} onChange={inputChange}/></div>
                </div>
                <span></span>
                <div className='checkInBox' onClick={()=>{setModalIsOpen(false);setModal2IsOpen(true);setModal3IsOpen(false);}}>
                    <div>체크인</div>
                    <div>날짜 추가</div>
                </div>
                <span></span>
                <div className='checkOutBox' onClick={()=>{setModalIsOpen(false);setModal2IsOpen(true);setModal3IsOpen(false);}}>
                    <div>체크아웃</div>
                    <div>날짜 추가</div>
                </div>
                <span></span>
                <div className='guestBox' onClick={()=>{setModalIsOpen(false);setModal2IsOpen(false);setModal3IsOpen(true);}}>
                    <div>여행자</div>
                    <div>게스트 추가</div>
                </div>
                <PopupBox setModalIsOpen={setModalIsOpen} setInputValue={setInputValue} ref={inputRef} modalIsOpen={modalIsOpen}/>
                <PopupBox2 modal2IsOpen={modal2IsOpen}/>
                <PopupBox3 modal3IsOpen={modal3IsOpen}/>
                <S.SearchBtn>
                    <Link to={`/search?val=${inputValue}`}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Link>
                </S.SearchBtn>
            </form>
        </div>
    );
};

export default BigBox;