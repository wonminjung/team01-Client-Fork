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
S.LeftBox = styled.div`
    width: calc(100% - 430px);
    & .titleBox{
        & h6{
            font-size: 20px;
            font-weight: 400;
            margin-bottom: 15px;
        }
        & ul{
            
        }
    }
    & .dIcon{
        margin-bottom: 15px;
        position: relative;
        font-size: 14px;
        color: ${PALETTE.gray[300]};
        
        &::before{
            margin-right: 7px;
            display: inline-block;
            width: 15px;
            height: 15px;
            vertical-align: bottom;
        }
        &.user::before{
            content: url("./images/pages/detail/user.svg");
        }
        &.room::before{
            content: url("./images/pages/detail/house.svg");
        }
        &.bed::before{
            content: url("./images/pages/detail/bed-single.svg");
        }
        &.bath::before{
            content: url("./images/pages/detail/bath.svg");
        }
        &.picture::before{
            content: url("./images/pages/detail/image.svg");
        }
        &.wifi::before{
            content: url("./images/pages/detail/wifi-full.svg");
        }
        &.tv::before{
            content: url("./images/pages/detail/tv.svg");
        }
        &.car::before{
            content: url("./images/pages/detail/car.svg");
        }
        &.pool::before{
            content: url("./images/pages/detail/pool.svg");
        }
        &.time::before{
            content: url("./images/pages/detail/clock.svg");
        }
        &.check::before{
            content: url("./images/pages/detail/credit-card.svg");
        }
        &.users::before{
            content: url("./images/pages/detail/users.svg");
        }
        &.pet::before{
            content: url("./images/pages/detail/paw.svg");
        }
        &.moon::before{
            content: url("./images/pages/detail/moon.svg");
        }
        &.photo::before{
            content: url("./images/pages/detail/camera.svg");
        }
        &.memo::before{
            content: url("./images/pages/detail/text-document.svg");
        }
        &.trash::before{
            content: url("./images/pages/detail/bin.svg");
        }
        &.lock::before{
            content: url("./images/pages/detail/bag.svg");
        }
        &.off::before{
            content: url("./images/pages/detail/power.svg");
        }
        &.note::before{
            content: url("./images/pages/detail/note.svg");
        }
        &.caution::before{
            content: url("./images/pages/detail/Combined Shape.svg");
        }
        &.eye::before{
            content: url("./images/pages/detail/eye.svg");
        }
        &.bell::before{
            content: url("./images/pages/detail/bell.svg");
        }
    }
`
S.RightBox = styled.div`
    width: 430px;
`
export default S;