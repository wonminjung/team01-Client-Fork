import { styled } from 'styled-components';
import theme from '../../global/theme';

const S = {}
const PALETTE = theme.PALETTE;

S.MainContainer = styled.div`
    height: 200vh;
    /* 배너 스타일 */
    & .bannerContainer{
        /* 슬라이드 스타일 */
        & .swiper-slide{
            height: 500px;
            background-color: #ddd;
            display: flex;
            justify-content: center;
            align-items: center;
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
S.CategoryContainer = styled.div`
    padding: 24px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    & .swiper-slide{
        & .categoryCard{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: 0.3s;
            opacity: 0.4;
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
`
S.CategoryFilter = styled.div`
    & button{
        width: 84px;
        height: 48px;
        justify-content: space-around;
        color: ${PALETTE.black};
    }
`
export default S;