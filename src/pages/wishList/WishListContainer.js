import React from 'react';
import S from './style';
import WishItemContents from './WishItemContents';
import ResetHeader from '../layout/ResetHeader';
import RemoveHeader from '../layout/RemoveHeader';

const WishListContainer = () => {
    ResetHeader();
    // RemoveHeader();
    return (
        <S.WishListContainer>
            <S.PageTitle>위시리스트</S.PageTitle>
                <WishItemContents />
        </S.WishListContainer>
    );
};

export default WishListContainer;
