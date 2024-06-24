import React, { useEffect, useState } from 'react';
import CardListContainer from './cardList/CardListContainer';
import MiniDetailComponents from './miniDetail/MiniDetailComponents';
import S from './style';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchMainContainer = () => {

    const [ contentData, setContentData ] = useState([]);
    // 현재 URI정보를 객체로 저장
    const currentLocation = useLocation();

    // CardList에서 클릭한 컴포넌트 MiniDetail에 띄우기 위한 상태(인덱스값)
    const [ clickCardListIndex, setClickCardListIndex ] = useState(0);

    // 검색결과가 없을 때 띄울 메시지 상태
    const [ searchResultMessage, setSearchResultMessage ] = useState("");

    // URI 변경될 때마다 실행
    useEffect(() => {
        console.log(currentLocation);
        const getRoomList = async () => {
            const response = await fetch(`http://localhost:8000/room/search${currentLocation.search}`);
            const rooms = await response.json();

            return rooms;
        };
        getRoomList()
        .then((res) => {
            if (!res.searchResult) {
                setSearchResultMessage(res.message);
            } else {
                setContentData(res.rooms);
            }      
        })
        .catch((err) => {
            console.error(err);
            setSearchResultMessage("서버와 통신 실패");
        });
    }, [currentLocation]);



    return (
        <S.SearchMainContainer>
        {
            contentData && contentData.length > 0 ? 
                (
                    <>
                        <CardListContainer contentData={contentData} currentLocation={currentLocation} setClickCardListIndex={setClickCardListIndex} />
                        <MiniDetailComponents contentData={contentData} clickCardListIndex={clickCardListIndex} />
                    </>
                )
                :
                (
                    <S.NoSearchResult>
                        <FontAwesomeIcon icon={faSearch} />
                        <h6>{searchResultMessage}</h6>
                    </S.NoSearchResult>
                )
        }
        </S.SearchMainContainer>
    );
};

export default SearchMainContainer;