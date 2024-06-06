import React from 'react';
import S from './style';

const DetailMapBox = ({address}) => {
    return (
        <S.DetailMapBox>
            <h6>숙소 위치</h6>
            <p>{address}</p>
            <div id="Map"></div>
        </S.DetailMapBox>
    );
};

export default DetailMapBox;