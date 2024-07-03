import React from 'react';
import S from './style';

const Info = ({datas}) => {
    const {roomId, newSdate, newEdate, guests, infants} = datas;
    const stayingPeriod = `${newSdate.getMonth() + 1}월 ${newSdate.getDate()}일 ~ ${newEdate.getMonth() + 1}월 ${newEdate.getDate()}일`
    const guest = guests;
    const infant = infants;
    console.log(typeof guest, typeof infant);
    return (
        <S.CategoryBox>
            <h3>
                예약 정보
            </h3>
            <div>
                <h4 className='h4Strong'>
                    날짜
                </h4>
                <h4>
                    {stayingPeriod}
                </h4>
            </div>
            <br />
            <div>
                <h4 className='h4Strong'>
                    게스트
                </h4>
                <h4>
                    게스트 {guest}명
                </h4>
            </div>
            <br />
            <div style={infant === '0' ? {display:"none"} : {}}>
                <h4 className='h4Strong'>
                    유아
                </h4>
                <h4>
                    유아 {infant}명
                </h4>
            </div>
            <S.CategoryBorder />
        </S.CategoryBox>
    );
};

export default Info