import { faHand } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import S from './style';
import BasicButton from '../../components/button/BasicButton';

const NotBooking = () => {
    return (
            <S.NotBookingWrapper>
                <div className="textBox">
                    <div className="iconBox">
                       <img src="./images/pages/bookingList/hand.svg"  />
                    </div>
                    <div className="text">
                        <h3>
                            아직 예약된 여행이 없습니다!
                        </h3>
                        <p> 여행 가방에 쌓인 먼지를 털어내고 다른 여행 계획을
                            세워보세요.
                        </p>
                    </div>
                    <div className="navToMainPage">
                        <BasicButton>
                            <Link to={'/main'}>숙소 검색하기</Link>
                        </BasicButton> 
                    </div>
                </div>
                <div className="imgBox">
                    <img src="./images/pages/bookingList/notBooking.webp"/>
                </div>
            </S.NotBookingWrapper>

    );
};

export default NotBooking;