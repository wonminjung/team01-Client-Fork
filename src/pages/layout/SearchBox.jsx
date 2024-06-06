import React, { useRef } from 'react';
import S from './style';
import SmallBox from './SmallBox';
import BigBox from './BigBox';

const SearchBox = () => {
    const boxRef = useRef(null);
    const searchRef = useRef(null);
    const smallSearchClickEvent = () => {
        searchRef.current.classList.add("big","ldown")
    }
    return (
        <S.SearchWrapper id="searchBox" ref={searchRef}>
            <SmallBox smallSearchClickEvent={smallSearchClickEvent}/>
            <BigBox ref={boxRef}/>
        </S.SearchWrapper>
    );
};

export default SearchBox;