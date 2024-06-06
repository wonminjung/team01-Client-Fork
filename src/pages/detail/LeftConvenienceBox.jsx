import React from 'react';

const LeftConvenienceBox = ({convenience, convenienceIcon}) => {
    return (
        <div className='convenienceBox'>
            <h6>숙소 편의시설</h6>
            <ul>
                {convenience.map((li,i)=><li key={i} className={`dIcon ${convenienceIcon[i].icon}`}>{li.con}</li>)}
            </ul>
        </div>
    );
};

export default LeftConvenienceBox;