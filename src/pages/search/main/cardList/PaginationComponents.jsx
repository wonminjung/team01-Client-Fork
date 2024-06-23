import React, { useState } from 'react';
import S from './style';

const PaginationComponents = () => {

    const pageNumber = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ];

    const [ currentPage, setCurrentPage ] = useState(1);
    const firstPage = pageNumber[0];
    const lastPage = pageNumber[pageNumber.length - 1];
    
    console.log(lastPage);

    return (
        <S.pageNumberContaner>
            <S.FirstButton onClick={(e) => {
                console.log(e.target.innerText);
            }}>
                <div>
                    &lt;
                </div>
            </S.FirstButton>
            <S.PrevButton onClick={(e) => console.log(e.target.innerText)}>
                <div>
                    &lt;
                </div>
            </S.PrevButton>
            {
                pageNumber.map((page, i) => (
                    <S.PageButton key={i} onClick={(e) => console.log(e.target.innerText)}>
                        <div>{page}</div>
                    </S.PageButton>
                ))
            }
            <S.NextButton onClick={(e) => console.log(e.target.innerText)}/>
            <S.LastButton onClick={(e) => console.log(e.target.innerText)}/>
        </S.pageNumberContaner>
    );
};

export default PaginationComponents;