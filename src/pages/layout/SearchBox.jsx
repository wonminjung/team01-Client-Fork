import React from 'react';
import S from './style';
import SmallBox from './SmallBox';
import BigBox from './BigBox';

const SearchBox = () => {
    return (
        <S.SearchWrapper id="searchBox" >
            <SmallBox/>
            <BigBox/>
        </S.SearchWrapper>
    );
};

export default SearchBox;