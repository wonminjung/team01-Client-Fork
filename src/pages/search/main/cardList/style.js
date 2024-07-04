import styled, { css } from 'styled-components';
import theme from '../../../../global/theme';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';



// 해당 파일에서 여러번 쓰여서 만든 공용 스타일
const slideButtonStyle = css`
    width: 32px;
    height: 32px;
    display: none;
    justify-content: center;
    align-items: center;
    top: 50%;
    margin-top: 0;
    border-radius: 50%;
    background-color: white;
    transition: 0.3s;
`;

// 해당 파일에서 여러번 쓰여서 만든 공용 스타일
const slideButtonAfterStyle = css`
    color: ${theme.PALETTE.gray[300]};
    font-size: 14px;
    font-weight: ${theme.FONT_WEIGHT.bold};
`;

// 해당 파일에서 여러번 쓰여서 만든 공용 스타일
const slideButtonHoverStyle = css`
    background-color: ${theme.PALETTE.yellow};
    opacity: 1;
    transition: opacity 0.3s;

    &::after {
        color: white;
    }
`;


const S = {};
    /** CardListContainer.js 파일 스타일 섹션*/

    // 검색결과 페이지 왼쪽 컨테이너 디자인
    S.CardListContainer = styled.div`
        flex: 60%;
        height: calc(100vh - 180px);
        overflow: hidden;
        overflow-y: scroll;

        /* 스크롤바 디자인 */
        &::-webkit-scrollbar {
            width: 8px;
        }
        
        &::-webkit-scrollbar-thumb {
            background: ${theme.PALETTE.gray[200]};
            border-radius: 12px;
            
            &:hover {
                background: ${theme.PALETTE.yellow};
            }

        }
        
        &::-webkit-scrollbar-track {
            border-radius: 12px;
            background: ${theme.PALETTE.gray[100]};
        }
    `;

    S.SideMarginWrapper = styled.div`
        margin: 0 30px;
    `;

    // 숙박 총계
    S.AccommodationTotal = styled.div`
        margin: 24px 0;

        & > h6 {
            font-size: 12px;
        }
    `;

    // 여러 카드리스트 구조 잡아줄 포장지
    S.CardListsWrapper = styled.div`
        display: grid;
        /* grid-template-columns: repeat(auto-fill, minmax(calc(30% - 24px), 30%)); */
        grid-template-columns: repeat(auto-fill, minmax(calc(30% - 24px), 1fr));
        grid-auto-rows: minmax(5%, auto);
        gap: 24px;
    `;


    
    /** CardListComponents.jsx 파일 스타일 섹션 */
    S.Link = styled(Link)`
        text-decoration: none;
        color: black;
    `;
    
    // 각각의 카드리스트를 감싸는 컴포넌트 부모 요소
    S.CardListComponentsContainer = styled.div`
        display: flex;
        flex-direction: column;
        
        /* 카드리스트에 마우스 오버 시 슬라이드 버튼 */
        &:hover {
            .swiper-button-next, .swiper-button-prev {
                display: flex;
                opacity: 0.85;
            }

            .swiper-button-disabled {
                display: none;
            }

        }
    `;

    // 위시리스트 추가 버튼 컨테이너
    S.WishContainer = styled.div`
        position: relative;
        cursor: pointer;
    `;

    // 위시리스트에 없는 숙소일 경우 버튼 디자인
    S.HeartDisabled = styled.div`
        width: 25px;
        height: 25px;
        position: absolute;
        top: 20px;
        right: 19px;
        z-index: 100;

        & > img {
            object-fit: cover;
        }
    `;

    // 위시리스트에 있는 숙소일 경우 버튼 디자인
    S.HeartButtonWrapper = styled.div`
        position: relative;

        & > div {
            display: flex;
            position: absolute;
            width: 25px !important;
            height: 25px !important;
            top: 0 !important;
            right: 0 !important;
            z-index: 100;
        }

        & .heart {
            top: 20px !important;
            right: 19px !important;
        }
    `;

    // Swiper 라이브러리 import 해서 디자인
    S.Swiper = styled(Swiper)`
        width: 100%;
        border-radius: 20px;
        user-select: none;
        cursor: pointer;

        /* 슬라이드 하단에 현재 이미지 위치 표시한거 디자인 */
        & .swiper-pagination-bullet-active {
            background: white;
        }
        
        /* 슬라이드 하단에 현재 이미지 위치 표시한거 디자인 */
        & .swiper-pagination-bullet {
            background: white;
        }

        /* 슬라이드 이전 버튼 */
        & .swiper-button-prev {
            ${slideButtonStyle};
            left: 0;
            transform: translate(30%, -50%);
            
            /* 슬라이드 버튼 내 화살표 디자인 */
            &::after {
                ${slideButtonAfterStyle};
                transform: translate(-10%, 3.5%);
            }

            /* 마우스 오버시 디자인 */
            &:hover {
                ${slideButtonHoverStyle};
            }
        }
        
        /* 슬라이드 다음 버튼 */
        & .swiper-button-next {
            ${slideButtonStyle};
            right: 0;
            transform: translate(-30%, -50%);

            /* 슬라이드 버튼 내 화살표 디자인 */
            &::after {
                ${slideButtonAfterStyle};
                transform: translate(10%, 3.5%);
            }

            /* 마우스 오버시 디자인 */
            &:hover {
                ${slideButtonHoverStyle};
            }
            
        }

        /* 슬라이드 버튼 비활성화 */
        & .swiper-button-disabled {
            display: none;
        }
    `;

    // 카드리스트 내 이미지 감싸는 컴포넌트
    S.SwiperSlide = styled(SwiperSlide)`
        aspect-ratio: 6/4;
        display: flex;

        /* 카드리스트 내 이미지 디자인 */
        & > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    `;

    // 설명섹션 디자인
    S.DescriptionSection = styled.div`
        padding: 20px 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    `;

    // 설명 상단 디자인
    S.DescriptionHead = styled.div`
        display: flex;
        height: 80px;
        flex-direction: column;

        & > h6 {
            font-weight: ${theme.FONT_WEIGHT.bold};
            margin-bottom: 13px;
            font-size: 18px;
            line-height: 20px;
            letter-spacing: 0.6px;
            word-break: keep-all;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }
    `;

    // 주소
    S.Addr = styled.div`
        font-size: 14px;
        color: ${theme.PALETTE.gray[300]};
    `;

    // 설명 하단
    S.DescriptionBottom = styled.div`
        display: flex;
        justify-content: space-between;
    `;

    // 정보보기
    S.Reservation = styled.span`
        font-size: 12px;
        font-weight: ${theme.FONT_WEIGHT.bold};
        cursor: pointer;
    `;

    // 가격
    S.Price = styled.div`
        padding-left: 5px;
        font-size: 14px;
        font-weight: ${theme.FONT_WEIGHT.bold};
        color: ${theme.PALETTE.yellow};
    `;



    /** PaginationComponents.jsx 파일 스타일 섹션 */
    
    // 페이징 컨테이너 디자인
    S.pageNumberContaner = styled.nav`
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 72px;
        margin-bottom: 32px;
        user-select: none;
    `;

    // 페이지네이션 버튼 공용 스타일
    const paginationStyle = css`
        width: 32px;
        height: 32px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 4px;
        color: ${theme.PALETTE.yellow};
        font-weight: ${theme.FONT_WEIGHT.regular};
        cursor: pointer;
        
        &:hover {
            background-color: ${theme.PALETTE.yellow};
            color: white;
        }
    `;

    // 이전 버튼
    S.PrevButton = styled.div`
        ${paginationStyle};
        font-weight: ${theme.FONT_WEIGHT.regular};

        &.prevDisabled {
            opacity: 0.3;
            user-select: none;
            cursor: not-allowed;
        }
    `;

    // 다음 버튼
    S.NextButton = styled.div`
        ${paginationStyle};
        font-weight: ${theme.FONT_WEIGHT.regular};

        &.nextDisabled {
            opacity: 0.3;
            user-select: none;
            cursor: not-allowed;
        }
    `;

    // 페이지 버튼
    S.PageButton = styled.div`
        ${paginationStyle};

        &.pageActive {
            background-color: ${theme.PALETTE.yellow};
            color: white;
        }
    `;


export default S;