import styled, { css } from 'styled-components';
import theme from '../../../../global/theme';
import BasicButton from '../../../../components/button/BasicButton';
import KakaoMap from '../../../../components/kakaomap/KakaoMap';

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

    // 숙소 제목과 숙소 상세보기 버튼 감싸는 컨테이너
    S.HeaderContainer = styled.div`
        margin: 32px 0 24px 0;
        text-align: center;
        font-weight: ${theme.FONT_WEIGHT.bold};
        display: flex;
        justify-content: space-between;
        text-align: center;

        & > div {
            font-size: ${theme.FONT_SIZE.h6};
            display: flex;
            align-items: center;
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
            
            &:hover {
                filter: brightness(0.85);
                cursor: pointer;
            }
            
            /* 이미지 */
            & > img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                aspect-ratio: 5/4;
            }
            
        }
        
        /* 첫번째 이미지 디자인 */
        .gridItem-1 {
            grid-column: 1/2;
            grid-row: 1/3;
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
    S.OverviewDescriptionContainer = styled.div`
        height: 100px;
        overflow: hidden;
        
        /* 더보기 버튼 상태 변경시 */
        &.overviewChecked {
            overflow: visible;
            height: 100%;
        }
    `;

    // 숙소 상세 설명
    S.OverviewDescription = styled.div`
        font-size: 14px;
        height: 100%;
        margin-bottom: 16px;
        line-height: 18px;
        white-space: pre-line;
    `;

    // 설명 더보기 버튼
    S.OverviewMoreButton = styled(BasicButton)`
        width: 100%;
        position: relative;

        &::before {
            content: "";
            position: absolute;
            top: -41px;
            left: 0;
            width: 100%;
            height: 40px;
            background: linear-gradient(0deg, #fff, transparent);
        }
    `;

    // 숙소 편의시설
    S.OverviewConvenience = styled.ul`
        display: flex;
        flex-wrap: wrap;
        row-gap: 12px;

        & .dIcon{
        margin-bottom: 15px;
        position: relative;
        font-size: 14px;
        color: ${theme.PALETTE.gray[300]};
        padding-left: 22px;
        line-height: 22px;

            &::before{
                margin-right: 7px;
                display: inline-block;
                position: absolute;
                top: 2px;
                left: 0;
                width: 15px;
                height: 15px;
                vertical-align: bottom;
            }
            &.user::before{
                content: url("./images/pages/detail/user.svg");
            }
            &.room::before{
                content: url("./images/pages/detail/house.svg");
            }
            &.bed::before{
                content: url("./images/pages/detail/bed-single.svg");
            }
            &.bath::before{
                content: url("./images/pages/detail/bath.svg");
            }
            &.picture::before{
                content: url("./images/pages/detail/image.svg");
            }
            &.wifi::before{
                content: url("./images/pages/detail/wifi-full.svg");
            }
            &.tv::before{
                content: url("./images/pages/detail/tv.svg");
            }
            &.car::before{
                content: url("./images/pages/detail/car.svg");
            }
            &.pool::before{
                content: url("./images/pages/detail/pool.svg");
            }
            &.time::before{
                content: url("./images/pages/detail/clock.svg");
            }
            &.check::before{
                content: url("./images/pages/detail/credit-card.svg");
            }
            &.users::before{
                content: url("./images/pages/detail/users.svg");
            }
            &.pet::before{
                content: url("./images/pages/detail/paw.svg");
            }
            &.moon::before{
                content: url("./images/pages/detail/moon.svg");
            }
            &.photo::before{
                content: url("./images/pages/detail/camera.svg");
            }
            &.memo::before{
                content: url("./images/pages/detail/text-document.svg");
            }
            &.trash::before{
                content: url("./images/pages/detail/bin.svg");
            }
            &.lock::before{
                content: url("./images/pages/detail/bag.svg");
            }
            &.off::before{
                content: url("./images/pages/detail/power.svg");
            }
            &.note::before{
                content: url("./images/pages/detail/note.svg");
            }
            &.caution::before{
                content: url("./images/pages/detail/Combined Shape.svg");
            }
            &.eye::before{
                content: url("./images/pages/detail/eye.svg");
            }
            &.bell::before{
                content: url("./images/pages/detail/bell.svg");
            }
        }
        
        & > li {
            display: flex;
            margin-bottom: 8px;
            flex: 50%;

            & > span {
                font-size: 14px;
                color: ${theme.PALETTE.gray[300]};
                display: flex;
                line-height: 18px;
                
            }
        }

    `;

    S.MapContainer = styled.div`
        height: 320px;
    `;


export default S;