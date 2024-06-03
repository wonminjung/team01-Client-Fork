import styled, { css } from 'styled-components';
import theme from '../../../../global/theme';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';


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

const slideButtonAfterStyle = css`
    color: ${theme.PALETTE.gray[300]};
    font-size: 14px;
    font-weight: ${theme.FONT_WEIGHT.bold};
`;

const slideButtonHoverStyle = css`
    background-color: ${theme.PALETTE.yellow};
    opacity: 1;
    transition: opacity 0.3s;

    &::after {
        color: white;
    }
`;

const S = {};

    // CardListContainer.js
    S.CardListContainer = styled.div`
        width: 62vw;
        position: relative;
        /* height: calc(100vh - 310px); */
        height: calc(100vh - 180px);
        overflow: hidden;
        overflow-y: scroll;

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
        margin: 0 24px;
    `;

    S.AccommodationTotal = styled.div`
        margin: 24px 0;

        & > h6 {
            font-size: 12px;
        }
    `;

    S.CardListsWrapper = styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(calc(30% - 24px), auto));
        grid-auto-rows: minmax(5%, auto);
        gap: 24px;
    `;


    
    // CardListComponents.jsx
    S.Link = styled(Link)`
        text-decoration: none;
        color: black;
    `;
    
    S.CardListComponentsContainer = styled.div`
        display: flex;
        flex-direction: column;

        &:hover {
            .swiper-button-next, .swiper-button-prev {
                display: flex;
                opacity: 0.6;
            }

            .swiper-button-disabled {
                display: none;
            }
        }
    `;

    S.Swiper = styled(Swiper)`
        width: 100%;
        border-radius: 20px;

        & .swiper-pagination-bullet-active {
            background: white;
        }

        & .swiper-pagination-bullet {
            background: white;
        }

        & .swiper-button-prev {
            ${slideButtonStyle};
            left: 0;
            transform: translate(30%, -50%);
            
            &::after {
                ${slideButtonAfterStyle};
                transform: translate(-10%, 3.5%);
            }

            &:hover {
                ${slideButtonHoverStyle};
            }
        }
        
        & .swiper-button-next {
            ${slideButtonStyle};
            right: 0;
            transform: translate(-30%, -50%);

            &::after {
                ${slideButtonAfterStyle};
                transform: translate(10%, 3.5%);
            }

            &:hover {
                ${slideButtonHoverStyle};
            }
        }

        & .swiper-button-disabled {
            display: none;
        }
    `;

    S.SwiperSlide = styled(SwiperSlide)`
        aspect-ratio: 5/3;
        display: flex;

        &>img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    `;

    S.DescriptionSection = styled.div`
        padding: 20px 0;
        text-align: center;

        &>h6 {
            font-weight: ${theme.FONT_WEIGHT.bold};
            margin-bottom: 13px;
            font-size: 20px;
        }
    `;

    S.AddrPrice = styled.div`
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
        align-items: center;

        &>div:first-child  {
            padding-right: 5px;
            font-size: 14px;
            color: ${theme.PALETTE.gray[300]};
        }
        
        &>div:last-child {
            padding-left: 5px;
            font-size: 14px;
            color: ${theme.PALETTE.yellow};
        }
    `;

    S.Reservation = styled.div`
        font-size: 12px;
        font-weight: ${theme.FONT_WEIGHT.bold};
    `;



    // NavigatePageComponents.jsx
    S.pageNumberContaner = styled.nav`
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 72px;
        margin-bottom: 32px;
        user-select: none;
    `;

    S.PrevButton = styled.div`

    `;

    S.NextButton = styled.div`

    `;

    S.PageButton = styled.div`
        width: 32px;
        height: 32px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 4px;
        cursor: pointer;
        
        &:hover {
            background-color: ${theme.PALETTE.gray[100]};
        }

    `;


export default S;