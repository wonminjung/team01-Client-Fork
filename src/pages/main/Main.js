import React, { useEffect } from 'react';
import BasicButton from '../../components/button/BasicButton';
import BasicInput from '../../components/input/BasicInput';
import BasicCheckbox from '../../components/checkbox/BasicCheckbox';
import Header from '../layout/Header';
import S from './style';

const Main = () => {

    const inputPlaceholder = "아무거나 입력해주세요!!";
    const tagId = "banana";
    
    useEffect(()=>{
        // 선언문
        const header = document.querySelector("header");
        const search = document.querySelector("#searchBox");
        const scrollEvent = () => {
            let offsetTop = document.documentElement.scrollTop;
            console.log(offsetTop);
            if(offsetTop>500){
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
        window.addEventListener("scroll",scrollEvent);
        return ()=>{
            window.removeEventListener("scroll",scrollEvent);
        }
    },[])
    
    return (
        <>
            <Header/>
            <S.MainContainer>
                메인
                <ul>
                    <li>li1</li>
                    <li>li2</li>
                </ul>
                <div style={{margin:"30px"}}>
                    <BasicButton>
                        버튼
                    </BasicButton>

                    <div style={{padding:"15px"}}></div>
                    <BasicButton style={{width:"1000px"}}>
                        더보기
                    </BasicButton>

                    <div style={{padding:"15px"}}></div>
                    <BasicButton style={{width:"100px", borderRadius: "40px", backgroundColor: "black"}}>
                        <div style={{display:"flex", justifyContent: "center", alignItems: "center"}}>
                            <div style={{width: "30px", height: "30px", backgroundImage: "url(./global/components/checkbox/check-solid.svg)"}}></div>
                            <div style={{width: "30px", height: "30px", backgroundImage: "url(./global/components/checkbox/check-solid.svg)"}}></div>
                        </div>
                    </BasicButton>

                    <div style={{padding:"15px"}}></div>
                    <BasicInput placeholder={inputPlaceholder}/>

                    <div style={{padding:"15px"}}></div>
                    <BasicCheckbox tagId={tagId}/>바나나

                    <div style={{padding:"15px"}}></div>
                    
                </div>
            </S.MainContainer>
        </>
    );
};

export default Main;