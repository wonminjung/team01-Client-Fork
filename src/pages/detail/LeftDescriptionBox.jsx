import React, { useState } from 'react';
import BasicButton from '../../components/button/BasicButton';

const LeftDescriptionBox = ({description}) => {
    const [state, setState] = useState(0);
    const readMore = (e) => {
        setState(state === 1? 0 : 1);
    }
    return (
        <div className='descriptionBox'>
            <h6>숙소 설명</h6>
            <p className={state === 0? "" : "active"}>{description}</p>
            <BasicButton onClick={readMore}>{state === 0? "더보기":"줄이기"}</BasicButton>
        </div>
    );
};

export default LeftDescriptionBox;