import React from 'react';
import S from './style';

const BasicCheckbox = ({tagId, ...rest}) => {
    return (
        <S.CheckboxWrapper>
            <S.Checkbox type="checkbox" id={tagId} name={tagId} {...rest}/>
        </S.CheckboxWrapper>
    );
};

export default BasicCheckbox;