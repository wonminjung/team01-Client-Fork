import React, { useState } from 'react';
import NavSwiperContainer from './navigationBar/NavSwiperContainer';
import SearchMainContainer from './main/SearchMainContainer';
import ResetHeader from '../layout/ResetHeader';
import ScrollEvent from '../layout/ScrollEvent';
import { useSearchParams } from 'react-router-dom';



const SearchContainer = () => {

    ScrollEvent();
    ResetHeader();

    // URI 정보 가져오기
    const [ searchParams, setSearchParams ] = useSearchParams();

    // 필터버튼 클릭 상태
   const [ isFilterActivate, setFilterActivate ] = useState(false);
    // 필터 클릭 함수
    const handleFilterStatus = () => {
        setFilterActivate(!isFilterActivate);
    };



    return (
        <>
            <NavSwiperContainer handleFilterStatus={handleFilterStatus} isFilterActivate={isFilterActivate} searchParams={searchParams} />
            <SearchMainContainer 
                searchParams={searchParams} setSearchParams={setSearchParams}
                isFilterActivate={isFilterActivate} handleFilterStatus={handleFilterStatus}
            />
        </>
    );
};

export default SearchContainer;