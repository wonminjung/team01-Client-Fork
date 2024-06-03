import React, { useState } from 'react';

import S from './style';

const NavSwiperComponents = (props) => {
    const { data, index, isNavActivate, setNavActivate } = props;

    return (
        <>
            { index === 0 ?
                (
                    <>
                        <S.CategoryWrapper
                            className={isNavActivate === 0 ? "navButtonChecked" : ""}
                            onClick={() => setNavActivate(0)}
                        >
                        <S.CategoryImg src={data.imgUrl}/>
                        <S.CategoryName>{data.name}</S.CategoryName>
                        </S.CategoryWrapper>
                        <div className="searchResultAfterLine"/>
                    </>
                )
                :
                (
                    <S.CategoryWrapper 
                        className={isNavActivate === index ? "navButtonChecked" : ""}
                        onClick={() => setNavActivate(index)}
                    >
                        <S.CategoryImg src={data.imgUrl}/>
                        <S.CategoryName>{data.name}</S.CategoryName>
                    </S.CategoryWrapper>
                )
            }
        </>

    );
};

export default NavSwiperComponents;