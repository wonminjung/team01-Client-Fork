import React, { useEffect, useState } from 'react';
import S from './style';
import { useNavigate } from 'react-router-dom';

import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PaginationComponents = ({currentLocation}) => {

    const pageNumber = [ 1, 2, 3, 4, 5, 6, 7 ];
    const navigate = useNavigate();

    // 현재 페이지 상태
    const [ currentPage, setCurrentPage ] = useState(1);

    // 제일 첫 페이지, 마지막 페이지
    const firstPage = pageNumber[0];
    const lastPage = pageNumber[pageNumber.length - 1];

    // 페이지 클릭 함수
    const pagenationClickEvent = (e) => {
        setCurrentPage(+e.currentTarget.innerText); // Number(e.currnetTarget.innerText)
    };

    // 이전 페이지 클릭 함수
    const prevClickEvent = () => {
        if (currentPage > firstPage) {
            setCurrentPage(currentPage - 1);
        }
    };

    // 다음 페이지 클릭 함수
    const nextClickEvent = () => {
        if (currentPage < lastPage) {
            setCurrentPage(currentPage + 1);
        }
    };

    // 현재 페이지가 변경될 때마다 함수실행
    useEffect(() => {
        // const nextLocationSearch = `&page=${currentPage}`;
        console.log(currentPage);
        // navigate(currentLocation.pathname + currentLocation.search + nextLocationSearch);
        // GET 요청 보낼 URI
        // console.log(currentLocation.pathname + currentLocation.search + `&page=${currentPage}`);
        const beforeLocationSearch = `&page=${currentPage}`;
        
    }, [currentPage]);


    return (
        <S.pageNumberContaner>
            <S.PrevButton onClick={prevClickEvent} className={currentPage === firstPage ? "prevDisabled" : ""}>
                <FontAwesomeIcon icon={faLessThan} />
            </S.PrevButton>

            {
                pageNumber.map((page, i) => (
                    <S.PageButton className={currentPage === page ? "pageActive" : ""} key={i} onClick={pagenationClickEvent}>
                        <div>{page}</div>
                    </S.PageButton>
                ))
            }

            <S.NextButton onClick={nextClickEvent} className={currentPage === lastPage ? "nextDisabled" : ""}>
                <FontAwesomeIcon icon={faGreaterThan} />1
            </S.NextButton>
        </S.pageNumberContaner>
    );
};

export default PaginationComponents;