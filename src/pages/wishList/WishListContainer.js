import React from 'react';
import WishItem from './WishItem';
import S from './style';

const WishListContainer = () => {
    return (
        <S.WishListContainer>
            <ul>
                <WishItem />
            </ul>
        </S.WishListContainer>
    );
};

export default WishListContainer;