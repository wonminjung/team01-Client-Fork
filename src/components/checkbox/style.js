import styled from "styled-components";

const S = {};

    S.CheckboxWrapper = styled.div`
        display: inline-flex;
        align-items: center;
        user-select: none;
    `;

    S.Checkbox = styled.input`
        appearance: none;
        width: 24px;
        height: 24px;
        border: 1px solid #6A6A6A;
        border-radius: 50%;
        cursor: pointer;

        &:hover {
            border: 1px solid #F2AC29;
        }

        &:checked {
            /* background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e"); */
            background-image: url("./global/components/checkbox/check-solid.svg");
            background-size: 80% 80%;
            background-position: center;
            background-repeat: no-repeat;
            background-color: #F2AC29;
            border: none;
        }

    `;

export default S;