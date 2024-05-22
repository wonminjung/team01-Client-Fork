import styled from "styled-components";
import theme from "../../global/theme";

const S = {};
const PALETTE = theme.PALETTE;

S.LayoutWrapper = styled.div`
    width: 100%;
    height: 200vh;
`
S.Header = styled.header`
    width: 100%;
    height: 100px;
    display: flex;
    position: relative;
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
export default S;
