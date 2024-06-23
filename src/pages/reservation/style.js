import { styled } from 'styled-components';
import theme from '../../global/theme';
const S = {};

S.ReservationContainer = styled.div`
    position: relative;
    padding: 50px 50px 50px;
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
        font-size: 16px;
        margin-bottom: 10px;
        font-weight: 600; 
    }
    & h5 {
        font-size: 12px;
        margin-bottom: 10px;
    }
    & div {
        position: relative;
        & button {
            position: absolute;
            left: 410px;
            top: 0px;
        }
    }
    & .prev-button {
        position: relative;
        float: left;
        border: 1px solid #fff;
        width: 28px;
        height: 28px;
        margin-right: 5px;
    }
    & .prev-button::after {
        position: absolute;
        left: 12px;
        top: 8px;
        content: '';
        width: 7px; /* 사이즈 */
        height: 7px; /* 사이즈 */
        border-top: 2px solid #000; /* 선 두께 */
        border-right: 2px solid #000; /* 선 두께 */
        transform: rotate(225deg); /* 각도 */
    }
    & .body-top {
        margin: 20px auto;
        width: 1080px;
    }
    & .LRcontainer {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        width: 1080px;
        margin: 0 auto;
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
    }
    &.rightBox {
        position: -webkit-sticky;
        position: sticky;
        top: 125px;
        padding: 0 20px;
        width: 40%;
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
                align-items: center; /*위 아래 정렬. display: column이면 좌우 정렬*/

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
                    & .h4Strong {
                        font-weight: 600;
                    }
                }
            }
        }
        & h4 {
            display: inline-block;
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
    & underline {
        text-decoration: underline;
        width: 100%;
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
    font-size: 20px;
    font-weight: 500;
`

export default S;