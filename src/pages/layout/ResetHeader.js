import { useEffect } from "react";

// 메인을 거쳐온 상태가 변경된 헤더를 리셋
const ResetHeader = () => {
    
    useEffect(()=>{
        const header = document.querySelector("header");
        const search = document.querySelector("#searchBox");
        header.style.display = "flex";
        header.style.position = "sticky";
        search.classList.remove("big","down","ldown");

        let offset = document.body.style.top;
        document.body.style.position = "unset";
        document.body.style.top = "unset";
        document.body.style.overflowY = "unset";
        document.body.style.width = "unset";
        window.scrollTo(0, offset.slice(0,-2) * -1);
    },[])
    return ;
};
export default ResetHeader;