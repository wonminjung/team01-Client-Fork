import React from 'react'
import S from './style';

const PrevButton = () => {
    
    return (
        <div className='prevButton' onClick={()=>{
            window.history.back();
        }}/>
    );
};

export default PrevButton