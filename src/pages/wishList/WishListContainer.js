import React from 'react';
import S from './style';
import WishItemContents from './WishItemContents';
import ResetHeader from '../layout/ResetHeader';
import RemoveHeader from '../layout/RemoveHeader';
import ScrollEvent from '../layout/ScrollEvent';

const WishListContainer = () => {
    ResetHeader();
    ScrollEvent();
    // RemoveHeader();
    return (
        <S.WishListContainer>
            <S.PageTitle>위시리스트</S.PageTitle>
                <WishItemContents />
        </S.WishListContainer>
    );
};

export default WishListContainer;
