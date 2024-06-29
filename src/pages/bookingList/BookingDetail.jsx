import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import BasicButton from '../../components/button/BasicButton';
import S from './style';
import KakaoMap from '../../components/kakaomap/KakaoMap.jsx';


const BookingDetail = ({item, isActive, index,}) => {
    
    console.log(item);

    const[isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
    const stayStartDate = new Date(item.checkInDate);
    const stayEndDate = new Date(item.checkOutDate);
    const timeDiff = Math.abs(stayEndDate.getTime() - stayStartDate.getTime());
    const stayPeriod = Math.ceil(timeDiff / (1000 * 3600 *24));
    const sub = Math.round((item.roomId.dayPrice*stayPeriod) + item.roomId.cleanVat)
    const serviceVat = sub * 0.1;
    const total = sub + serviceVat;

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${month}월 ${day}일`;
    }

// 체크인 시간 문자열에서 오후 4:00만 추출하는 함수
const extractCheckInTime = (timeString) => {
    // 시간 문자열에서 ":"를 기준으로 분리
    const parts = timeString.split(':')[1];
    const partsForTime = parts.split(' ');
    const pm = partsForTime[1];
    const time = partsForTime[2];

     // 오후/오전 여부를 판별하고 시간을 12시간 형식으로 변경
     if (pm === "오후") {
        return `오후 ${time}시`;
     }
        return timeString; // 예외 처리
};

const extractCheckOutTime = (timeString) => {
    // 시간 문자열에서 ":"를 기준으로 분리
    const parts = timeString.split(' ');
    const amPm = parts[2]; // 오후
    const part = parts[3]  // 4:00~9:00
    const partsForTime = part.split(':');
    const time = partsForTime[0]; //4
;
     // 오후/오전 여부를 판별하고 시간을 12시간 형식으로 변경
     if (amPm === "오전") {
        return `오전 ${time}시`;
     }
        return timeString; // 예외 처리
};


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
                            주소 : {item.roomId.address}
                        </h5>
                    </div>
                </div>
                <button className='iconCopy'onClick={()=>onClickCopy(item.roomId.address)}>
                    <img src="./images/pages/bookingList/copy.svg" alt="copy"/>
                    <h5>주소 복사</h5>
                </button>
                    <KakaoMap props={item.roomId.address} index={index} />
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
                                <h5 className='checkInDate'>{`${formatDate(item.checkInDate)}`}&#160;&#160;&#160;{extractCheckInTime(item.roomId.notice[0][0].content)}</h5> 
                                {/* item.roomId.notice[0][0] */}
                            </div>
                            <div className='checkOutBox'>
                                <h5 className='CheckOut'>체크아웃</h5>
                                <h5 className='checkOutDate'>{`${formatDate(item.checkOutDate)}`}&#160;&#160;&#160;{extractCheckOutTime(item.roomId.notice[0][1].content)}</h5>
                            </div>
                            <div className='headCountBox'>
                                <h5 className='headCount'>인원</h5>
                                <h5 className='headContNum'>게스트 {item.guests}명,&#160;&#160;&#160;유아 {item.infants}명</h5>
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
                            <h5>{`${item.roomId.userId.name} | ${item.roomId.userId.phone}`}</h5>
                        </div>
                </div>
                {/* 체크인 방법 */}
                <div className='checkInTipWrapper'>
                        <div className='title'>
                            <img src="./images/pages/bookingList/key.svg" alt="key"/>
                            <h3>숙소 정보</h3>
                        </div>
                        <div className='data'>
                            <ul className='tipList'>
                                {/* 고정 */}
                                <li className='tipOne'>
                                도어락 셀프 체크인<br />(비밀번호는 호스트가 문자로 전달)
                                </li> 
                                <li className='tipTwo'>
                                  {item.roomId.convenience[0].con}
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
                            <span>₩{item.roomId.dayPrice} x {stayPeriod}박</span><span>₩{item.roomId.dayPrice*stayPeriod}</span>
                        </div>
                        <div className='calc'>
                            <span>청소비</span><span>￦ {item.roomId.cleanVat}</span>
                        </div>
                        <div className='calc'>
                            <span>서비스 수수료</span><span>￦ {serviceVat}</span>
                        </div>
                        {/* 구분선 */}
                        <div className='divisionLine'></div>
                        <div className='sum'>
                            <span>총 합계</span>
                            <span className='sumPrice'>￦ {total}</span>
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
                    체크인 시간인 {formatDate(item.checkInDate)} 오후 3:00 전에 
                    취소하시면, 
                    <br /> 부분 환불을 받으실 수 있습니다. 
                    <br />그 이후에 취소하시면 예약 대금이 환불되지 않습니다.
                    </p>
                </div>
                {/* 숙소 페이지로 이동 버튼 */}
                <div className="navToDetailPage">
                        <BasicButton  onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                            <div>
                                <Link to={`/detail?roomId=${item.roomId._id}`}><img src = { isHovered ? "./images/pages/bookingList/home.svg" : "./images/pages/bookingList/home_y.svg"} alt="home"/>숙소 페이지로 이동</Link> 
                            </div>
                        </BasicButton> 
                </div>
            </div>
            
        </div>
    </S.bookingDetailWrapper >
    );
};

export default BookingDetail;