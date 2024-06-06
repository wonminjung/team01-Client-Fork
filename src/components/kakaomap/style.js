import styled from "styled-components";
import theme from '../../global/theme.js';

const S = {};

    S.map = styled.div`
         height: 100%; 
         & #map{
            border : 1px solid ${theme.PALETTE.gray[200]};
            width: 100%;
            height: 95%; 
        }

    `;


export default S;