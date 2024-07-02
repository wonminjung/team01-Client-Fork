import styled from "styled-components";
import {flexCenterColumn} from './../../global/common'
import theme from "../../global/theme";
const S = {}
const PALETTE = theme.PALETTE;


S.SignUpWrapper = styled.div`
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
    text-align: center;
`

S.LogoImage = styled.img`
    width : 30%;
    margin: 30px 0px 15px 0px;
`

S.ConfirmMessage = styled.p`
    font-size: 15px;
    color: #F29A2E;
    padding-top: 10px;
`
S.Subtitle = styled.p`
    font-size: 15px;
    color: #222222;
    text-align: center;
    margin: 20px;
`

S.Button = styled.button`
        
    width: 530px;
    height: 60px;
    display: inline-flex;
    padding: 0 12px;
    border: 1px solid #F2AC29;
    border-radius: 20px;
    background-color: #F2AC29;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.3s;
    font-size: 18px;

    &:hover {
        color: white;
        background-color: #F2AC29;
    }

    // 비활성화 버튼
    &:disabled {
        color:  #6A6A6A !important;
        background-color: #F7F7F7;
        border: none;
    }

`;

S.Input = styled.input`
        
        width: 530px;
        height: 60px;
        padding: 0 20px;
        border: 1px solid #6A6A6A; 
        border-radius: 20px;
        outline: none;

        &:focus {
            border: 1px solid #F2AC29;
        }

        &:disabled {
            border: none;
            background-color: #F7F7F7;
            color: #6A6A6A;
        }
    `;

S.InputRadio = styled.input`
        
        width: 20px;
        height: 20px;
        padding: 0 20px;
        border: 1px solid #6A6A6A; 
        border-radius: 20px;
        outline: none;

        &:focus {
            border: 1px solid #F2AC29;
        }

        &:disabled {
            border: none;
            background-color: #F7F7F7;
            color: #6A6A6A;
        }
    `;


S.InfoBox = styled.div`
    display: block;
    /* margin: 0 0 50px; */
    width: calc(100% - 230px);
    & .infoBox {
        border-bottom: 1px solid ${theme.PALETTE.gray[200]};
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* padding: 30px 0; */
        &:first-child{
            padding-top: 0;
        }
        &:last-child{
            border: 0;
        }
        &>div{
            &:first-child{
                & h2{
                    font-size: 18px;
                    font-weight: bold;
                    color: ${PALETTE.black};
                }
                & p{
                    font-size: 18px;
                    color: #6a6a6a;
                    margin-top: 20px;
                }
            }
            &:last-child{
                & button{
                    background-color: transparent;
                    border: 0;
                    text-decoration: underline;
                    font-weight: bold;
                    font-size: 14px;
                    color: ${PALETTE.black};
                    cursor: pointer;
                    padding: 10px;
                }
            }
        }
    }
`


S.MyPageContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 1180px;
    margin: 0 auto;
    /* padding: 0px; */
    min-height: calc(100vh - 1000px);
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
    & .infoWrapper{
        display: flex;
        & .modifyModal{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            z-index: 1000;
            background-color: rgba(0,0,0,0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            & .modalBox{
                width: 500px;
                background-color: #fff;
                border-radius: 20px;
                overflow: hidden;
                & .modalHeader{
                    text-align: center;
                    border-bottom: 1px solid ${PALETTE.gray[200]};
                    position: relative;
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
                            & path{
                                fill: ${PALETTE.black}
                            }
                        }
                    }
                    & h2{
                        font-size: 20px;
                        font-weight: bold;
                        height: 60px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin: 0;
                    }
                }
                & .modalContent{
                    padding: 20px 20px 0;
                    &>input{
                        border: 0;
                        border-bottom: 1px solid ${PALETTE.gray[200]};
                        font-size: 16px;
                        color: ${PALETTE.black};
                        padding: 10px;
                        width: 100%;
                        outline: none;
                    }
                    & .postInputBox{
                        &>div{
                            & .disabledPostInput{
                                background-color: ${PALETTE.gray[100]};
                            }
                            margin-bottom: 10px;
                            &:first-child{
                                & input{
                                    width: 100px;
                                    font-size: 14px;
                                    padding: 10px;
                                    border: 0;
                                    margin-right: 10px;
                                    border-radius: 10px;
                                }
                                & button{
                                    border: 1px solid ${PALETTE.yellow};
                                    color: ${PALETTE.yellow};
                                    font-size: 14px;
                                    padding: 10px;
                                    background-color: #fff;
                                    border-radius: 10px;
                                    cursor: pointer;
                                    transition: 0.3s;
                                    &:hover{
                                        background-color: ${PALETTE.yellow};
                                        color: #fff;
                                    }
                                }
                            }
                            &:nth-child(2){
                                & input{
                                    width: 100%;
                                    font-size: 14px;
                                    padding: 10px;
                                    border: 0;
                                    margin-right: 10px;
                                    border-radius: 10px;
                                }
                            }
                            &:last-child{
                                & input{
                                    width: 100%;
                                    font-size: 14px;
                                    padding: 10px;
                                    border: 0;
                                    border-bottom: 1px solid ${PALETTE.gray[200]};
                                    margin-right: 10px;
                                    outline: none;
                                }
                            }
                        }
                    }
                    & .postSearchBox{
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        width: 500px;
                        & button{
                            position: absolute;
                            left: 0;
                            top: -40px;
                            padding: 10px 20px;
                            background: #fff;
                            border: 0;
                            border: 1px solid ${PALETTE.yellow};
                            font-size: 14px;
                            border-radius: 10px;
                            cursor: pointer;
                            transition: 0.3s;
                            color: ${PALETTE.yellow};
                            &:hover{
                                color: #fff;
                                background-color: ${PALETTE.yellow};
                            }
                        }
                    }
                    & .postCodeStyle{
                        display: block;
                        height: 470px !important;
                        border-radius: 20px;
                        overflow: hidden;
                    }
                    & .emailInputBox{
                        display: flex;
                        flex-direction: column;
                        &>div:first-child{
                            display: flex;
                            flex-direction: row;
                            justify-content: space-between;
                            align-items: center;
                        }
                        & input{
                            width: calc(100% - 110px);
                            border: 0;
                            border-bottom: 1px solid ${PALETTE.gray[200]};
                            padding: 10px;
                            font-size: 14px;
                            color: ${PALETTE.black};
                            outline: none;
                        }
                        & button{
                            width: 100px;
                            padding: 10px 0;
                            font-size: 14px;
                            border: 1px solid ${PALETTE.yellow};
                            color: ${PALETTE.yellow};
                            border-radius: 10px;
                            background-color: #fff;
                            transition: 0.3s;
                            cursor: pointer;
                            &:hover{
                                color: #fff;
                                background-color: ${PALETTE.yellow};
                            }
                        }
                        & p{
                            padding: 10px 10px 0;
                            &.green{
                                color: #01b700;
                            }
                            &.red{
                                color: red;
                            }
                        }
                    }
                    & .pwInputBox{
                        & input{
                            width: 100%;
                            border: 0;
                            border-bottom: 1px solid ${PALETTE.gray[200]};
                            outline: none;
                            font-size: 14px;
                            padding: 10px;
                            color: ${PALETTE.black};
                            margin-bottom: 10px;
                        }
                        & p{
                            position: relative;
                            font-size: 12px;
                            top: -4px;
                            left: 10px;
                            &.green{
                                color: #01b700;
                            }
                            &.red{
                                color: red;
                            }
                        }
                        &>div{
                            display: flex;
                            justify-content: space-between;
                            & input{
                                width: calc(100% - 110px);
                                height: 48px;
                            }
                            & button {
                                width: 100px;
                            }
                        }
                    }
                }
                & .modalFooter{
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    padding: 20px;
                    & button{
                        width: 100px;
                    }
                }
            }
        }
    }
`


export default S;