import styled from "styled-components";

const S = {};

    S.Input = styled.input`
        
        width: 216px;
        height: 48px;
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


export default S;