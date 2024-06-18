import React from 'react';
import S from './style';

const Info = () => {
    return (
        <S.CategoryBox>
            <h3>
                예약 정보
            </h3>
            <div>
                <h4>
                    날짜
                </h4>
            </div>
            <div>
                <h4>
                    게스트
                </h4>
            </div>
            <S.CategoryBorder />
        </S.CategoryBox>
    );
};

export default Info