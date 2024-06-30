import React, { useEffect } from 'react';

import S from './style';
import { useNavigate } from 'react-router-dom';



const NavSwiperComponents = (props) => {
    const { data, index, isNavActivate, setNavActivate, searchParams } = props;

    // 클릭한 카테로 이동시키기 위한 navigate
    const navigate = useNavigate();

    // 현재 URL의 카테 정보
    const cate = searchParams.get("cate");


    const clickCategory = (index) => {
        setNavActivate(index);
        navigate(`/search?cate=${data.cate}`);
    };
    
    // URL에 cate 변경될 때마다 실행
    useEffect(() => {
        if (data.cate === cate) {
            setNavActivate(index);
        }
    }, [cate])


    
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