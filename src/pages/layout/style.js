import styled from "styled-components";
const S = {};

S.Header = styled.header`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &.scrolled {
        border-bottom: 1px solid #6a6a6a;
    }
`;

export default S;
