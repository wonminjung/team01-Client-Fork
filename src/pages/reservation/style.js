import { styled } from 'styled-components';
import theme from '../../global/theme';
const S = {};

S.ReservationContainer = styled.div`
    max-width: 1080px;
    width: 100%;
    position: relative;
    padding: 50px 50px 50px;
    margin: 0 auto;
    & h1 {
        font-size: 50px;
        margin-bottom: 50px;
        font-weight: 600;
    }
    & h2 {
        font-size: 32px;
        margin-bottom: 50px;
        font-weight: 600;
    }
    & h3 {
        font-size: 22px;
        margin-bottom: 30px;
        font-weight: 600;
    }
    & h4 {
        font-size: 16px;
        margin-bottom: 10px;
    }
    & .h4Strong {
        font-weight: 600;
    }
    & h5 {
        font-size: 12px;
        margin-bottom: 10px;
    }
    // & div {
    //     position: relative;
    //     & button {
    //         position: absolute;
    //         left: 410px;
    //         top: 0px;
    //     }
    // }
    & .prevButton {
        position: relative;
        float: left;
        border: 1px solid #fff;
        width: 28px;
        height: 28px;
        margin-right: 5px;
        cursor: pointer;
        &:hover {
            &::after {
                border-color: ${theme.PALETTE.yellow};
            }
        }
    }
    & .prevButton::after {
        position: absolute;
        left: 12px;
        top: 8px;
        content: '';
        width: 7px; /* 사이즈 */
        height: 7px; /* 사이즈 */
        border-top: 2px solid #000; /* 선 두께 */
        border-right: 2px solid #000; /* 선 두께 */
        transform: rotate(225deg); /* 각도 */
        transition: 0.3s;
    }
    & .bodyTop {
        margin: 20px auto;
    }
    & .LRcontainer {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        margin: 0 auto;
    }
    & span {
        text-decoration: underline;
        width: 100%;
    }
`
S.SideBox = styled.div`
    padding: 50px 35px;
    display: inline-block;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    min-height: 720px;
    width: calc(100% - 430px);
    & img {
        height: 9px;
        margin-right: 5px;

    }
    & a {
        width: fit-content;
        display: block;
    }
    &.rightBox {
        position: -webkit-sticky;
        position: sticky;
        top: 125px;
        padding: 0 20px;
        width: 430px;
        min-height: 360px;
        border: 1px solid ${theme.PALETTE.gray[200]};
        border-radius: 20px;
        &>div {
            display: flex;
            width: 100%;
            border-bottom: 1px solid ${theme.PALETTE.gray[200]};
            margin: 20px 0;
            padding-bottom: 20px;
            &:first-child div:nth-child(2) {
                display: flex;
                align-items: center; /*위 아래 정렬. flex-direction: column이면 좌우 정렬*/
                width: calc(100% - 120px);
            }
            &:nth-child(2) {
                flex-direction: column;
                &>div {
                    display: flex;
                    justify-content: space-between;
                }
            }
            &:last-child  {
                border-bottom: none;
                & div {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                }
            }
        }
        & h4 {
            display: inline-block;
        }
        & .h4Strong {
            color: ${theme.PALETTE.yellow};
        }
        & .imgBox {
            width: 100px;
            height: 100px;
            margin-right: 20px;
            &>img {
                width: 100%;
                height: inherit;
                object-fit: cover;
                border-radius: 20%;
            }
        }
    }
`

/* Charge.jsx */
S.CategoryBox = styled.div`
    display: block;
    margin: 0 0 50px;
    & li {
        margin: 0 18px 0;
        list-style: disc
    }
    & strong {
        display: inline;
        font-weight: bold;
        width: 100%;
    }
    & .payIcon {
        padding-right: 16px;
        width: 40px;
        height: 25px;
        display: flex;
        align-items: center;

        & > div {
            width: 100%;

            & > img {
                object-fit: cover;
                width: 100%;
                height: 100%;
            }
        }

        & > svg {
            width: 100%;
            height: 100%;
        }

    }

    & .payTitle {
        height: 25px;
        display: flex;
        align-items: center;
        text-align: center;
        font-size: 16px;
    }
    & .chargeBox {
        position: relative;
        width: 100%;
        & input {
            width: 100%;
            margin-bottom: 12px;
        }
        & .chargeTop {
            margin-bottom: 30px;
            display: flex;
            justify-content: space-between;
            & h3 {
                font-size: 22px;
                font-weight: 600;
                margin: 0;
            }
            & > img {
                width: 100%;
                height: 100%;
            }
        }
        & .selectButton {
            width: 100%;
            background-color: white;
            border: 1px solid ${theme.PALETTE.gray[300]};
            border-radius: 20px;
            cursor: pointer;
            transition: 0.2s;
            margin-bottom: 12px;

            & .arrow {
                transform: rotate(0deg);
                transition: 250ms;
            }

            &.clickedButton {
                filter: brightness(0.95);
                transition: 0.2s;

                & .arrow {
                    transform: rotate(180deg);
                    transition: 250ms;
                }
            }

            & > div {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 16px;

                & > div {
                    display: flex;
                }
            }
        }
        & .payList {
            position: absolute;
            width: 100%;
            border: 1px solid ${theme.PALETTE.gray[300]};
            border-radius: 20px;
            background-color: white;
            top: 120px;
            overflow: hidden;

            &.notClickedList {
                display: none;
            }

            &.clickedList {
                display: block;
            }

            & li {
                display: flex;
                list-style: none;
                padding: 18px 16px;
                cursor: pointer;
                background-color: white;
                margin: 0;

                &.checkedList {
                    filter: brightness(0.95);
                }
                &:hover {
                    filter: brightness(0.95);
                }
            }
        }
        & .isInvisible {
            &:focus::placeholder {
                color: transparent;
            }
        }
    }
`
S.CategoryBorder = styled.div`
    width: 100%;
    height: 0px;
    border-bottom: 1px solid ${theme.PALETTE.gray[200]};
    margin: 30px 0;
`
S.ChargeButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 50px;
    background-color: ${theme.PALETTE.orange};
    color: #fff;
    border-radius: 20px;
    font-size: 16px;
    font-weight: 500;
`

export default S;