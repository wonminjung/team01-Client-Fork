import styled from "styled-components";

const S = {};

    S.Button = styled.button`
        
        width: 156px;
        height: 48px;
        display: inline-flex;
        padding: 0 12px;
        border: 1px solid #F2AC29;
        border-radius: 20px;
        background-color: white;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: 0.3s;

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

export default S;