import React from 'react';
import NavSwiperContainer from './navigationBar/NavSwiperContainer';
import SearchMainContainer from './main/SearchMainContainer';
import ResetHeader from '../layout/ResetHeader';
import ScrollEvent from '../layout/ScrollEvent';

const SearchContainer = () => {

    ScrollEvent();
    ResetHeader();

    return (
        <>
            <NavSwiperContainer/>
            <SearchMainContainer/>
        </>
    );
};

export default SearchContainer;