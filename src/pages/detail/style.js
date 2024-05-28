import styled from "styled-components";
import theme from "../../global/theme";

const S = {}
const PALETTE = theme.PALETTE;
/* 디테일 컨테이너 디자인 */
S.DetailContainer = styled.div`
    width: 100%;
`
/* 디테일 래퍼 디자인 */
S.DetailWrapper = styled.div`
    max-width: 1080px;
    width: 100%;
    margin: 0 auto;
    padding: 70px 0;
    /* 타이틀박스 디자인 */
    & .contentTitleBox{
        text-align: center;
        margin-bottom: 50px;
        & h1{
            font-size: 32px;
            font-weight: bold;
        }
    }
    /* 이미지 슬라이드 디자인 */
    & .contentSlide{
        padding: 40px 0;
        margin-bottom: 76px;
        /* 페이지네이션 불릿 */
        & .swiper-pagination-bullet{
            margin: 0 3px;
        }
        /* 페이지네이션 액티브 불릿 */
        & .swiper-pagination-bullet-active{
            background-color: ${PALETTE.yellow};
        }
    }
    /* 슬라이드 디자인 */
    & .swiper-slide{
        border-radius: 20px;
        user-select: none;
        height: 240px;
        /* 이미지 */
        & img{
            width: 100%;
            height: inherit;
            object-fit: cover;
            border-radius: 20px;
        }
    }
`
/* 디테일 상세박스 디자인 */
S.DetailContentBox = styled.div`
    width: 100%;
    display: flex;
`
export default S;