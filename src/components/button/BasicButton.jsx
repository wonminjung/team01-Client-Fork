import React from 'react';
import S from './style';

const BasicButton = ({children, ...rest}) => {
    return (
        <S.Button {...rest}>
            {children}
        </S.Button>
    );
};

export default BasicButton;