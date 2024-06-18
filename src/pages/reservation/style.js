import { styled } from 'styled-components';
const S = {};

S.ReservationContainer = styled.div`
    position: relative;
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
        left: 150px;
        top: 32px;
        content: '';
        width: 7px; /* 사이즈 */
        height: 7px; /* 사이즈 */
        border-top: 2px solid #000; /* 선 두께 */
        border-right: 2px solid #000; /* 선 두께 */
        transform: rotate(225deg); /* 각도 */
    }
`
S.SideBox = styled.div`
    display: inline-block;
    padding: 0 130px 50px;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    min-height: 720px;
`
S.CategoryBox = styled.div`
    display: inline-block;
    margin: 0 0 50px;
`
S.CategoryBorder = styled.div`
    width: 390px;
    height: 0px;
    border: 1px solid #A9A9A9;
    margin: 0 50px 30px;
`
S.ChargeButton = styled.div`

`

export default S;