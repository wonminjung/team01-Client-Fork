import React from 'react';
import S from './style';

const Info = () => {
    const stayingPeriod = '7월 15일 ~ 7월 19일'
    const guest = 7;
    return (
        <S.CategoryBox>
            <h3>
                예약 정보
            </h3>
            <div>
                <h4Strong>
                    날짜
                </h4Strong>
                <h4>
                    {stayingPeriod}
                </h4>
            </div>
            <br />
            <div>
                <h4Strong>
                    게스트
                </h4Strong>
                <h4>
                    게스트 {guest}명
                </h4>
            </div>
            <S.CategoryBorder />
        </S.CategoryBox>
    );
};

export default Info