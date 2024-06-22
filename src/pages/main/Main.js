import React, { useEffect } from 'react';
import S from './style';
import Banner from './MainBanner';
import Category from './CategorySlider';
import CategoryContents from './CategoryContents';
import TextBanner from './TextBanner';

const Main = () => {
    
    useEffect(()=>{
        // 선언문
        const header = document.querySelector("header");
        const search = document.querySelector("#searchBox");
        header.style.display = "flex";
        // 스크롤 이벤트시
        const scrollEvent = () => {
            let offsetTop = document.documentElement.scrollTop;
            // offset 400 이상일때 검색바 위로 작게붙이기
            if(offsetTop>400){
                header.style.position = "sticky";
                search.classList.remove("big","down","ldown");
            }else{
                header.style.position = "relative";
                search.classList.add("big","down");
            }
        }

        // 메인 진입시 헤더 디자인 변경
        let offsetTop = document.documentElement.scrollTop;
        if(offsetTop>400){
            header.style.position = "sticky";
            search.classList.remove("big","down","ldown");
        }else{
            header.style.position = "relative";
            search.classList.remove("ldown");
            search.classList.add("big","down");
        }
        // 메인 진입시 스크롤 맨 위로 이동
        window.scrollTo({ top: 0, behavior: "instant" });
        
        // 스크롤 이벤트
        window.addEventListener("scroll",scrollEvent);
        return ()=>{
            window.removeEventListener("scroll",scrollEvent);
        }
    },[])
    
    return (
        <S.MainContainer>
            <Banner />
            <TextBanner />
            <S.CategoryContainer>
                <Category />
            </S.CategoryContainer>
            <CategoryContents />
        </S.MainContainer>
    );
};

export default Main;