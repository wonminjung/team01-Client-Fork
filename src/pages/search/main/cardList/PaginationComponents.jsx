import React from 'react';
import S from './style';

import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PaginationComponents = ({ currentPage, setCurrentPage, maxPage }) => {

    let pageNumber = [];
    for (let i = 0; i < maxPage; i++) {
        pageNumber[i] = i + 1;
    }

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
                <FontAwesomeIcon icon={faGreaterThan} />
            </S.NextButton>
        </S.pageNumberContaner>
    );
};

export default PaginationComponents;