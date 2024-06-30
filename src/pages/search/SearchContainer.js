import React, { useState } from 'react';
import NavSwiperContainer from './navigationBar/NavSwiperContainer';
import SearchMainContainer from './main/SearchMainContainer';
import ResetHeader from '../layout/ResetHeader';
import ScrollEvent from '../layout/ScrollEvent';
import { useSearchParams } from 'react-router-dom';



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

    const [ searchParams, setSearchParams ] = useSearchParams();



    return (
        <>
            <NavSwiperContainer 
                handleFilterStatus={handleFilterStatus} setCurrentPage={setCurrentPage} isFilterActivate={isFilterActivate} searchParams={searchParams} />
            <SearchMainContainer 
                currentPage={currentPage} setCurrentPage={setCurrentPage} searchParams={searchParams} setSearchParams={setSearchParams}
                isFilterActivate={isFilterActivate} handleFilterStatus={handleFilterStatus}
            />
        </>
    );
};

export default SearchContainer;