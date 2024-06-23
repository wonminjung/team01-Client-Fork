import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import BasicButton from '../../components/button/BasicButton';
import S from './style';
import KakaoMap from '../../components/kakaomap/KakaoMap.jsx';


const BookingDetail = ({item, isActive, index,}) => {
    
    const[isHovered, setIsHovered] = useState(false);

    const navigate = useNavigate();

    const sub = Math.round((item.dayPrice*item.stayPeriod) + item.cleanVat)

    const serviceVat = sub * 0.1;

    const total = sub + serviceVat;

    const coma = (prop) => {
        const result = prop.toLocaleString('ko-KR');
        return result;
    }
    const onClickCopy = async (text) => {
        try {
          await navigator.clipboard.writeText(text);
          alert('주소가 복사되었습니다!');
        } catch (e) {
          alert('주소 복사에 실패했습니다🥲');
        }
      };

    return (
    <S.bookingDetailWrapper className={isActive ? 'active' : ''} >
        {/* 좌측 지도api */}
        <div className="mapBox">
                <div className="howToGo">
                    <div className="iconPort">
                        <img src="./images/pages/bookingList/port.svg" alt="port" />
                    </div>
                    <div className='textArea'>
                        <h4 className="textBox">
                            찾아가는 방법
                        </h4>
                        <h5 className="detailAddress">
                            주소 : {item.detailAddress}
                        </h5>
                    </div>
                </div>
                <button className='iconCopy'onClick={()=>onClickCopy(item.detailAddress)}>
                    <img src="./images/pages/bookingList/copy.svg" alt="copy"/>
                    <h5>주소 복사</h5>
                </button>
                {/* ⭐카카오맵api 여러개 기능 구현 안됨 해결해야함! */}
                    <KakaoMap props={item.detailAddress} propsNum={index}/>
            </div>
        {/* 우측 예약 상세 내역*/}
        <div className="infoBox">
            {/* 좌측 칸 */}
            <div className='leftBox'>
                {/* 숙박 일정 */}
                <div className='scheduleWrapper'>
                        <div className='title'>
                            <img src="./images/pages/bookingList/moon.svg" alt="moon" />
                            <h3>숙박 일정</h3>
                        </div>
                        <div className='data'>
                            <div className='checkInBox'>
                                <h5 className='checkIn'>체크인</h5>
                                <h5 className='checkInDate'>{item.checkInDate} {item.checkInTime}</h5>
                            </div>
                            <div className='checkOutBox'>
                                <h5 className='CheckOut'>체크아웃</h5>
                                <h5 className='checkOutDate'>{item.checkOutDate} {item.checkOutTime}</h5>
                            </div>
                            <div className='headCountBox'>
                                <h5 className='headCount'>인원</h5>
                                <h5 className='headContNum'>게스트 {item.guests}명, 유아 {item.infants}명</h5>
                            </div>
                        </div>
                    </div>

                {/* 호스트 연락처 */}
                <div className='hostContactWrapper'>
                        <div className='title'>
                            <img src="./images/pages/bookingList/phone.svg" alt="phone" />
                            <h3>호스트 연락처</h3>
                        </div>
                        <div className='data'>
                            <h5>{`${item.hostName} | ${item.hostPhoneNum}`}</h5>
                        </div>
                </div>
                {/* 체크인 방법 */}
                <div className='checkInTipWrapper'>
                        <div className='title'>
                            <img src="./images/pages/bookingList/key.svg" alt="key"/>
                            <h3>체크인 방법</h3>
                        </div>
                        <div className='data'>
                            <ul className='tipList'>
                                <li className='tipOne'>
                                {item.howToCheck1}
                                </li> 
                                <li className='tipTwo'>
                                  {item.howToCheck2}
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>
            {/* 우측 칸 */}
            <div className='rightBox'>
                {/* 요금 상세 내역 */}
                <div className='chargeWrapper'>
                    <div className='title'>
                        <img src="./images/pages/bookingList/receipt.svg" alt="receipt"/>
                        <h3>요금 상세 내역</h3>
                    </div>
                    <div className='data'>
                        <div className='calc'>
                            <span>₩{coma(item.dayPrice)} x {item.stayPeriod}박</span><span>₩{coma(item.dayPrice*item.stayPeriod)}</span>
                        </div>
                        <div className='calc'>
                            <span>청소비</span><span>￦ {coma(item.cleanVat)}</span>
                        </div>
                        <div className='calc'>
                            <span>서비스 수수료</span><span>￦ {coma(serviceVat)}</span>
                        </div>
                        {/* 구분선 */}
                        <div className='divisionLine'></div>
                        <div className='sum'>
                            <span>총 합계</span>
                            <span className='sumPrice'>￦ {coma(total)}</span>
                        </div>
                    </div>   
                </div>
                {/* 환불 정책(고정) */}
                <div className='refundPolicyWrapper'>
                    <div className='title'> 
                        <img src="./images/pages/bookingList/refund.svg" alt="refund"/>
                        <h3>환불 정책</h3>
                    </div>
                    <p>
                    체크인 시간인 5월 19일 오후 3:00 전에 
                    취소하시면, 부분 환불을 받으실 수 있습니다. 
                    그 이후에 취소하시면 예약 대금이 환불되지 않습니다.
                    자세한 부분 환불 관련 정보는 아래 ‘숙소 페이지로 이동’ 버튼을 
                    통해 페이지에서 확인 가능합니다. 
                    </p>
                </div>
                {/* 숙소 페이지로 이동 버튼 */}
                <div className="navToDetailPage">
                        <BasicButton  onMouseEnter={() => setIsHovered(true)}
                                        onMouseLeave={() => setIsHovered(false)}
                                        onClick={() => navigate('/')}
                                        >

                                {isHovered ? (
                                        // ⭐추후 해당 객실의 id로 detail 페이지를 연결해줘야 함!
                                         <div>
                                             <Link to={'/detail'} className='whiteFont'>숙소 페이지로 이동</Link> 
                                             <img className='whiteIcon' src="./images/pages/bookingList/home.svg" alt="home"/>
                                         </div>
                                    ):(
                                        <div>
                                            <Link to={'/detail'} className='yellowFont'>숙소 페이지로 이동</Link>
                                            <img className='yellowIcon'src="./images/pages/bookingList/home_y.svg" alt="yellowHome"/>
                                        </div>
                                    )}
                        </BasicButton> 
                </div>
            </div>
            
        </div>
    </S.bookingDetailWrapper >
    );
};

export default BookingDetail;