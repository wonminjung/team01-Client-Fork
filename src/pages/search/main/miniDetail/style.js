import styled, { css } from 'styled-components';
import theme from '../../../../global/theme';
import BasicButton from '../../../../components/button/BasicButton';

const S = {};

    // 검색결과 오른쪽 컨테이너
    S.MiniDetailContainer = styled.div`
        flex: 40%;
        height: calc(100vh - 180px);
        overflow-y: scroll;
        scrollbar-width: none;
    `;

    // 사이드에 margin
    S.MarginSideContainer = styled.div`
        margin: 0 30px;
        overflow: hidden;
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
            
            &:hover {
                filter: brightness(0.85);
                cursor: pointer;
            }
            
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
            aspect-ratio: inherit;
        }


    `;

    // 숙소에 대한 개요 컨테이너
    S.OverviewContainer = styled.div`
        width: 100%;
        padding: 32px 0;
        position: relative;
    `;
    
    S.SectionContainer = styled.div`
        margin-bottom: 24px;
    `;

    // 미니디테일 각 섹션 제목?
    S.SectionTitle = styled.div`
        font-size: 16px;
        margin-bottom: 15px;
    `;

    // 침실, 화장실, 침대 몇개인지 리스트
    S.OverviewList = styled.ul`
        display: flex;
        flex-direction: column;
        row-gap: 4px;
        
        & > li {
            font-size: 14px;
            margin-bottom: 8px;
            color: ${theme.PALETTE.gray[300]};
            display: flex;
            margin-bottom: 8px;

            & > span {
                font-size: 14px;
                color: ${theme.PALETTE.gray[300]};
                display: flex;
                
                &:first-child {
                    width: 15px;
                    height: 15px;
                    margin-right: 7px;
                }

                & > img {
                    object-fit: cover;
                }
                
            }
        }

    `;

    // 숙소 설명 컨테이너
    S.OverviewIntroductionContainer = styled.div`
        height: 100px;
        overflow: hidden;
        
        /* 더보기 버튼 상태 변경시 */
        &.overviewChecked {
            overflow: visible;
            height: 100%;
        }
    `;

    // 숙소 상세 설명
    S.OverviewIntorduction = styled.div`
        font-size: 14px;
        height: 100%;
        margin-bottom: 12px;
    `;

    // 설명 더보기 버튼
    S.OverviewMoreButton = styled(BasicButton)`
        width: 100%;
    `;

    // 숙소 편의시설
    S.OverviewAmenities = styled.ul`
        display: flex;
        flex-wrap: wrap;
        row-gap: 12px;
        
        & > li {
            display: flex;
            margin-bottom: 8px;
            flex: 50%;

            & > span {
                font-size: 14px;
                color: ${theme.PALETTE.gray[300]};
                display: flex;
                
                &:first-child {
                    width: 15px;
                    height: 15px;
                    margin-right: 7px;
                }

                & > img {
                    object-fit: cover;
                }
                
            }
        }
    `;


export default S;