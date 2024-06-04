import styled from 'styled-components';
import theme from '../../../../global/theme';

const S = {};

    // 검색결과 오른쪽 컨테이너
    S.MiniDetailContainer = styled.div`
        flex: 40%;
    `;

    // 사이드에 margin
    S.MarginSideContainer = styled.div`
        margin: 0 24px;
    `;

    // 숙소 제목
    S.Title = styled.div`
        margin: 32px 0 24px 0;
        text-align: center;
        font-weight: ${theme.FONT_WEIGHT.bold};

        & > div {
            font-size: ${theme.FONT_SIZE.h6};
        }
    `;

    // 숙소 이미지 컨테이너
    S.ImageGridContainer = styled.div`
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        grid-template-rows: repeat(2, auto);
        height: auto;
        gap: 4px;
        
        /* 이미지 감싸는 컨테이너 */
        & > div {
            border-radius: 20px;
            overflow: hidden;
            aspect-ratio: 5/4;
            
            /* 이미지 */
            & > img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            
        }
        
        /* 첫번째 이미지 디자인 */
        .gridItem-1 {
            grid-column: 1/2;
            grid-row: 1/3;
            gap: 0px;
            aspect-ratio: inherit;
        }

        

    `;

    // 숙소에 대한 개요 컨테이너
    S.OverviewContainer = styled.div`
        padding: 32px 0;
    `;

    // 숙소명전체? 개요제목?
    S.OverviewTitle = styled.div`
        font-weight: ${theme.FONT_WEIGHT.bold};
        font-size: 16px;
        margin-bottom: 8px;
    `;
    
    // 침실, 화장실, 침대 몇개인지 리스트
    S.OverviewList = styled.ul`
        
        & > li {
            font-size: 14px;
        }
    `;
    


export default S;