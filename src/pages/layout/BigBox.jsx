import React, { useEffect, useRef, useState } from 'react';
import S from './style';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import PopupBox from './PopupBox';
import PopupBox2 from './PopupBox2';
import PopupBox3 from './PopupBox3';

const BigBox = React.forwardRef((_,ref) => {
    const inputRef = useRef(null);
    const [inputValue, setInputValue] = useState("");
    const inputChange = (e) => {
        setInputValue(e.target.value);
    }
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modal2IsOpen, setModal2IsOpen] = useState(false);
    const [modal3IsOpen, setModal3IsOpen] = useState(false);
    const [startDateState, setStartDateState] = useState("날짜 추가");
    const [endDateState, setEndDateState] = useState("날짜 추가");
    const [guestState,setGuestState] = useState(0);
    const [childState,setChildState] = useState(0);
    const clickSearch = () => {
        setModalIsOpen(false)
        setModal2IsOpen(false)
        setModal3IsOpen(false)
    }
    const navigate = useNavigate();
    const searchSubmit = (e) => {
        e.preventDefault()
        navigate(`/search?${inputValue===""? "": `val=${inputValue}`}${startDateState==="날짜 추가"? "":`&sdate=${startDateState}&edate=${endDateState}`}${guestState<1? "":`&guest=${guestState}&child=${childState}`}`)
    }
    useEffect(() => {
        const handleOutsideClose = (e) => {
            // useRef current에 담긴 엘리먼트 바깥을 클릭 시 드롭메뉴 닫힘
            if(modalIsOpen && (!ref.current.contains(e.target)))setModalIsOpen(false)
            if(modal2IsOpen && (!ref.current.contains(e.target)))setModal2IsOpen(false)
            if(modal3IsOpen && (!ref.current.contains(e.target)))setModal3IsOpen(false)
        };
        document.addEventListener('click', handleOutsideClose);
        return () => document.removeEventListener('click', handleOutsideClose);
    }, [ref,modalIsOpen,modal2IsOpen,modal3IsOpen]);
    return (
        <div className="bigBox" ref={ref}>
            <form onSubmit={searchSubmit}>
                <div className='locationBox' onClick={()=>{setModalIsOpen(true);setModal2IsOpen(false);setModal3IsOpen(false);}}>
                    <div>여행지</div>
                    <div><input type="text" placeholder="여행지 검색" ref={inputRef} onChange={inputChange}/></div>
                </div>
                <span></span>
                <div className='checkInBox' onClick={()=>{setModalIsOpen(false);setModal2IsOpen(true);setModal3IsOpen(false);}}>
                    <div>체크인</div>
                    <div>{startDateState}</div>
                </div>
                <span></span>
                <div className='checkOutBox' onClick={()=>{setModalIsOpen(false);setModal2IsOpen(true);setModal3IsOpen(false);}}>
                    <div>체크아웃</div>
                    <div>{endDateState}</div>
                </div>
                <span></span>
                <div className='guestBox' onClick={()=>{setModalIsOpen(false);setModal2IsOpen(false);setModal3IsOpen(true);}}>
                    <div>여행자</div>
                    <div>{guestState>0? `게스트 : ${guestState}명${childState>0? `, 유아 : ${childState}명`: ""}`: "게스트 추가"}</div>
                </div>
                <PopupBox setModalIsOpen={setModalIsOpen} setInputValue={setInputValue} ref={inputRef} modalIsOpen={modalIsOpen}/>
                <PopupBox2 modal2IsOpen={modal2IsOpen} setStartDateState={setStartDateState} setEndDateState={setEndDateState}/>
                <PopupBox3 modal3IsOpen={modal3IsOpen} guestState={guestState} setGuestState={setGuestState} childState={childState} setChildState={setChildState}/>
                <S.SearchBtn>
                    <Link className='searchBtn' onClick={clickSearch} to={`/search?${inputValue===""? "": `val=${inputValue}`}${startDateState==="날짜 추가"? "":`&sdate=${startDateState}&edate=${endDateState}`}${guestState<1? "":`&guest=${guestState}&child=${childState}`}`}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Link>
                </S.SearchBtn>
            </form>
        </div>
    );
});

export default BigBox;