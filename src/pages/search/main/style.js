import styled from 'styled-components'
import theme from '../../../global/theme';

const S = {};

    S.SearchMainContainer = styled.div`
        padding-top: 80px;
        display: flex;
    `;

    S.NoSearchResult = styled.div`
        width: 100%;
        height: calc(100vh - 180px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & svg{
            font-size: 40px;
            margin-bottom: 30px;
            & path{
                color: ${theme.PALETTE.gray[200]};
            }
        }

        & > h6 {
            color: ${theme.PALETTE.gray[200]};
        }
    `;


export default S;