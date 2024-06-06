import styled, { keyframes } from "styled-components";
import theme from '../../global/theme.js';

const S = {};

    /* 하트버튼 콩닥콩닥 애니메이션 */
    const sparkle = keyframes`
        0%, 100% {
            transform: scale(1);
            opacity: 1;
        }
        50% {
            transform: scale(1.2);
            opacity: 0.8;
        }
    `;

    /* 하트버튼 디자인 */
    S.HeartBtn = styled.button`
        border: none;
        outline: none;
        background-color: inherit ;
        cursor: pointer;
        & .heart{
            cursor: pointer;
            position: absolute;
            top : 34px;
            right: 25px;
            color: ${theme.PALETTE.yellow};
            width: 25px;
            height : 25px;
            animation: ${sparkle} 1s infinite; // sparkle 애니메이션 적용
        
        }

    `;


export default S;
        
        
        
        
        
