import React, { useEffect } from 'react';

const DetailContainer = () => {
    useEffect(()=>{
        const main = document.querySelector("main");
        const search = document.querySelector("#searchBox");
        main.firstChild.id !== "main"? search.classList.remove("big","down") : search.classList.add("big","down");
    })
    return (
        <div>
            
        </div>
    );
};

export default DetailContainer;