import styled from "styled-components";
import {flexCenterColumn} from './../../global/common'
import theme from "../../global/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const S = {}
const PALETTE = theme.PALETTE;

S.SignInWrapper = styled.div`
    ${flexCenterColumn}
    height: calc(100vh - 130px);
`

S.Form = styled.form`
`

S.Label = styled.label`
    display: block;
    width: 100%;
    margin: 0 0 8px 0;
`

S.Title = styled.p`
    font-size: 40px;
    font-weight: bold;
    color: #F2AC29;
    margin: 90px 40px 30px 40px;
    text-align: left;
`

S.InputWrapper = styled.p`
    position: relative;
    display: flex;
    align-items: center;
`

S.Icon = styled(FontAwesomeIcon)`
    position: absolute;
    left : 10px;
    color : #aaa;
`

S.LogoImage = styled.img`
    width : 60%;
    margin: 80px 100px 20px 100px;
`

S.LogoImageLittle = styled.img`
    width : 40%;
    margin: 10px 100px 20px 100px;
`

S.ConfirmMessage = styled.p`
    font-size: 15px;
    color: ${PALETTE.orange};
    padding-top: 10px;
`
S.Subtitle = styled.p`
    font-size: 15px;
    color: ${PALETTE.black};
    text-align: center;
    margin: 20px;
`

S.Button = styled.button`
        
    width: 530px;
    height: 65px;
    display: inline-flex;
    padding: 0 12px;
    border: 1px solid ${PALETTE.yellow};
    border-radius: 20px;
    background-color: ${PALETTE.yellow};
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.3s;
    font-size: 18px;

    &:hover {
        color: white;
        background-color: ${PALETTE.yellow};
    }

    // 비활성화 버튼
    &:disabled {
        color:  #6A6A6A !important;
        background-color: ${PALETTE.gray[100]};
        border: none;
    }

`;

S.Input = styled.input`
        
        width: 530px;
        height: 65px;
        padding: 0 20px;
        border: 1px solid ${PALETTE.gray[300]}; 
        border-radius: 20px;
        outline: none;

        &:focus {
            border: 1px solid ${PALETTE.yellow};
        }

        &:disabled {
            border: none;
            background-color: ${PALETTE.gray[100]};
            color: ${PALETTE.gray[300]};
        }
    `;

S.IconImage = styled.img`
    width : 70px;
    height: 70px;
`
S.WelcomImage = styled.img`

`

S.Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px;
` 


export default S;