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
    max-width: 1180px;
    width: 100%;
    margin: 0 auto;
    padding: 70px 50px;
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
        cursor: pointer;
        /* 이미지 */
        & img{
            width: 100%;
            height: inherit;
            object-fit: cover;
            border-radius: 20px;
        }
    }
    & .reviewContainer{
        display: none;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        z-index: 1000;
        & .reviewBackground{
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.5);
        }
        & .reviewBox{
            position: absolute;
            width: 80%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            max-width: 800px;
            height: calc(100vh - 200px);
            background-color: #fff;
            border-radius: 20px;
            & .reviewTop{
                text-align: center;
                position: relative;
                border-bottom: 1px solid ${PALETTE.gray[200]};
                & button{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 60px;
                    height: 60px;
                    border: none;
                    background-color: transparent;
                    cursor: pointer;
                    & svg{
                        font-size: 20px;
                    }
                }
                & h6{
                    font-size: 20px;
                    font-weight: bold;
                    height: 60px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0;
                }
            }
            & .reviewContent{
                display: flex;
                height: calc(100% - 61px);
                & .contentLeft{
                    width: 300px;
                    display: flex;
                    flex-direction: column;
                    padding: 30px;
                    overflow-y: scroll;
                    &::-webkit-scrollbar{
                        width: 6px;
                    }
                    &::-webkit-scrollbar-thumb{
                        background: ${PALETTE.yellow};
                        border-radius: 3px;
                    }
                    & .reviewAvrStarBox{
                        font-size: 60px;
                        font-weight: bold;
                        text-align: center;
                        padding: 15px 0 40px 0;
                    }
                    & div:last-child{
                        padding: 0;
                        border: 0;
                        &>ul{
                            display: flex;
                            flex-direction: column;
                            & li{
                                width: 100%;
                                border-bottom: 1px solid ${PALETTE.gray[200]};
                                padding: 10px 0;
                                &:first-of-type{
                                    border: none;
                                    margin-bottom: 20px;
                                    &>div{
                                        height: 122px;
                                        flex-direction: column;
                                        align-items: flex-start;
                                        justify-content: space-between;
                                    }
                                    & p{
                                        order: unset;
                                        padding: 0;
                                    }
                                }
                                &:last-of-type{
                                    border: 0;
                                }
                                &::after{
                                    display: none;
                                }
                                &>div{
                                    height: inherit;
                                    flex-direction: row;
                                    align-items: center;
                                    justify-content: flex-start;
                                    & p{
                                        order: 1;
                                        width: calc(100% - 64px);
                                        padding-left: 10px;
                                    }
                                    & h3{
                                        order: 2;
                                        font-size: 18px;
                                        width: 40px;
                                        text-align: right;
                                    }
                                    & img{
                                        order: 0;
                                        width: 24px;
                                    }
                                    & p{
                                        font-weight: bold;
                                    }
                                    & .barContainer{
                                        width: calc(100% - 15px);
                                    }
                                    &>div{
                                        padding: 0;
                                    }
                                }
                            }
                        }
                    }
                }
                & .contentRight{
                    width: calc(100% - 300px);
                    height: 100%;
                    overflow-y: scroll;
                    &::-webkit-scrollbar{
                        width: 6px;
                    }
                    &::-webkit-scrollbar-thumb{
                        background: ${PALETTE.yellow};
                        border-radius: 3px;
                    }
                    & .rightTop{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        background-color: #fff;
                        padding: 30px;
                        position: -webkit-sticky;
                        position: sticky;
                        top: 0;
                        z-index: 1;
                        & h6{
                            font-size: 20px;
                            font-weight: bold;
                            color: ${PALETTE.black};
                        }
                        & button{
                            border: 0;
                            background-color: transparent;
                            outline: none;
                        }
                        & .sortBtn{
                            border: 1px solid ${PALETTE.gray[200]};
                            color: ${PALETTE.black};
                            border-radius: 20px;
                            padding: 10px 20px;
                            cursor: pointer;
                            transition: border-color 0.3s;
                            &.active{
                                border-color: ${PALETTE.yellow};
                            }
                        }
                        & .sortBox{
                            position: absolute;
                            top: 80px;
                            right: 30px;
                            z-index: 1;
                            & ul{
                                display: flex;
                                flex-direction: column;
                                box-shadow: 0 6px 10px rgba(0,0,0,0.15);
                                border-radius: 20px;
                                overflow: hidden;
                                & li{
                                    background-color: #fff;
                                    & button{
                                        width: 120px;
                                        padding: 15px 20px;
                                        text-align: left;
                                        cursor: pointer;
                                        transition: 0.3s;
                                        border-radius: 20px;
                                        &:hover{
                                            background-color: ${PALETTE.yellow};
                                            color: #fff;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    & .rightContent{
                        padding: 0 30px;
                        & .userComment{
                            padding: 20px 0;
                            & .commentTop{
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                margin-bottom: 10px;
                                & .commentTL{
                                    display: flex;
                                    align-items: center;
                                    & .userProfileImg{
                                        width: 40px;
                                        height: 40px;
                                        border-radius: 50%;
                                        display: flex;
                                        justify-content: center;
                                        align-items: center;
                                        overflow: hidden;
                                        & img{
                                            object-fit: cover;
                                            width: 100%;
                                            height: inherit;
                                        }
                                    }
                                    & .userId{
                                        padding-left: 10px;
                                        font-weight: bold;
                                        font-size: 16px;
                                        color: ${PALETTE.black};
                                    }
                                }
                                & .commentTR{
                                    & .starBox{
                                        display: inline-block;
                                        width: 65px;
                                        aspect-ratio: 5 / 1;
                                        position: relative;
                                        clip-path: polygon(0 34%, 7% 34%, 10% 0, 13% 34%, 27% 34%, 30% 0, 33% 34%, 47% 34%, 50% 0, 53% 34%, 67% 34%, 70% 0, 73% 34%, 87% 34%, 90% 0, 93% 34%, 100% 34%, 95% 63%, 97% 100%, 90% 78%, 83% 100%, 85% 63%, 80% 34%, 75% 63%, 77% 100%, 70% 78%, 63% 100%, 65% 63%, 60% 34%, 55% 63%, 57% 100%, 50% 78%, 43% 100%, 45% 63%, 40% 34%, 35% 63%, 37% 100%, 30% 78%, 23% 100%, 25% 63%, 20% 34%, 15% 63%, 17% 100%, 10% 78%, 3% 100%, 5% 63%);
                                        background-color: ${PALETTE.gray[200]};
                                        & .star{
                                            display: block;
                                            background-color: ${PALETTE.yellow};
                                            width: 0%;
                                            height: 100%;
                                        }
                                    }
                                }
                            }
                            & .commentBody{
                                white-space: pre-line;
                                font-size: 14px;
                                line-height: 18px;
                            }
                        }
                    }
                }
            }
        }
    }
    & .imgModalBox{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(255,255,255,0.7);
        backdrop-filter: blur(10px);
        z-index: 1000;
        & .closeModalBtn{
            border: 0;
            font-size: 30px;
            background-color: transparent;
            padding: 30px;
            cursor: pointer;
            position: absolute;
            top: 0;
            left: 0;
        }
        & .modalContent{
            max-height: 100vh;
            overflow-y: scroll;
            padding-top: 30px;
            cursor: pointer;
            &::-webkit-scrollbar{
                width: 8px;
                background-color: ${PALETTE.gray[100]};
            }
            &::-webkit-scrollbar-thumb{
                
                background-color: ${PALETTE.yellow};
                border-radius: 5px;
            }
            &>div{
                display: flex;
                justify-content: center;
                margin-bottom: 30px;
            }
        }
    }
`
/* 디테일 상세박스 디자인 */
S.DetailContentBox = styled.div`
    width: 100%;
    display: flex;
    padding-bottom: 40px;
    border-bottom: 1px solid ${PALETTE.gray[200]};
`
S.LeftBox = styled.div`
    width: calc(100% - 430px);
    & h6{
        font-size: 20px;
        font-weight: 400;
        margin-bottom: 15px;
    }
    & .titleBox{
        margin-bottom: 30px;
        & ul{
            
        }
    }
    & .dIcon{
        margin-bottom: 15px;
        position: relative;
        font-size: 14px;
        color: ${PALETTE.gray[300]};
        padding-left: 22px;
        line-height: 22px;
        &::before{
            margin-right: 7px;
            display: inline-block;
            position: absolute;
            top: 2px;
            left: 0;
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
    & .hostBox{
        width: 100%;
        border: 1px solid ${PALETTE.gray[300]};
        border-radius: 20px;
        padding: 19px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
        &>div{
            display: flex;
            & .hostImg{
                border-radius: 50%;
                width: 60px;
                height: 60px;
                display: flex;
                justify-content: center;
                align-items: center;
                overflow: hidden;
                margin-right: 12px;
                & img{
                    object-fit: cover;
                    width: 100%;
                    height: inherit;
                }
            }
            & .hostName{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                & h6{
                    font-size: 20px;
                    font-weight: bold;
                    margin: 0;
                }
            }
            & .avrStarBox{
                border-right: 1px solid ${PALETTE.gray[300]};
                padding: 8px 20px 8px 0;
                display: flex;
                flex-direction: column;
                height: 60px;
                justify-content: space-between;
                align-items: center;
                & div{
                    &:first-child{
                        font-size: 24px;
                        font-weight: bold;
                    }
                    &:last-child{}
                }
            }
            & .reviewBox{
                padding: 8px 0 8px 20px;
                display: flex;
                flex-direction: column;
                height: 60px;
                justify-content: space-between;
                align-items: center;
                min-width: 74px;
                cursor: pointer;
                & div{
                    &:first-child{
                        font-size: 24px;
                        color: ${PALETTE.black};
                        font-weight: bold;
                    }
                    &:last-child{
                        & span{
                            font-size: 14px;
                            color: ${PALETTE.gray[300]};
                            text-decoration: underline;
                        }
                    }
                }
            }
        }
    }
    & .descriptionBox{
        margin-bottom: 30px;
        & p{
            font-size: 14px;
            color: ${PALETTE.black};
            line-height: 22px;
            white-space: pre-wrap;
            max-height: 200px;
            overflow-y: hidden;
            transition: all 0.3s;
            &.active{
                max-height: fit-content;
                padding-bottom: 20px;
            }
        }
        & button{
            width: 100%;
            position: relative;
            &::before{
                content: "";
                position: absolute;
                top: -41px;
                left: 0;
                width: 100%;
                height: 40px;
                background: linear-gradient(0deg, #fff, transparent);
            }
        }
    }
    & .convenienceBox{
        & ul{
            display: flex;
            width: 100%;
            justify-content: flex-start;
            align-items: flex-start;
            flex-wrap: wrap;
            & li{
                width: 50%;
            }
        }
    }
    & .noticeBox{
        max-height: 200px;
        overflow: hidden;
        &.active{
            max-height: fit-content;
            padding-bottom: 20px;
        }
        & h6{
            margin-bottom: 23px;
        }
        & p{
            font-size: 16px;
            margin-bottom: 8px;
        }
        & p.desc{
            font-size: 14px;
            color: ${PALETTE.gray[300]};
        }
        & p.listTitle{
            font-size: 12px;
            color: ${PALETTE.yellow};
            margin-top: 28px;
        }
        & li{
            margin-bottom: 4px;
            white-space: pre-line;
            color: ${PALETTE.black};
            font-size: 14px;
        }
        &~button{
            width: 100%;
            position: relative;
            &::before{
                content: "";
                position: absolute;
                top: -41px;
                left: 0;
                width: 100%;
                height: 40px;
                background: linear-gradient(0deg, #fff, transparent);
            }
        }
    }
`
S.StarBack = styled.span`
    display: inline-block;
    aspect-ratio: 5 / 1;
    width: 63px;
    position: relative;
    clip-path: polygon(0 34%, 7% 34%, 10% 0, 13% 34%, 27% 34%, 30% 0, 33% 34%, 47% 34%, 50% 0, 53% 34%, 67% 34%, 70% 0, 73% 34%, 87% 34%, 90% 0, 93% 34%, 100% 34%, 95% 63%, 97% 100%, 90% 78%, 83% 100%, 85% 63%, 80% 34%, 75% 63%, 77% 100%, 70% 78%, 63% 100%, 65% 63%, 60% 34%, 55% 63%, 57% 100%, 50% 78%, 43% 100%, 45% 63%, 40% 34%, 35% 63%, 37% 100%, 30% 78%, 23% 100%, 25% 63%, 20% 34%, 15% 63%, 17% 100%, 10% 78%, 3% 100%, 5% 63%);
    background-color: ${PALETTE.gray[200]};
    & span{
        display: block;
        background-color: ${PALETTE.yellow};
        width: 0%;
        height: 100%;
    }
`
S.RightBox = styled.div`
    width: 430px;
    display: flex;
    justify-content: flex-end;
    & .rightBox{
        position: -webkit-sticky;
        position: sticky;
        top: 125px;
        width: 344px;
        height: fit-content;
        padding: 30px;
        border-radius: 20px;
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
        & .dayPriceBox{
            margin-bottom: 26px;
            & h6{
                color: ${PALETTE.black};
                font-size: 18px;
                font-weight: bold;
                & span:first-child{
                    letter-spacing: 0.5px;
                }
                & span:last-child{
                    font-size: 14px;
                    font-weight: 400;
                    color: ${PALETTE.black};
                }
            }
        }
        & .checkInOutBox{
            width: 100%;
            display: flex;
            flex-direction: column;
            border-radius: 20px;
            border: 1px solid ${PALETTE.gray[200]};
            overflow: hidden;
            margin-bottom: 26px;
            &>div{
                display: flex;
                & button{
                    border: none;
                    background-color: white;
                    height: 48px;
                    cursor: pointer;
                    display: block;
                    text-align: left;
                    padding: 0 14px;
                    font-size: 12px;
                    font-weight: bold;
                    color: ${PALETTE.black};
                    & span:nth-of-type(2){
                        font-weight: 400;
                    }
                }
                &:first-child{
                    & button{
                        width: 50%;
                        border-bottom: 1px solid ${PALETTE.gray[200]};
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        &:first-child{
                            border-right: 1px solid ${PALETTE.gray[200]};
                        }
                    }
                }
                &:last-child{
                    & button{
                        width: 100%;
                        position: relative;
                        &::after{
                            content: url('./images/pages/detail/arrow.png');
                            width: 14px;
                            height: 12px;
                            display: inline-block;
                            position: absolute;
                            top: 50%;
                            right: 14px;
                            transform: translateY(-50%);
                        }
                        & span:first-of-type{
                            margin-right: 14px;
                        }
                    }
                }
            }
        }
        & .payListBox{
            & ul{
                & li{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 15px;
                    & span{
                        font-size: 12px;
                        color: ${PALETTE.black};
                    }
                    &.total{
                        margin-bottom: 30px;
                        & span{
                            font-size: 18px;
                            color: ${PALETTE.yellow};
                        }
                    }
                }
                & hr{
                    margin: 30px 0;
                    border: none;
                    border-bottom: 1px solid ${PALETTE.gray[200]};
                }
            }
        }
        & .reserveBtn{
            width: 100%;
        }
        & .checkInOutContainer{
            position: absolute;
            top: 140px;
            right: 30px;
            border-radius: 20px;
            box-shadow: 0 6px 10px rgba(0,0,0,0.15);
            overflow: hidden;
        }
        & .guestsPopupBox{
            position: absolute;
            top: 185px;
            right: 30px;
            box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
            border-radius: 20px;
            width: 300px;
            height: fit-content;
            padding: 15px;
            cursor: default;
            background-color: #fff;
            & .content{
                padding: 15px 15px 5px;
                font-weight: 600;
                font-size: 12px;
                margin-bottom: 4px;
                width: 100%;
                & li{
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    & div:first-child{
                        & h6{
                            font-size: 16px;
                            margin-bottom: 5px;
                        }
                        & p{
                            font-size: 12px;
                            color: ${PALETTE.gray[300]};
                            font-weight: 400;
                        }
                    }
                    & div:last-child{
                        display: flex;
                        align-items: center;
                        & button{
                            border: 1px solid ${PALETTE.gray[300]};
                            border-radius: 50%;
                            color: ${PALETTE.gray[300]};
                            width: 20px;
                            height: 20px;
                            font-size: 16px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fff;
                            cursor: pointer;
                            &:hover{
                                border-color: ${PALETTE.yellow};
                                color: ${PALETTE.yellow};
                            }
                        }
                        & span{
                            font-size: 16px;
                            color: ${PALETTE.black};
                            margin: 0 17px;
                        }
                    }
                }
                & hr{
                    border: 0;
                    border-bottom: 1px solid ${PALETTE.gray[200]};
                    margin: 12px 0;
                }
            }
        }
    }
`

S.DetailGradeBox = styled.div`
    padding: 50px 0;
    border-bottom: 1px solid ${PALETTE.gray[200]};
    & ul{
        width: 100%;
        display: flex;
        align-items: center;
        & li{
            width: calc(100% / 6);
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            &::after{
                content: '';
                width: 1px;
                height: 108px;
                background-color: ${PALETTE.gray[200]};
                position: absolute;
                top: 50%;
                right: 0;
                transform: translateY(-50%);
            }
            &:last-of-type::after{
                content: none;
            }
            &>div{
                height: 122px;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                & p{
                    font-size: 14px;
                    color: ${PALETTE.black};
                }
                &>div{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 17px;
                    width: 100%;
                    & .gradeNum{
                        font-size: 12px;
                        color: ${PALETTE.black};
                    }
                    & .barContainer{
                        display: inline-block;
                        width: 130px;
                        height: 5px;
                        background-color: ${PALETTE.gray[200]};
                        position: relative;
                        & .bar{
                            display: inline-block;
                            height: 5px;
                            background-color: ${PALETTE.yellow};
                            position: absolute;
                            top: 0;
                            left: 0;
                        }
                    }
                }
                & h3{
                    font-size: 36px;
                    font-weight: bold;
                }
                & img{
                    width: 30px;
                    height: 30px;
                }
            }
        }
    }
`
S.DetailCommentBox = styled.div`
    padding: 50px 0;
    border-bottom: 1px solid ${PALETTE.gray[200]};
    &>div{
        &:first-child{
            display: flex;
            flex-wrap: wrap;
            & .commentCard{
                width: 50%;
                padding-right: 45px;
                margin-bottom: 55px;
                & .commentTBox{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 30px;
                    &>div:first-child{
                        display: flex;
                        align-items: center;
                        & .commentImg{
                            width: 60px;
                            height: 60px;
                            display: flex;
                            align-items: center;
                            border-radius: 50%;
                            overflow: hidden;
                            margin-right: 25px;
                            & img{
                                width: 100%;
                                height: inherit;
                                object-fit: cover;
                            }
                        }
                        & .commentId{
                            font-size: 20px;
                        }
                    }
                    &>div:last-child{
                        & .starBox{
                            display: inline-block;
                            width: 65px;
                            aspect-ratio: 5 / 1;
                            position: relative;
                            clip-path: polygon(0 34%, 7% 34%, 10% 0, 13% 34%, 27% 34%, 30% 0, 33% 34%, 47% 34%, 50% 0, 53% 34%, 67% 34%, 70% 0, 73% 34%, 87% 34%, 90% 0, 93% 34%, 100% 34%, 95% 63%, 97% 100%, 90% 78%, 83% 100%, 85% 63%, 80% 34%, 75% 63%, 77% 100%, 70% 78%, 63% 100%, 65% 63%, 60% 34%, 55% 63%, 57% 100%, 50% 78%, 43% 100%, 45% 63%, 40% 34%, 35% 63%, 37% 100%, 30% 78%, 23% 100%, 25% 63%, 20% 34%, 15% 63%, 17% 100%, 10% 78%, 3% 100%, 5% 63%);
                            background-color: ${PALETTE.gray[200]};
                            & .star{
                                display: block;
                                background-color: ${PALETTE.yellow};
                                width: 0%;
                                height: 100%;
                            }
                        }
                    }
                }
                & .commentBBox{
                    & p{
                        font-size: 16px;
                        color: ${PALETTE.black};
                        overflow: hidden;
                        white-space: normal;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        word-break: keep-all;
                        line-height: 28px;
                    }
                }
            }
        }
        &:last-child{
            display: flex;
            justify-content: center;
        }
    }
`

S.DetailMapBox = styled.div`
    padding-top: 30px;
    & h6{
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 28px;
        color: ${PALETTE.black};
    }
    & p{
        font-size: 16px;
        color: ${PALETTE.gray[300]};
        margin-bottom: 25px;
    }
    & #map{
        width: 100%;
        height: 460px;
        border-radius: 20px;
        border: 1px solid #ddd;
    }
`
export default S;