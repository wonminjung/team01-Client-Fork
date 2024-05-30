import styled, { css } from "styled-components";


import { Swiper, SwiperSlide } from 'swiper/react';
import theme from "../../../global/theme";
import BasicButton from "../../../components/button/BasicButton";

const commonStyle = css`
    height: 48px;
    margin-top: 16px;
    margin-bottom: 12px;
    display: flex;
    justify-content: center;
`;

const S = {};
    // NavSwiperContainer.js
    S.NavBfAfContainer = styled.div`
        position: fixed;
        width: 100%;
        user-select: none;

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

    S.NavLeftRightPadding = styled.div`
        padding: 0 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `;

    S.FilterButton = styled(BasicButton)`
        width: 82px;
        justify-content: space-evenly;
        border-radius: 14px
    `;

    S.NavSwiperWrapper = styled.div`
        width: 88vw;
        height: 78px;
    `;

    S.Swiper = styled(Swiper)`
        height: 100%;

        & > .swiper-button-disabled {
            display: none;
        }

        & > .swiper-button-prev {
            /* display: none; */
        }

        & > .swiper-button-next {
            /* display: none; */
        } 
    `;

    S.SwiperSlide = styled(SwiperSlide)`
        ${commonStyle};
    `;

    S.SearchResult = styled(SwiperSlide)`
        ${commonStyle};

        & > .afterLine {
            display: flex;
            justify-content: flex-end;
            width: 35%;

            &::after {
                content: "";
                display: block;
                width: 1px;
                height: 100%;
                background-color: ${theme.PALETTE.gray[200]};
            }
        }
    `;

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
        
        &:hover > div::after {
            content: "";
            width: 100%;
            height: 2px;
            cursor: pointer;
            opacity: 0.5;
            position: absolute;
            background-color: ${theme.PALETTE.yellow};
            top: 26px;
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
        font-size: 14px;
    `;

export default S;