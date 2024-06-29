import React, { useEffect, useRef, useState } from 'react';
import S from './style';
import BasicButton from '../../components/button/BasicButton';
import { useNavigate } from 'react-router-dom';
import PopupBox2 from './PopupBox2';
import moment from 'moment';
import { addDays } from 'date-fns';
import PopupBox3 from './PopupBox3';

const RightContentBox = ({id, dayPrice, cleanVat, roomSchedule}) => {
    const [popupState, setPopupState] = useState(false);
    const [popup2State, setPopup2State] = useState(false);
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 1),
            key: "selection",
        },
    ]);
    const formatedDate = [moment().format('YYYY.MM.DD'),moment().add(1,'days').format('YYYY.MM.DD')]
    const [startDateState, setStartDateState] = useState(formatedDate[0]);
    const [endDateState, setEndDateState] = useState(formatedDate[1]);
    const [guestsState,setguestsState] = useState(1);
    const [infantsState,setInfantsState] = useState(0);
    const today = moment().toDate();
    const diff = Math.ceil(Math.abs(state[0].endDate - state[0].startDate) / (1000 * 60 * 60 * 24));
    const sub = Math.round((dayPrice * diff) + cleanVat);
    const serviceVat = sub * 0.1;
    const total = sub + serviceVat;
    const datePopupRef = useRef(null);
    const navigate = useNavigate();
    const coma = (prop) => {
        const result = prop.toLocaleString('ko-KR');
        return result;
    }
    const reserveBtn = () => {
        navigate(`/reservation?roomId=${id}&sdate=${startDateState}&edate=${endDateState}&guests=${guestsState}&infants=${infantsState}`);
    }
    const openPopup = () => {
        setPopupState(true);
        setPopup2State(false);
    }
    const openPopup2 = () => {
        setPopupState(false);
        setPopup2State(true);
    }
    useEffect(() => {
        const handleOutsideClose = (e) => {
            // useRef current에 담긴 엘리먼트 바깥을 클릭 시 드롭메뉴 닫힘
            if(popupState && (!datePopupRef.current.contains(e.target)))setPopupState(false)
            if(popup2State && (!datePopupRef.current.contains(e.target)))setPopup2State(false)
        };
        document.addEventListener('click', handleOutsideClose);
        return () => document.removeEventListener('click', handleOutsideClose);
    }, [popupState,popup2State]);
    return (
        <>
        <S.RightBox>
            <div className="rightBox" ref={datePopupRef}>
                <div className="dayPriceBox">
                    <h6>￦ <span>{coma(dayPrice)}</span><span> / 박</span></h6>
                </div>
                <div className="checkInOutBox">
                    <div>
                        <button type='button' onClick={openPopup}>
                            <span>체크인</span>
                            <span>{startDateState}</span>
                        </button>
                        <button type='button' onClick={openPopup}>
                            <span>체크아웃</span>
                            <span>{endDateState}</span>
                        </button>
                    </div>
                    <div>
                        <button type='button' onClick={openPopup2}>
                            <span>인원</span>
                            <span>{`게스트 : ${guestsState}명${infantsState>0? ', 유아 : '+  infantsState + '명':""}`}</span>
                        </button>
                    </div>
                </div>
                <div className="payListBox">
                    <ul>
                        <li><span>￦ {coma(dayPrice)} x {diff}박</span><span>￦ {coma(dayPrice*diff)}</span></li>
                        <li><span>청소비</span><span>￦ {coma(cleanVat)}</span></li>
                        <li><span>서비스 수수료</span><span>￦ {coma(serviceVat)}</span></li>
                        <hr />
                        <li className='total'><span>총 합계</span><span>￦ {coma(total)}</span></li>
                    </ul>
                </div>
                <BasicButton className="reserveBtn" onClick={reserveBtn}>예약하기</BasicButton>
                <PopupBox2 popupState={popupState} today={today} state={state} setState={setState} setStartDateState={setStartDateState} setEndDateState={setEndDateState} roomSchedule={roomSchedule}/>
                <PopupBox3 popup2State={popup2State} guestsState={guestsState} setguestsState={setguestsState} infantsState={infantsState} setInfantsState={setInfantsState}/>
            </div>
        </S.RightBox>
        </>
    );
};

export default RightContentBox;