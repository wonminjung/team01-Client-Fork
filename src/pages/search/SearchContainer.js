import React, { useState } from 'react';
import NavSwiperContainer from './navigationBar/NavSwiperContainer';
import SearchMainContainer from './main/SearchMainContainer';
import ResetHeader from '../layout/ResetHeader';
import ScrollEvent from '../layout/ScrollEvent';
import S from './style';
import ModalFilterBox from './ModalFilterBox';

const SearchContainer = () => {

    ScrollEvent();
    ResetHeader();

    // 필터버튼 클릭 상태
   const [ isFilterActivate, setFilterActivate ] = useState(false);
    // 필터 클릭 함수
    const handlFilterStatus = () => {
        setFilterActivate(!isFilterActivate);
    };

    

    return (
        <>
            <NavSwiperContainer handlFilterStatus={handlFilterStatus} />
            <SearchMainContainer />
            <ModalFilterBox isFilterActivate={isFilterActivate} handlFilterStatus={handlFilterStatus} />
        </>
    );
};

export default SearchContainer;