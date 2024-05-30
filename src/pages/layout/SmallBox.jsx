import React from 'react';
import S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SmallBox = () => {
    return (
        <div className="smallBox">
            <div><button>장소선택</button></div>
            <span></span>
            <div><button>날짜선택</button></div>
            <span></span>
            <div><button>게스트 추가</button></div>
            <S.SearchBtn>
                <Link to={"/search"}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Link>
            </S.SearchBtn>
        </div>
    );
};

export default SmallBox;