import styled from "styled-components";
import theme from "../../global/theme";

const { PALETTE } = theme;
const S = {};

    S.ModalFilter = styled.div`
        width: 100vw;
        height: 100vh;
        display: none;
        background-color: rgb(0, 0, 0, 0.5);
        position: fixed;
        z-index: 1500;
        top: 0;
        left: 0;
        justify-content: center;
        align-items: center;


        &.filterBg {
            display: flex;
        }

    `;

    S.Popup = styled.div`
        width: 500px;
        background-color: white;
        border-radius: 20px;
        max-height: calc(100vh - 300px);
        overflow: hidden;
        background-color: #fff;
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
        

        & .filterHeader {
            text-align: center;
            position: relative;
            border-bottom: 1px solid ${theme.PALETTE.gray[200]};

            &>h6 {
                padding: 20px;
            }
        }

        & .closeBtn {
            position: absolute;
            left: 0;
            top: 0;
            cursor: pointer;
            
            & svg {
                font-size: 16px;
                padding: 20px;
            }
        }


        & .filterListBox {
            
            padding: 20px 15px 15px;
            height: calc(100vh - 414px);
            overflow-y: scroll;
            &::-webkit-scrollbar{
                width: 6px;
            }
            &::-webkit-scrollbar-thumb{
                background: ${PALETTE.yellow};
                border-radius: 3px;
            }

            & .priceFilter {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding-bottom: 35px;

                & h6 {
                    width: 100%;
                    font-size: 20px;
                    font-weight: bold;
                    margin-bottom: 40px;
                }
                & .range-slider{
                        height: 5px;
                        width: 400px;
                }
                & .range-slider .range-slider__thumb{
                    width: 20px;
                    height: 20px;
                }
                & .range-slider-yellow {
                    background: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%ffff' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")#ddd;
                }
                & .range-slider-yellow .range-slider__range {
                    background: #ffbf00;
                    transition: height 0.3s;
                }
                & .range-slider-yellow .range-slider__thumb {
                    background: #faa307;
                    transition: transform 0.3s;
                }
                & .range-slider-yellow .range-slider__thumb[data-active] {
                    transform: translate(-50%, -50%) scale(1.1);
                }
                & .range-slider-yellow .range-slider__range[data-active] {
                    height: 5px;
                }
                & .priceText{
                    padding-top: 30px;
                    display: flex;
                    width: 400px;
                    justify-content: space-between;
                    align-items: center;
                    &>div{
                        position: relative;
                        display: flex;
                        flex-direction: column;
                        &::before{
                            content: '￦';
                            position: absolute;
                            left: 5px;
                            top: 24px;
                            z-index: 1;
                            font-size: 14px;
                            color: ${PALETTE.gray[300]};
                        }
                        & span{
                            font-size: 14px;
                            display: inline-block;
                            height: 22px;
                        }
                    }
                    & input{
                        width: 140px;
                        border: none;
                        outline: none;
                        font-size: 16px;
                        border-bottom: 1px solid ${PALETTE.gray[200]};
                        padding: 0 0 5px 25px;
                        letter-spacing: 1px;
                        color: ${PALETTE.black};
                        font-weight: bold;
                        position: relative;
                        color: ${PALETTE.yellow};
                    }
                }

            }

            & .roomFilter{
                & h6{
                    width: 100%;
                    font-size: 20px;
                    font-weight: bold;
                    margin-bottom: 30px;
                }
                & .filterList{
                    & ul{
                        & li{
                            margin-bottom: 20px;
                            & p{
                                display: flex;
                                align-items: center;
                                margin-bottom: 10px;
                                color: ${PALETTE.black};
                                & svg{
                                    margin-right: 5px;
                                    font-size: 16px;
                                    & path{
                                        fill: ${PALETTE.yellow}
                                    }
                                }
                            }
                            & .numberBtnBox{
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                width: 100%;
                                & input[type=radio]{
                                    appearance: none;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    background-color: #fff;
                                    border: 1px solid ${PALETTE.gray[200]};
                                    padding: 10px 0;
                                    width: 60px;
                                    border-radius: 8px;
                                    cursor: pointer;
                                    font-size: 14px;
                                    transition: 0.2s;
                                    &::before{
                                        content: attr(label);
                                        color: ${PALETTE.gray[300]};
                                        transition: 0.2s;
                                    }
                                }
                                & input[type=radio]:checked{
                                    border: 1px solid ${PALETTE.yellow};
                                    background-color: ${PALETTE.yellow};
                                    &::before{
                                        color: #fff;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        & .bottomBox{
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-top: 1px solid ${PALETTE.gray[200]};
            &>div{
                & button{
                    padding: 20px 20px;
                    color: ${PALETTE.black}
                }
            }
            & .filterRemoveBox{
                & button{
                    border: none;
                    background-color: transparent;
                    cursor: pointer;
                }
            }
            & .filterSubmitBox{
                padding-right: 6px;
                & button{
                    padding: 12px 20px;
                    height: inherit;
                    width: inherit;
                    border-radius: 15px;
                    &:hover{
                        color: #fff;
                    }
                }
            }
        }
        
    `;


export default S;