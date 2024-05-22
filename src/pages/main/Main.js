import React, { useEffect } from 'react';
import BasicButton from '../../components/button/BasicButton';
import BasicInput from '../../components/input/BasicInput';
import BasicCheckbox from '../../components/checkbox/BasicCheckbox';

const Main = () => {

    const inputPlaceholder = "아무거나 입력해주세요!!";
    const tagId = "banana";

    useEffect(()=>{
        const main = document.querySelector("main");
        const search = document.querySelector("#searchBox");
        const header = document.querySelector("header");
        const scrollEvent = ()=>{
            const top = document.documentElement.scrollTop;
            if(top>500){
                search.classList.remove("big","down")
                header.style.position = "sticky"
            }else{
                search.classList.add("big","down");
                header.style.position = "relative"
            }
        }
        if(main.firstChild.id === "main"){
            search.classList.add("big","down");
            console.log("has main")
        }else{
            search.classList.remove("big","down");
        }
        window.addEventListener('scroll', scrollEvent);
    })
    
    return (
        <div id='main'>
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
        </div>
    );
};

export default Main;