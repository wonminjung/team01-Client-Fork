import React from 'react';
import S from './style'

const InfoBox = () => {
    
    const name = "홍길동";
    const email = "12345@gmail.com";
    const phone = "010-1234-5678";

    return (
        <S.InfoBox>
            <div>
                <div>
                    <h2>실명</h2>
                    <h3>수정</h3>
                </div>
                <div>
                    <h3>{name}</h3>
                </div>
            </div>
            <div>
                <div>
                    <h2>이메일 주소</h2>
                    <h3>수정</h3>
                </div>
                <div>
                    <h3>{email}</h3>
                </div>
            </div>
            <div>
                <div>
                    <h2>전화번호</h2>
                    <h3>수정</h3>
                </div>
                <div>
                    <h3>{phone}</h3>
                </div>
            </div>
        </S.InfoBox>
    );
};

export default InfoBox;