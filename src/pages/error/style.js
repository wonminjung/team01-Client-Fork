import styled from "styled-components";
import theme from "../../global/theme";

const S = {};

    S.PNFrootContainer = styled.div`
        width: 70vw;
        height: 100%;
        margin: 5% 15%;
    `;

    S.PNFLogo = styled.span`
        font-size: ${theme.FONT_SIZE.h2};
        font-weight: ${theme.FONT_WEIGHT.bold};
        line-height: normal;
        color: ${theme.PALETTE.yellow};
    `;

    S.PNFMessageContainer = styled.div`
        margin: 48px 0;
        display: flex;
    `;

    S.PNFMessageSectionWrapper = styled.div`
        width: 50%;
        height: 100%;
    `;

    S.PNFElementSpacing = styled.div`
        padding: 12px 0;
    `;

    S.h1 = styled.h1`
        font-size: 140px;
        font-weight: ${theme.FONT_WEIGHT.bold};
        line-height: normal;
    `;
    
    S.h2 = styled.h2`
        font-size: 24px;
    `;
    
    S.h6 = styled.h6`
        font-size: 14px;
        font-weight: ${theme.FONT_WEIGHT.bold};
    `;

    S.PNFimageWrapper = styled.div`
        text-align: center;
    `;


export default S;