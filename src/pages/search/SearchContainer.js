import React, { useState } from 'react';
import NavSwiperContainer from './navigationBar/NavSwiperContainer';
import SearchMainContainer from './main/SearchMainContainer';
import ResetHeader from '../layout/ResetHeader';
import ScrollEvent from '../layout/ScrollEvent';



const SearchContainer = () => {

    ScrollEvent();
    ResetHeader();

    // 현재 페이지 상태
    const [ currentPage, setCurrentPage ] = useState(1);

    // 필터버튼 클릭 상태
   const [ isFilterActivate, setFilterActivate ] = useState(false);
    // 필터 클릭 함수
    const handleFilterStatus = () => {
        setFilterActivate(!isFilterActivate);
    };



    return (
        <>
            <NavSwiperContainer handleFilterStatus={handleFilterStatus} setCurrentPage={setCurrentPage} isFilterActivate={isFilterActivate} />
            <SearchMainContainer 
                currentPage={currentPage} setCurrentPage={setCurrentPage} 
                isFilterActivate={isFilterActivate} handleFilterStatus={handleFilterStatus}
            />
        </>
    );
};

export default SearchContainer;