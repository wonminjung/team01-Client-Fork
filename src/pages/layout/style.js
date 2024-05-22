import styled from "styled-components";
import theme from "../../global/theme";

const S = {};
const PALETTE = theme.PALETTE;

S.LayoutWrapper = styled.div`
    width: 100%;
`
S.Header = styled.header`
    width: 100%;
    height: 100px;
    display: flex;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    background-color: white;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    &.scrolled {
        border-bottom: 1px solid ${PALETTE.gray[300]};
    }
`
S.Logo = styled.span`
    font-size: 40px;
    font-weight: bold;
    color: ${PALETTE.yellow};
`
S.SearchWrapper = styled.div`
    position: relative;
    border: 1px solid ${PALETTE.yellow};
    border-radius: 40px;
    height: 48px;
    background-color: white;
    top: 0;
    transition: top 0.3s;
    &.big{
        height: 68px;
    }
    &.down{
        top: 475px;
    }
    & .smallBox,.bigBox{
        display: flex;
        justify-content: start;
        align-items: center;
    }
    & .smallBox{
        display: flex;
        height: 100%;
        &>div{
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
        &>span{
            display: inline-block;
            width: 1px;
            height: 24px;
            background-color: ${PALETTE.yellow};
        }
        &>div:first-of-type{
            width: 98px;
            & button{
                font-weight: 600;
            }
        }
        &>div:nth-of-type(2){
            width: 120px;
            & button{
                font-weight: 600;
            }
        }
        &>div:nth-of-type(3){
            width: 105px;
            & button{
                color: ${PALETTE.gray[300]};
            }
        }
        &>div:last-of-type{
            padding-right: 8px;
        }
    }
    &.big .smallBox{
        display: none;
    }
    & .bigBox{
        display: none;
        height: 100%;
        & div{
            cursor: pointer;
        }
        &>span{
            display: inline-block;
            width: 1px;
            height: 32px;
            background-color: ${PALETTE.yellow};
        }
        &>div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: start;
            height: 100%;
            padding-left: 24px;
            transition: 0.3s;
            border-radius: 40px;
            &:hover{
                background-color: ${PALETTE.gray[100]};
            }
            &:active{
                transform: scale(0.97);
            }
            &:first-of-type{
                width: 284px;
                & input{
                    border: none;
                    color: ${PALETTE.black};
                    background-color: transparent;
                    outline: transparent;
                    &::placeholder{
                        color: ${PALETTE.gray[300]};
                    }
                }
            }
            &:nth-of-type(2){
                width: 141px;
            }
            &:nth-of-type(3){
                width: 141px;
            }
            &:nth-of-type(4){
                width: 226px;
            }
            &:last-child{
                padding: 9px 9px 9px 0;
                display: block;
                &:hover{
                    background-color: transparent;
                }
            }
            &>div:first-of-type{
                font-weight: 600;
                font-size: 12px;
                margin-bottom: 4px;
            }
            &>div:last-of-type{
                font-size: 14px;
                color: ${PALETTE.gray[300]};
            }
        }
    }
    &.big .bigBox{
        display: flex;
    }
    & button{
        border: none;
        background-color: transparent;
        width: 100%;
        height: 100%;
        cursor: pointer;
        transition: 0.3s;
        &:active{
            transform: scale(0.95);
        }
    }
    &.big a{
        width: 48px;
        height: 48px;
    }
`
S.SearchBtn = styled.div`
    overflow: hidden;
    & a{
        display: block;
        border-radius: 50%;
        width: 32px;
        height: 32px;
        background-color: ${PALETTE.yellow};
        display: flex;
        justify-content: center;
        align-items: center;
        transition: background-color 0.3s;
        & svg path{
            fill: white;
        }
    }
    & a:hover{
        background-color: #e79700;
    }
`
S.UserMenu = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid ${PALETTE.yellow};
    border-radius: 30px;
    width: 86px;
    min-width: 86px;
    height: 48px;
    padding-left: 8px;
    cursor: pointer;
    transition: transform 0.3s;
    &:active{
        transform: scale(0.95);
    }
    & div:first-child svg{
        width: 16px;
        height: 16px;
        & path{
            fill: ${PALETTE.yellow};
        }
    } 
    & div:last-child svg{
        width: 32px;
        height: 32px;
        & path{
            fill: ${PALETTE.yellow};
        }
    }
`
S.Footer = styled.footer`
    width: 100%;
    height: 130px;
    background-color: #f7f7f7;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 28px 0 34px;
    border-top: 1px solid ${PALETTE.gray[200]};
    &>div{
        width: 100%;
        max-width: 1015px;
        display: flex;
        flex-direction: column;
        &>div{
            display: flex;
            &:first-child{
                justify-content: space-between;
                margin-bottom: 12px;
                &>div{
                    display: flex;
                    font-size: 14px;
                    &>div:first-child{
                        margin-right: 10px;
                    }
                    &>div:last-child a{
                        color: ${PALETTE.black};
                    }
                }
            }
            &:last-child{
                border-top: 1px solid ${PALETTE.gray[200]};
                padding-top: 12px;
                & p{
                    font-size: 10px;
                    color: ${PALETTE.gray[300]};
                    line-height: 12px;
                }
            }
        }
    }
`
export default S;
