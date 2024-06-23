import styled from "styled-components";
import {flexCenterColumn} from './../../global/common'
import theme from "../../global/theme";

const S = {}
const PALETTE = theme.PALETTE;

S.SignInWrapper = styled.div`
    ${flexCenterColumn}
    height: 600px;
`

S.Form = styled.form`
    height: 100%;
`

S.Label = styled.label`
    display: block;
    width: 100%;
    margin: 0 0 8px 0;
`

S.Title = styled.p`
    font-size: 40px;
    font-weight: bold;
    color: ${PALETTE.yellow};
    margin: 120px 40px 40px 40px;
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
        
    width: 490px;
    height: 50px;
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
        
        width: 490px;
        height: 50px;
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

S.Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
` 
export default S;