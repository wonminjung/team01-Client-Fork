import React from 'react';
import { FadeLoader } from 'react-spinners';

const Spinner = () => {
    return (
        <div>
            <h3>로딩중 입니다...</h3>
            <FadeLoader />
        </div>
    );
};

export default Spinner;