import React from 'react'
import S from './style'

const RightSide = ({datas, days}) => {
    // fetch()
    console.log(typeof datas.dayPrice, typeof days, typeof datas.cleanVat);
    const dayPrice = datas.dayPrice;
    const sum = dayPrice * days + datas.cleanVat;

    return (
        <S.SideBox className='rightBox'>
            <div>
                <div className='imgBox'>
                    <img src={`${datas.roomImg}`} alt="roomImg" />
                </div>
                <div>
                    <h3>
                        {datas.title}
                    </h3>
                </div>
            </div>
            <div>
                <div>
                    <h3>요금 세부정보</h3>
                </div>
                <div>
                    <h4>₩ {dayPrice.toLocaleString()} x {days}박</h4>
                    <h4>₩ {(dayPrice * days).toLocaleString()}</h4>
                </div>
                <div>
                    <h4>청소비</h4>
                    <h4>₩ {datas.cleanVat.toLocaleString()}</h4>
                </div>
                <div>
                    <h4>수수료</h4>
                    <h4>₩ {(sum / 10).toLocaleString()}</h4>
                </div>
            </div>
            <div>
                <div>
                    <h4 className='h4Strong'>총 합계<span>(KRW)</span></h4>
                    <h4 className='h4Strong'>₩ {(sum + sum/10).toLocaleString()}</h4>
                </div>
            </div>
        </S.SideBox>
    );
};

export default RightSide;