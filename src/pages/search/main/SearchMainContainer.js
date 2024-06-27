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

    // 최대 페이징 개수
    const [ maxPage, setMaxPage ] = useState(0);

    const now = new Date().toLocaleDateString().split(" ").join("");

    const [ searchParams, setSearchParams ] = useSearchParams();
    const cate = searchParams.get("cate") ?? "searchResult";
    const lPrice = searchParams.get("lPrice") ?? 0;
    const gPrice = searchParams.get("gPrice") ?? 1000000;
    const maxUser = searchParams.get("maxUser") ?? 0;
    const bedroom = searchParams.get("bedroom") ?? 0;
    const bed = searchParams.get("bed") ?? 0;
    const bathroom = searchParams.get("bathroom") ?? 0;
    const val = searchParams.get("val") ?? "";
    const sdate = searchParams.get("sdate") ?? now;
    const edate = searchParams.get("edate") ?? now;
    const guests = searchParams.get("guests") ?? 0;


    // URI 변경될 때마다 렌더링
    useEffect(() => {
        if (!isFilterActivate) {
            const params = createSearchParams(
                {
                    cate: cate, val: val, sdate: sdate, edate: edate, guests: guests, lPrice: lPrice, gPrice: gPrice, 
                    maxUser: maxUser, bedroom: bedroom, bed: bed, bathroom: bathroom, page: currentPage
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

        }
    }, [cate, val, sdate, edate, guests, lPrice, gPrice, maxUser, bedroom, bed, bathroom, currentPage]);



    return (
        <>
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
            <ModalFilterBox 
                searchParams={searchParams} setSearchParams={setSearchParams} currentPage={currentPage}
                setContentData={setContentData} isFilterActivate={isFilterActivate} handleFilterStatus={handleFilterStatus} 
                setMaxPage={setMaxPage} setSearchResultMessage={setSearchResultMessage} setRoomsCount={setRoomsCount} roomsCount={roomsCount}
            />
        </>
    );
};

export default SearchMainContainer;