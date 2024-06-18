import styled from "styled-components";
import theme from "../../global/theme";

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
        /* height: 500px; */
        background-color: white;
        border-radius: 20px;
        max-height: calc(100vh - 300px);

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


        }




    `;


export default S;