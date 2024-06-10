import React from 'react';
import S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SmallBox = ({smallSearchClickEvent}) => {
    return (
        <div className="smallBox">
            <div><button type='button' onClick={smallSearchClickEvent}>장소선택</button></div>
            <span></span>
            <div><button type='button' onClick={smallSearchClickEvent}>날짜선택</button></div>
            <span></span>
            <div><button type='button' onClick={smallSearchClickEvent}>게스트 추가</button></div>
            <S.SearchBtn>
                <div className='searchBtn' onClick={smallSearchClickEvent}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
            </S.SearchBtn>
        </div>
    );
};

export default SmallBox;