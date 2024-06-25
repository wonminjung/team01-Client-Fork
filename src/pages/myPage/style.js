import { styled } from 'styled-components';
import theme from '../../global/theme';
const S = {};

S.MyPageContainer = styled.div`
    position: relative;
    padding: 50px 50px 50px;
    & h1 {
        font-size: 32px;
        font-weight: 600;
    }
    & h2 {
        font-size: 16px;
        font-weight: 600;
    }
    & h3 {
        font-size: 14px;
        font-weight: 500;
    }
    & h4 { 
        font-size: 10px;
        font-weight: 500;
    }
    & h5 {
        font-size: 22px;
        font-weight: 600;
    }
    & .next-button {
        position: relative;
        float: left;
        border: 1px solid #fff;
        width: 28px;
        height: 28px;
        margin-right: 5px;
    }
    & .next-button::after {
        position: absolute;
        left: 12px;
        top: 8px;
        content: '';
        width: 7px; /* 사이즈 */
        height: 7px; /* 사이즈 */
        border-top: 2px solid #000; /* 선 두께 */
        border-right: 2px solid #000; /* 선 두께 */
        transform: rotate(45deg); /* 각도 */
    }
`
S.BodyTop = styled.div`
    margin-bottom: 50px;
`
S.Profile = styled.div`
    margin-bottom: 50px;
    width: calc(100% - 430px);
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: nowrap;
    min-height: 200px;
    &>div {
        display: flex;
        flex-direction: column;
        width: 100%;
        &:last-child div:last-child {
            display: flex;
        }
    }
`
S.InfoBox = styled.div`
    display: block;
    margin: 0 0 50px;
`

export default S;