import React, { useEffect } from 'react';
import S from './style';
import Banner from './MainBanner';
import Category from './CategorySlider';

const Main = () => {

    useEffect(()=>{
        // 선언문
        const header = document.querySelector("header");
        const search = document.querySelector("#searchBox");
        
        // 스크롤 이벤트
        const scrollEvent = () => {
            let offsetTop = document.documentElement.scrollTop;
            // offset 400 이상일때 검색바 위로 작게붙이기
            if(offsetTop>400){
                header.style.position = "sticky";
                search.classList.remove("big","down");
            }else{
                header.style.position = "relative";
                search.classList.add("big","down");
            }
        }

        // 메인 헤더 디자인 변경
        header.style.position = "relative";
        search.classList.add("big","down");

        // 스크롤 이벤트
        window.addEventListener("scroll",scrollEvent);
        return ()=>{
            window.removeEventListener("scroll",scrollEvent);
        }
    },[])
    
    return (
        <S.MainContainer>
            <Banner />
            <S.CategoryContainer>
                <Category />
            </S.CategoryContainer>
        </S.MainContainer>
    );
};

export default Main;