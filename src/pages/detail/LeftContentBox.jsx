import React from 'react';
import S from './style';

const LeftContentBox = ({data}) => {
    console.log(data);
    const {address,convenience,discription,roomData,title} = data;
    return (
        <S.LeftBox>
            <div className="titleBox">
                <h6>{address}의 별장 전체</h6>
                <ul>
                    <li className='dIcon user'>최대 인원 {roomData.maxUser}명</li>
                    <li className='dIcon room'>침실 {roomData.bedroom}개</li>
                    <li className='dIcon bed'>침대 {roomData.bed}개</li>
                    <li className='dIcon bath'>욕실 {roomData.bathroom}개</li>
                </ul>
            </div>
        </S.LeftBox>
    );
};

export default LeftContentBox;