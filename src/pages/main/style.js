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
    & .swiper-slide{
        & .categoryCard{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            opacity: 0.5;
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
                }
            }
        }
    }
`
export default S;