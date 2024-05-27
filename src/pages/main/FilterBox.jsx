import React from 'react';
import BasicButton from '../../components/button/BasicButton';
import S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';

const FilterBox = () => {
    return (
        <S.CategoryFilter className='filterBox'>
            <BasicButton>
                <FontAwesomeIcon icon={faSliders} />필터
            </BasicButton>
        </S.CategoryFilter>
    );
};

export default FilterBox;