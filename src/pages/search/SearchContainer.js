import React from 'react';
import NavSwiperContainer from './navigationBar/NavSwiperContainer';
import SearchMainContainer from './main/SearchMainContainer';
import ResetHeader from '../layout/ResetHeader';

const SearchContainer = () => {

    ResetHeader();

    return (
        <>
            <NavSwiperContainer/>
            <SearchMainContainer/>
        </>
    );
};

export default SearchContainer;