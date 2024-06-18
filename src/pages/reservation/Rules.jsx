import React from 'react';
import S from './style';

const Rules = () => {
    return (
        <S.CategoryBox>
            <h3>
                기본 규칙
            </h3>
            <div style={{margin: "0 50px 30px"}}>
                훌륭한 게스트가 되기 위한 몇 가지 간단한 규칙을 지켜주실 것을 모든 게스트에게 당부드리고 있습니다.
            </div>
            <div style={{margin: "0 50px 50px"}}>
                <ul>
                    <li>숙소 이용규칙을 준수하세요.</li>
                    <li>호스트의 집도 자신의 집처럼 아껴주세요.</li>
                </ul>
            </div>
            <S.CategoryBorder />
        </S.CategoryBox>
    );
};

export default Rules