import { useEffect } from 'react';

// 메인을 거쳐온 상태가 변경된 헤더를 안보이게 처리
const RemoveHeader = () => {
    useEffect(()=>{
        const header = document.querySelector("header");
        header.style.display = "none";
    })
    return ;
};
export default RemoveHeader;