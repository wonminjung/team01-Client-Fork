import { styled } from 'styled-components';
import theme from '../../global/theme';
const S = {};

S.ReservationContainer = styled.div`
    position: relative;
    padding: 50px 50px 50px;
    & h1 {
        font-size: 50px;
        padding: 0 50px 50px;
    }
    & h2 {
        font-size: 32px;
        padding: 0 50px 50px;
    }
    & h3 {
        font-size: 22px;
        padding: 0 50px 30px;
    }
    & h4 {
        display: inline-block;
        width: 500px;
        font-size: 16px;
        padding: 0 50px 50px;
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
    display: inline-block;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    min-height: 720px;
    width: calc(100% - 430px);
`
S.CategoryBox = styled.div`
    display: block;
    margin: 0 0 50px;
    & li {
        margin: 0 18px 0;
        list-style: disc
    }
    & strong {
        display: inline-block;
        font-weight: bold;
    }
    & underline {
        text-decoration: underline;
    }
`
S.CategoryBorder = styled.div`
    width: 100%;
    height: 0px;
    border-bottom: 1px solid ${theme.PALETTE.gray[200]};
    margin: 0 50px 30px;
`
S.ChargeButton = styled.div`

`

export default S;