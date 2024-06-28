import { styled } from 'styled-components';
import theme from '../../global/theme';
const S = {}
const PALETTE = theme.PALETTE;

S.MainContainer = styled.div`
    position: relative;
    /* 배너 스타일 */
    & .bannerContainer{
        /* 슬라이드 스타일 */
        & .swiper-slide{
            height: 500px;
            background-color: #ddd;
            display: flex;
            justify-content: center;
            align-items: center;
            filter: brightness(0.65);
            & img{
                width: 100%;
                user-select: none;
            }
        }
        /* 이전 다음 버튼 스타일 */
        & .swiper-button-prev, .swiper-button-next{
            color: #fff;
            transition: 0.3s;
        }
        & .swiper-button-prev:hover, .swiper-button-next:hover{
            transform: scale(1.5);
        }
        & .swiper-button-prev:active, .swiper-button-next:active{
            transform: scale(1.2);
        }
        & .swiper-button-prev::after, .swiper-button-next::after{
            font-size: 20px;
        }
        /* 페이지네이션 스타일 */
        & .swiper-pagination-bullet{
            background-color: #fff;
            opacity: 0.5;
            box-shadow: 0 0 4px rgba(242,172,41,1);
        }
        /* 페이지네이션 활성화 스타일 */
        & .swiper-pagination-bullet-active{
            background-color: #fff;
            opacity: 1;
        }
        /* 자동슬라이드 진행 스타일 */
        & .autoplay-progress {
        position: absolute;
        right: 16px;
        bottom: 16px;
        z-index: 10;
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 14px;
        }
        /* 자동슬라이드 진행바 스타일 */
        & .autoplay-progress svg {
            --progress: 0;
            position: absolute;
            left: 0;
            top: 0px;
            z-index: 10;
            width: 100%;
            height: 100%;
            stroke-width: 2px;
            stroke: #fff;
            fill: none;
            stroke-dashoffset: calc(125.6px * (1 - var(--progress)));
            stroke-dasharray: 125.6;
            transform: rotate(-90deg);
        }
    }
`
S.TextBannerBox = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap');
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    & div:first-child{
        position: absolute;
        left: 50%;
        transform: translate(-50%, 155px);
        width: 700px;
        overflow: hidden;
        height: 100px;
        text-align: center;
        & span{
            font-family: "Cinzel", serif !important;
            font-size: 80px;
            color: #fff;
            font-weight: 600;
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
            transform: translateY(100px);
            position: relative;
            display: inline-block;
            animation-name: headlineAnimation;
            animation-duration: 1.5s;
            animation-delay: 1.5s;
            animation-fill-mode: forwards;
        }
    }
    & hr{
        width: 0%;
        height: 1px;
        display: block;
        border: none;
        background-color: #fff;
        position: absolute;
        left: 50%;
        transform: translate(-50%, 255px);
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        animation-name: hrAnimation;
        animation-duration: 1s;
        animation-delay: 0.5s;
        animation-fill-mode: forwards;
    }
    & div:last-child{
        position: absolute;
        left: 50%;
        transform: translate(-50%, 256px);
        width: max-content;
        overflow: hidden;
        height: 35px;
        & p{
            font-family: "Cinzel", serif !important;
            font-size: 10px;
            letter-spacing: 22px;
            font-weight: 600;
            text-transform: uppercase;
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
            color: #fff;
            transform: translateY(-12px);
            animation-name: pAnimation;
            animation-duration: 1.5s;
            animation-delay: 1.5s;
            animation-fill-mode: forwards;
            & span{
                letter-spacing: 0;
            }
        }
    }
    @keyframes headlineAnimation{
        0%{
            transform: translateY(100px);
        }
        100%{
            transform: translateY(0);
        }
    }
    @keyframes hrAnimation{
        0%{
            width: 0%;
        }
        100%{
            width: 60%;
        }
    }
    @keyframes pAnimation{
        0%{
            transform: translateY(-12px);
        }
        100%{
            transform: translateY(22px);
        }
    }
`
/* 카테고리 컨테이너 */
S.CategoryContainer = styled.div`
    padding: 24px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    /* 카테고리 슬라이드 */
    & .swiper-slide{
        /* 카테고리 카드 */
        & .categoryCard{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: 0.3s;
            opacity: 0.4;
            color: ${PALETTE.black};
            /* 카드 활성화시 */
            &.active{
                opacity: 1;
            }
            &>div{
                &:first-child{
                    width: 24px;
                    height: 24px;
                    margin-bottom: 10px;
                    & img{
                        width: 100%;
                    }
                }
                &:last-child{
                    font-size: 12px;
                    font-weight: 500;
                    width: 100%;
                    text-align: center;
                    white-space: nowrap;
                }
            }
            &:hover{
                transform: scale(1.07);
            }
        }
        
    }
    & .swiper-button-prev, .swiper-button-next{
        width: 60px;
        height: 100%;
        background: linear-gradient(270deg, #fff 50%, transparent);
        top: 50%;
        margin: auto;
        transform: translateY(-50%);
    }
    & .swiper-button-prev{
        left: 0;
        background: linear-gradient(90deg, #fff 50%, transparent);
    }
    & .swiper-button-next{
        right: 0;
    }
    & .swiper-button-prev:hover, .swiper-button-next:hover{
        transform: translateY(-50%);
        &::after{
            color: #fff;
            transform: scale(1.1);
            background-color: ${PALETTE.yellow};
            border: 1px solid ${PALETTE.yellow};
            box-shadow: 0 0 3px ${PALETTE.yellow};
        }
    }
    & .swiper-button-prev::after, .swiper-button-next::after{
        font-size: 16px;
        font-weight: bold;
        color: ${PALETTE.gray[300]};
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid ${PALETTE.gray[200]};
        border-radius: 50%;
        box-shadow: 0 0 3px ${PALETTE.gray[300]};
        background: #fff;
        transition: transform, background-color 0.3s;
    }
    & .swiper-button-prev.swiper-button-disabled, .swiper-button-next.swiper-button-disabled{
        opacity: 0;
    }
    & .filterBackground{
        display: none;
        position: fixed;
        width: 100%;
        height: 100vh;
        background-color: rgba(0,0,0,0.5);
        z-index: 1000;
        top: 0%;
        left: 0;
        &.active{
            display: block;
        }
    }
    & .filterContent{
        display: none;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 500px;
        max-height: calc(100vh - 300px);
        z-index: 1000;
        overflow: hidden;
        background-color: #fff;
        border-radius: 20px;
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
        &.active{
            display: block;
        }
        & .topBox{
            border-bottom: 1px solid ${PALETTE.gray[200]};
            position: relative;
            padding: 20px 0;
            & .closeFilterBtn{
                position: absolute;
                top: 0;
                left: 0;
                border: none;
                background-color: transparent;
                padding: 20px;
                font-size: 16px;
                color: ${PALETTE.black};
                cursor: pointer;
            }
            & .titleBox{
                text-align: center;
                & h6{
                    color: ${PALETTE.black};
                    cursor: default;
                }
            }
        }
        & .filterListBox{
            padding: 20px 15px 15px;
            height: calc(100vh - 414px);
            overflow-y: scroll;
            &::-webkit-scrollbar{
                width: 6px;
            }
            &::-webkit-scrollbar-thumb{
                background: ${PALETTE.yellow};
                border-radius: 3px;
            }
            & .priceFilter{
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                padding-bottom: 35px;
                & h6{
                    width: 100%;
                    font-size: 20px;
                    font-weight: bold;
                    margin-bottom: 40px;
                }
                & .range-slider{
                    height: 5px;
                    width: 400px;
                }
                & .range-slider .range-slider__thumb{
                    width: 20px;
                    height: 20px;
                }
                & .range-slider-yellow {
                    background: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%ffff' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")#ddd;
                }
                & .range-slider-yellow .range-slider__range {
                    background: #ffbf00;
                    transition: height 0.3s;
                }
                & .range-slider-yellow .range-slider__thumb {
                    background: #faa307;
                    transition: transform 0.3s;
                }
                & .range-slider-yellow .range-slider__thumb[data-active] {
                    transform: translate(-50%, -50%) scale(1.1);
                }
                & .range-slider-yellow .range-slider__range[data-active] {
                    height: 5px;
                }
                & .priceText{
                    padding-top: 30px;
                    display: flex;
                    width: 400px;
                    justify-content: space-between;
                    align-items: center;
                    &>div{
                        position: relative;
                        display: flex;
                        flex-direction: column;
                        &::before{
                            content: '￦';
                            position: absolute;
                            left: 5px;
                            top: 24px;
                            z-index: 1;
                            font-size: 14px;
                            color: ${PALETTE.gray[300]};
                        }
                        & span{
                            font-size: 14px;
                            display: inline-block;
                            height: 22px;
                        }
                    }
                    & input{
                        width: 140px;
                        border: none;
                        outline: none;
                        font-size: 16px;
                        border-bottom: 1px solid ${PALETTE.gray[200]};
                        padding: 0 0 5px 25px;
                        letter-spacing: 1px;
                        color: ${PALETTE.black};
                        font-weight: bold;
                        position: relative;
                        color: ${PALETTE.yellow};
                    }
                }
            }
            & .roomFilter{
                & h6{
                    width: 100%;
                    font-size: 20px;
                    font-weight: bold;
                    margin-bottom: 30px;
                }
                & .filterList{
                    & ul{
                        & li{
                            margin-bottom: 20px;
                            & p{
                                display: flex;
                                align-items: center;
                                margin-bottom: 10px;
                                color: ${PALETTE.black};
                                & svg{
                                    margin-right: 5px;
                                    font-size: 16px;
                                    & path{
                                        fill: ${PALETTE.yellow}
                                    }
                                }
                            }
                            & .numberBtnBox{
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                width: 100%;
                                & input[type=radio]{
                                    appearance: none;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    background-color: #fff;
                                    border: 1px solid ${PALETTE.gray[200]};
                                    padding: 10px 0;
                                    width: 60px;
                                    border-radius: 8px;
                                    cursor: pointer;
                                    font-size: 14px;
                                    transition: 0.2s;
                                    &::before{
                                        content: attr(label);
                                        color: ${PALETTE.gray[300]};
                                        transition: 0.2s;
                                    }
                                }
                                & input[type=radio]:checked{
                                    border: 1px solid ${PALETTE.yellow};
                                    background-color: ${PALETTE.yellow};
                                    &::before{
                                        color: #fff;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        & .bottomBox{
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-top: 1px solid ${PALETTE.gray[200]};
            &>div{
                & button{
                    padding: 20px 20px;
                    color: ${PALETTE.black}
                }
            }
            & .filterRemoveBox{
                & button{
                    border: none;
                    background-color: transparent;
                    cursor: pointer;
                }
            }
            & .filterSubmitBox{
                padding-right: 6px;
                & button{
                    padding: 12px 20px;
                    height: inherit;
                    width: inherit;
                    border-radius: 15px;
                    &:hover{
                        color: #fff;
                    }
                }
            }
        }
    }
`
S.CategoryFilter = styled.div`
    & button{
        width: 84px;
        height: 48px;
        justify-content: space-around;
        color: ${PALETTE.black};
    }
`
S.CategoryContentBox = styled.div`
    display: flex;
    padding: 0 50px 50px;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    min-height: 720px;
    & .content{
        width: 50%;
        padding: 10px;
        transition: 0.3s;
        position: relative;
        &:hover{
            transform: scale(1.02);
        }
        @media(min-width: 1000px){
            width: calc(100% / 3);
        }
        @media(min-width: 1300px){
            width: calc(100% / 4);
        }
        @media(min-width: 1550px){
            width: calc(100% / 5);
        }
        @media(min-width: 1900px){
            width: calc(100% / 6);
        }
        & a{
            color: ${PALETTE.black};
            & .imgBox{
                & .swiper-slide{
                    aspect-ratio: 5/3;
                    border-radius: 20px;
                    overflow: hidden;
                    & img{
                        width: 100%;
                        height: inherit;
                        object-fit: cover;
                        border-radius: 20px;
                    }
                }
                & .swiper-pagination-bullet{
                    background-color: #fff;
                    opacity: 0.4;
                }
                & .swiper-pagination-bullet-active{
                    background-color: #fff;
                    opacity: 1;
                }
                &:hover{
                    & .swiper-button-prev, .swiper-button-next{
                        display: flex;
                    }
                }
                & .swiper-button-prev, .swiper-button-next{
                    display: none;
                    width: 60px;
                    height: 60px;
                    top: 50%;
                    transform: translateY(-50%);
                    margin-top: 0;
                    transition: opacity 0.3s;
                    &::after{
                        font-size: 14px;
                        color: ${PALETTE.gray[300]};
                        background-color: #fff;
                        width: 30px;
                        height: 30px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border: 1px solid ${PALETTE.gray[200]};
                        border-radius: 50%;
                        font-weight: bold;
                        transition: 0.3s;
                    }
                }
                & .swiper-button-prev, .swiper-button-next{
                    &:hover::after{
                        border: ${PALETTE.yellow};
                        background-color: ${PALETTE.yellow};
                        color: #fff;
                    }
                }
                & .swiper-button-prev{
                    left: 0;
                }
                & .swiper-button-next{
                    right: 0;
                }
                & .swiper-button-prev.swiper-button-disabled, .swiper-button-next.swiper-button-disabled{
                    opacity: 0;
                }
            }
            & .textBox{
                padding: 20px 10px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 155px;
                &>div:last-child{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    & .price{
                        color: ${PALETTE.yellow};
                        display: inline-block;
                        margin-left: 10px;
                        font-weight: bold;
                        letter-spacing: 0.8px;
                    }
                }
                & .titleBox{
                    font-size: 20px;
                    margin-bottom: 13px;
                    font-weight: bold;
                    & h6{
                        line-height: 22px;
                        letter-spacing: 0.6px;
                        word-break: keep-all;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                    }
                }
                & .addAndPriceBox{
                    font-size: 14px;
                    margin-bottom: 28px;
                    & .address{
                        color: ${PALETTE.gray[300]};
                    }
                }
                & .linkBox{
                    font-size: 12px;
                    font-weight: bold;
                }
            }
        }
        & .emptyHeartBtn{
            position: absolute;
            top: 34px;
            right: 34px;
            z-index: 1;
            color: #fff;
            filter: drop-shadow(0px 0px 3px #F2AC29);
            background-color: transparent;
            border: 0;
            width: 25px;
            height: 25px;
            cursor: pointer;
            & svg{
                font-size: 25px;
            }
        }
        &>div{
            & button{
                position: absolute;
                top: 0;
                right: 10px;
                z-index: 1;
            }
        }
    }
    & .filtered0{
        width: 100%;
        min-height: 670px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        & svg{
            font-size: 40px;
            margin-bottom: 30px;
            & path{
                color: ${PALETTE.gray[200]};
            }
        }
        & h6{
            color: ${PALETTE.gray[200]};
        }
    }
`
export default S;