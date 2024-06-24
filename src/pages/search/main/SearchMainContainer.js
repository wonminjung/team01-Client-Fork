import React, { useEffect, useState } from 'react';
import CardListContainer from './cardList/CardListContainer';
import MiniDetailComponents from './miniDetail/MiniDetailComponents';
import S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { createSearchParams, useSearchParams } from 'react-router-dom';
import ModalFilterBox from './ModalFilterBox';

const SearchMainContainer = ({ currentPage, setCurrentPage, isFilterActivate, handleFilterStatus }) => {

    // 숙소 목록
    const [ contentData, setContentData ] = useState([]);

    // 검색 숙소 개수
    const [ roomsCount, setRoomsCount ] = useState(0);

    // CardList에서 클릭한 컴포넌트 MiniDetail에 띄우기 위한 상태(인덱스값)
    const [ clickCardListIndex, setClickCardListIndex ] = useState(0);

    // 검색결과가 없을 때 띄울 메시지 상태
    const [ searchResultMessage, setSearchResultMessage ] = useState("");


    const [ maxPage, setMaxPage ] = useState(0);


    const [ searchParams, setSearchParams ] = useSearchParams();
    const cate = searchParams.get("cate");
    const lPrice = searchParams.get("lPrice");
    const gPrice = searchParams.get("gPrice");
    const maxUser = searchParams.get("maxUser");
    const bedroom = searchParams.get("bedroom");
    const bed = searchParams.get("bed");
    const bathroom = searchParams.get("bathroom");
    const val = searchParams.get("val");
    const sdate = searchParams.get("sdate");
    const edate = searchParams.get("edate");
    const guests = searchParams.get("guests");

    // 검색창에서 날짜 선택 안 했을때 default 날짜
    const defaultSdate = "2024.01.31";
    const defaultEdate = "2024.12.31";


    // URI 변경될 때마다 렌더링
    useEffect(() => {
        // 쿼리스트링 설정.. null이나 undi 면 ?? 뒤에 값을 기본값으로 설정
        const params = createSearchParams(
            { 
                cate: cate ?? "searchResult", 
                val: val ?? "",
                sdate: sdate ?? defaultSdate,
                edate: edate ?? defaultEdate, 
                guests: guests ?? 0, 
                lPrice: lPrice ?? 0, 
                gPrice: gPrice ?? 1000000, 
                maxUser: maxUser ?? 0, 
                bedroom: bedroom ?? 0, 
                bed: bed ?? 0, 
                bathroom: bathroom ?? 0,
                page: currentPage
            }
        );
        setSearchParams(params);

        // 숙소 요청
        const getRoomList = async () => {
            const response = await fetch(`http://localhost:8000/room/search?${params.toString()}`);
            const rooms = await response.json();

            return rooms;
        };
        getRoomList()
        .then((res) => {
            
            if (!res.searchResult) {
                // 검색결과 없거나 서버와 통신 안된다는 메시지 받아서 설정
                setSearchResultMessage(res.message);
            } else {
                // 숙소 전체 결과 개수
                setRoomsCount(res.roomsCount);

                // 페이지 당 표시할 숙소로 나눠서 최대 페이지 설정
                setMaxPage(Math.floor(res.roomsCount / 18) + 1);
                
                // body 스크롤 초기화
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
            // 숙소 결과 상태에 담기
            setContentData(res.rooms);
        })
        .catch((err) => {
            console.error(err);
            setSearchResultMessage("서버와 통신 실패");
        });
    }, [cate, val, sdate, edate, guests, lPrice, gPrice, maxUser, bedroom, bed, bathroom, currentPage]);



    return (
        <>
            <ModalFilterBox 
                searchParams={searchParams} setSearchParams={setSearchParams} contentData={contentData} 
                setContentData={setContentData} isFilterActivate={isFilterActivate} handleFilterStatus={handleFilterStatus} 
                setMaxPage={setMaxPage} setSearchResultMessage={setSearchResultMessage} setRoomsCount={setRoomsCount} roomsCount={roomsCount}
            />
            <S.SearchMainContainer>
            {
                contentData && contentData.length > 0 ? 
                    (   // 숙소 데이터 가져왔을 때
                        <>
                            <CardListContainer
                                contentData={contentData} 
                                roomsCount={roomsCount}
                                setClickCardListIndex={setClickCardListIndex}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                                maxPage={maxPage}
                            />
                            <MiniDetailComponents contentData={contentData} clickCardListIndex={clickCardListIndex} />
                        </>
                    )
                    :
                    (   // 숙소 데이터 못 가져왔을 때
                        <S.NoSearchResult>
                            <FontAwesomeIcon icon={faSearch} />
                            <h6>{searchResultMessage}</h6>
                        </S.NoSearchResult>
                    )
            }
            </S.SearchMainContainer>
        </>
    );
};

export default SearchMainContainer;