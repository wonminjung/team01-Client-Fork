import styled, { css } from "styled-components";

import { Swiper, SwiperSlide } from 'swiper/react';
import theme from "../../../global/theme";
import BasicButton from "../../../components/button/BasicButton";



// 해당 파일에서 여러번 쓰여서 만든 공용 스타일
const navSlideButtonStyle = css`
    width: 60px;
    height: 60px;
    top: 50%;
    margin-top: 0;
    
    transition: 0.3s;
    transform: translateY(-50%);
`;

// 해당 파일에서 여러번 쓰여서 만든 공용 스타일
const slideButtonAfterStyle = css`
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.PALETTE.gray[300]};
    font-size: 14px;
    font-weight: ${theme.FONT_WEIGHT.bold};
    border: 1px solid ${theme.PALETTE.gray[200]};
    border-radius: 50%;
    background: white;
    transition: transform, background-color 0.3s;
    box-shadow: 0 0 3px ${theme.PALETTE.gray[300]};
`;

// 해당 파일에서 여러번 쓰여서 만든 공용 스타일
const slideButtonHoverStyle = css`
    background-color: ${theme.PALETTE.yellow};
    transition: opacity 0.3s;
    border: none;
    color: white;

    &::after {
        color: white;
    }
`;


const S = {};
    /** NavSwiperContainer.js 파일 스타일 섹션*/ 

    // 네이게이션바 위,아래 테두리 컨테이너
    S.NavBfAfContainer = styled.div`
        position: fixed;
        background-color: white;
        width: 100%;
        height: 80px;
        user-select: none;
        z-index: 10;

        &::before {
            content: "";
            display: block;
            height: 1px;
            box-shadow: 0 0 2px 0 ${theme.PALETTE.gray[200]} inset;
            /* border: 1px solid ${theme.PALETTE.gray[200]}; */
        }
        &::after {
            content: "";
            display: block;
            height: 1px;
            box-shadow: 0 0 2px 0 ${theme.PALETTE.gray[200]} inset;
            /* border: 1px solid ${theme.PALETTE.gray[200]}; */
        }
    `;

    // 네비게이션바 사이드 안쪽여백 컨테이너
    S.NavLeftRightPadding = styled.div`
        padding: 0 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `;

    // BasicButton 컴포넌트 import 해서 필터 버튼 디자인
    S.FilterButton = styled(BasicButton)`
        width: 84px;
        justify-content: space-evenly;
        border-radius: 20px;

    `;

    /* Swiper 라이브러리 태그 import 해서 디자인 */
    S.Swiper = styled(Swiper)`
        width: 100%;
        height: 78px;
        margin: 0;

        /* 슬라이드 이전 버튼 */
        & > .swiper-button-prev {
            ${navSlideButtonStyle}
            background: linear-gradient(90deg, white 50%, transparent);
            left: 0;
            
            /* 화살표 디자인 */
            &::after {
                ${slideButtonAfterStyle};
            }

            /* 마우스 오버시 화살표 디자인 변경 */
            &:hover:after {
                ${slideButtonHoverStyle};
            }

        }
        
        /* 슬라이드 다음 버튼 */
        & > .swiper-button-next {
            ${navSlideButtonStyle}
            background: linear-gradient(270deg, white 50%, transparent);
            right: 0;
            
            /* 화살표 디자인 */
            &::after {
                ${slideButtonAfterStyle};
            }
            
            /* 마우스 오버시 화살표 디자인 변경 */
            &:hover:after {
                ${slideButtonHoverStyle};
            }


        }

        /* 슬라이드 이동버튼 비활성화 */
        & > .swiper-button-disabled {
            display: none;
        }


        & div.swiper-slide:first-child {
            width: 74px !important;
        }

    `;

    /* SwiperSlide 태그 import 해와서 디자인 */
    S.SwiperSlide = styled(SwiperSlide)`
        height: 48px;
        margin-top: 16px;
        margin-bottom: 12px;
        display: flex;
        justify-content: center;

        /* 검색결과 카테고리 오른쪽에 줄 부모 요소 */
        .searchResultAfterLine {
            display: flex;
            justify-content: flex-end;
            flex: auto;
            
            /* 검색결과 카테고리 오른쪽에 줄 디자인 */
            &::after {
                content: "";
                display: block;
                width: 1px;
                height: 100%;
                background-color: ${theme.PALETTE.gray[200]};
            }
        }
    `;

    /* 각각의 카테고리에 담고 있는 아이콘, 이름 포장지 */
    S.CategoryWrapper = styled.span`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        opacity: 0.75;

        &:hover {
            opacity: 1;
        }
        
        /* 카테고리에 마우스 오버시 하위의 div에 after로 하단 밑줄 */
        &:hover > div::after {
            content: "";
            width: 100%;
            height: 2px;
            opacity: 0.5;
            position: absolute;
            background-color: ${theme.PALETTE.yellow};
            top: 24px;
            border-radius: 8px;
        }

        /* 카테고리 클릭 되었을 때 */
        &.navButtonChecked {
            opacity: 1;

            & > div::after {
                content: "";
                width: 100%;
                height: 2px;
                opacity: 1;
                position: absolute;
                background-color: ${theme.PALETTE.yellow};
                top: 24px;
                border-radius: 8px;
            }
        }
    `;

    S.CategoryImg = styled.img`
        width: 24px;
        height: 24px;
    `;

    S.CategoryName = styled.div`
        position: relative;
        display: flex;
        flex-direction: column;
        font-size: 12px;
        white-space: nowrap;
    `;

export default S;