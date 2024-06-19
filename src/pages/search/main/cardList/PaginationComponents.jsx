import React from 'react';
import S from './style';

const PaginationComponents = () => {

    const pageNumber = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ];


    return (
        <S.pageNumberContaner>
            <S.PrevButton/>
            {
                pageNumber.map((page, i) => (
                    <S.PageButton key={i} onClick={(e) => console.log(e.target.innerText)}>
                        <div>{page}</div>
                    </S.PageButton>
                ))
            }
            <S.NextButton/>
        </S.pageNumberContaner>
    );
};

export default PaginationComponents;