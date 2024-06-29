import React from 'react';

import S from './style';
import { useNavigate } from 'react-router-dom';



const NavSwiperComponents = (props) => {
    const { data, index, isNavActivate, setNavActivate } = props;

    const navigate = useNavigate();

    const clickCategory = (index) => {
        setNavActivate(index);
        navigate(`/search?cate=${data.cate}`);
    };


    
    return (
        <>
            {
                data.tag === "검색결과" ?
                (
                    <>
                        <S.CategoryWrapper
                            className={isNavActivate === 0 ? "navButtonChecked" : ""}
                            onClick={() => clickCategory(0)}
                        >
                        <S.CategoryImg src={data.img}/>
                        <S.CategoryName>{data.tag}</S.CategoryName>
                        </S.CategoryWrapper>
                        <div className="searchResultAfterLine"/>
                    </>
                )
                :
                (
                    <S.CategoryWrapper 
                        className={isNavActivate === index ? "navButtonChecked" : ""}
                        onClick={() => clickCategory(index)}
                    >
                        <S.CategoryImg src={data.img}/>
                        <S.CategoryName>{data.tag}</S.CategoryName>
                    </S.CategoryWrapper>
                )
            }
        </>
    );
};

export default NavSwiperComponents;