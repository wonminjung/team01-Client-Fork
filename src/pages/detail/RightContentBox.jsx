import React from 'react';
import S from './style';
import BasicButton from '../../components/button/BasicButton';
import { useNavigate } from 'react-router-dom';

const RightContentBox = ({dayPrice, cleanVat}) => {
    const restDay = 2;
    const sub = Math.round((dayPrice * restDay) + cleanVat);
    const serviceVat = sub * 0.1;
    const total = sub + serviceVat;
    const navigate = useNavigate();
    const coma = (prop) => {
        const result = prop.toLocaleString('ko-KR');
        return result;
    }
    const reserveBtn = () => {
        navigate(`/reservation?dayPrice=${dayPrice}&total=${total}`);
    }
    return (
        <S.RightBox>
            <div className="rightBox">
                <div className="dayPriceBox">
                    <h6>￦ <span>{coma(dayPrice)}</span><span> / 박</span></h6>
                </div>
                <div className="checkInOutBox">
                    <div>
                        <button type='button'>
                            <span>체크인</span>
                            <span>2024.06.02</span>
                        </button>
                        <button type='button'>
                            <span>체크아웃</span>
                            <span>2024.06.05</span>
                        </button>
                    </div>
                    <div>
                        <button type='button'>
                            <span>인원</span>
                            <span>게스트 2명, 유아 1명</span>
                        </button>
                    </div>
                </div>
                <div className="payListBox">
                    <ul>
                        <li><span>￦ {coma(dayPrice)} x {restDay}박</span><span>￦ {coma(dayPrice*restDay)}</span></li>
                        <li><span>청소비</span><span>￦ {coma(cleanVat)}</span></li>
                        <li><span>서비스 수수료</span><span>￦ {coma(serviceVat)}</span></li>
                        <hr />
                        <li className='total'><span>총 합계</span><span>￦ {coma(total)}</span></li>
                    </ul>
                </div>
                <BasicButton className="reserveBtn" onClick={reserveBtn}>예약하기</BasicButton>
            </div>
        </S.RightBox>
    );
};

export default RightContentBox;