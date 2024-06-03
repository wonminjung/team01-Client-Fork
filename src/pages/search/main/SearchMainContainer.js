import React from 'react';
import CardListContainer from './cardList/CardListContainer';
import MiniDetailComponents from './miniDetail/MiniDetailComponents';
import S from './style';

const SearchMainContainer = () => {
    return (
        <S.SearchMainContainer>
            <CardListContainer/>
            <MiniDetailComponents/>
        </S.SearchMainContainer>
    );
};

export default SearchMainContainer;