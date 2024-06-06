import { useEffect } from 'react';

const ScrollEvent = () => {
    useEffect(()=>{
        // 선언문
        const header = document.querySelector("header");
        const search = document.querySelector("#searchBox");

        // 스크롤 이벤트
        const scrollEvent = () => {
            let offsetTop = document.documentElement.scrollTop;
            // offset 0 이상일때 검색바 위로 작게붙이기
            if(offsetTop>0){
                header.style.position = "sticky";
                search.classList.remove("big","down","ldown");
            }
        }

        // 스크롤 이벤트
        window.addEventListener("scroll",scrollEvent);
        return ()=>{
            window.removeEventListener("scroll",scrollEvent);
        }
    })
    return ;
};

export default ScrollEvent;