import React from 'react';
import S from './style';
import KakaoMap from '../../components/kakaomap/KakaoMap';

const DetailMapBox = ({address}) => {
    return (
        <S.DetailMapBox>
            <h6>숙소 위치</h6>
            <p>{address}</p>
            <KakaoMap props={address}/>
        </S.DetailMapBox>
    );
};

export default DetailMapBox;