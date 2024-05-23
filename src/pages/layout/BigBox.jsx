import React from 'react';
import S from './style';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const BigBox = () => {
    return (
        <div className="bigBox">
            <form action="">
                <div className='locationBox'>
                    <div>여행지</div>
                    <div><input type="text" placeholder="여행지 검색"/></div>
                    <div className="locationPopup">
                        <div className="content">
                            asd
                        </div>
                    </div>
                </div>
                <span></span>
                <div className='checkInBox'>
                    <div>체크인</div>
                    <div>날짜 추가</div>
                </div>
                <span></span>
                <div className='checkOutBox'>
                    <div>체크아웃</div>
                    <div>날짜 추가</div>
                </div>
                <span></span>
                <div className='guestBox'>
                    <div>여행자</div>
                    <div>게스트 추가</div>
                </div>
                <S.SearchBtn>
                    <Link to={"/detail"}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Link>
                </S.SearchBtn>
            </form>
        </div>
    );
};

export default BigBox;