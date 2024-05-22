import React from 'react';
import S from './style';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBox = () => {
    return (
        <S.SearchWrapper id="searchBox">
            <div className="smallBox">
                <div><button>장소선택</button></div>
                <span></span>
                <div><button>날짜선택</button></div>
                <span></span>
                <div><button>게스트 추가</button></div>
                <S.SearchBtn>
                    <Link to={"/detail"}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Link>
                </S.SearchBtn>
            </div>
            <div className="bigBox">
                <div>
                    <div>여행지</div>
                    <div><input type="text" placeholder="여행지 검색"/></div>
                </div>
                <span></span>
                <div>
                    <div>체크인</div>
                    <div>날짜 추가</div>
                </div>
                <span></span>
                <div>
                    <div>체크아웃</div>
                    <div>날짜 추가</div>
                </div>
                <span></span>
                <div>
                    <div>여행자</div>
                    <div>게스트 추가</div>
                </div>
                <S.SearchBtn>
                    <Link to={"/detail"}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Link>
                </S.SearchBtn>
            </div>
            
        </S.SearchWrapper>
    );
};

export default SearchBox;