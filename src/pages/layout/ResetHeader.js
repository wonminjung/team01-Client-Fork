import { useEffect } from "react";

// 메인을 거쳐온 상태가 변경된 헤더를 리셋
const ResetHeader = () => {
    useEffect(()=>{
        const header = document.querySelector("header");
        const search = document.querySelector("#searchBox");
        header.style.position = "sticky";
        search.classList.remove("big","down","ldown");
    })
    return ;
};
export default ResetHeader;