import React from 'react';
import S from './style';

const BasicInput = ({...rest}) => {
    return (
        <S.Input type="text" {...rest}/>
    );
};

export default BasicInput;