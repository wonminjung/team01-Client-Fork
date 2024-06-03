import styled, { css } from "styled-components";


import { Swiper, SwiperSlide } from 'swiper/react';
import theme from "../../../global/theme";
import BasicButton from "../../../components/button/BasicButton";

const navSlideButtonStyle = css`
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    margin-top: 0;
    border-radius: 50%;
    background-color: white;
    border: 1px solid ${theme.PALETTE.gray[200]};
    transition: 0.3s;
`;

const slideButtonAfterStyle = css`
    color: ${theme.PALETTE.gray[300]};
    font-size: 14px;
    font-weight: ${theme.FONT_WEIGHT.bold};
`;

const slideButtonHoverStyle = css`
    background-color: ${theme.PALETTE.yellow};
    transition: opacity 0.3s;
    border: none;

    &::after {
        color: white;
    }
`;

const S = {};
    // NavSwiperContainer.js
    S.NavBfAfContainer = styled.div`
        position: fixed;
        background-color: white;
        width: 100%;
        height: 78px;
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

    S.NavLeftRightPadding = styled.div`
        padding: 0 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: inherit;
    `;

    S.FilterButton = styled(BasicButton)`
        width: 82px;
        justify-content: space-evenly;
        border-radius: 14px
    `;

    S.Swiper = styled(Swiper)`
        width: 100%;
        height: 78px;
        margin: 0;

        & > .swiper-button-prev {
            ${navSlideButtonStyle}
            left: 0;
            transform: translate(50%, -50%);
            
            &::after {
                ${slideButtonAfterStyle};
                transform: translate(-10%, 3.5%);
            }

            &:hover {
                ${slideButtonHoverStyle};
            }
            
        }
        
        & > .swiper-button-next {
            ${navSlideButtonStyle}
            right: 0;
            transform: translate(-50%, -50%);
            
            &::after {
                ${slideButtonAfterStyle};
                transform: translate(10%, 3.5%);
            }

            &:hover {
                ${slideButtonHoverStyle};
            }

        }

        & > .swiper-button-disabled {
            display: none;
        }

    `;

    S.SwiperSlide = styled(SwiperSlide)`
        height: 48px;
        margin-top: 16px;
        margin-bottom: 12px;
        display: flex;
        justify-content: center;

        .searchResultAfterLine {
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
            opacity: 0.5;
            position: absolute;
            background-color: ${theme.PALETTE.yellow};
            top: 24px;
        }

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
    `;

export default S;