import { styled } from 'styled-components';
import theme from '../../global/theme';
const S = {};
const PALETTE = theme.PALETTE;

S.MyPageContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 1180px;
    margin: 0 auto;
    padding: 50px;
    min-height: calc(100vh - 230px);
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
S.BodyTop = styled.div`
    margin-bottom: 50px;
    & h1{
        font-size: 28px;
        font-weight: bold;
        color: ${PALETTE.black};
    }
`
S.Profile = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 430px;
    & .imageBox{
        width: 344px;
        flex-direction: column;
        height: fit-content;
        border: 1px solid ${theme.PALETTE.gray[200]};
        border-radius: 20px;
        padding: 30px;
        & form{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            margin-bottom: 30px;
            position: relative;
            & .submitBox{
                margin-top: 10px;
                & button{
                    width: 100px;
                    font-size: 14px;
                    height: inherit;
                    padding: 10px;
                }
            }
        }
        & label{
            width: 150px;
            height: 150px;
            display: block;
            cursor: pointer;
            &>div{
                width: 100%;
                height: 100%;
                border-radius: 50%;
                overflow: hidden;
                border: 1px solid ${PALETTE.gray[200]};
                & img{
                    width: 100%;
                    height: inherit;
                    object-fit: cover;
                }
            }
            & span{
                position: absolute;
                top: 105px;
                right: 70px;
                z-index: 1;
                border: 1px solid #ddd;
                padding: 7px;
                border-radius: 50%;
                background: #fff;
                & svg{
                    font-size: 21px;
                    & path{
                        fill: ${PALETTE.yellow};
                    }
                }
            }
        }
        & input{
            display: none;
        }
        & h2{
            text-align: center;
            color: ${PALETTE.black};
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 15px;
        }
        & h3{
            text-align: center;
            font-weight: bold;
            margin-bottom: 10px;
            color: ${PALETTE.black};
        }
        & p{
            font-size: 14px;
            text-align: center;
            color: ${PALETTE.black};
            &:first-of-type{
                padding-bottom: 30px;
                border-bottom: 1px solid #ddd;
                margin-bottom: 30px;
            }
        }
    }
`
S.InfoBox = styled.div`
    display: block;
    margin: 0 0 50px;
    width: calc(100% - 430px);
    & .infoBox {
        border-bottom: 1px solid ${theme.PALETTE.gray[200]};
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px 0;
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

export default S;