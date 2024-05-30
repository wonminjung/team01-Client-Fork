import React from 'react';
import S from './style';
import WishItemContents from './WishItemContents';

const WishListContainer = () => {
    return (
        <S.WishListContainer>
            <S.PageTitle>위시리스트</S.PageTitle>
                <WishItemContents />
        </S.WishListContainer>
    );
};

export default WishListContainer;
