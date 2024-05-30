import styled from 'styled-components'
import theme from '../../global/theme';
import { flexCenterColumn } from "../../global/common";


const S = {};
const PALETTE = theme.PALETTE;

/* swiper */
S.SwiperWrapper = styled.div`
    & .swiper-slide{
        height : 100px;
        background-color: gray;
    }
    & .swiper-button-prev::after, .swiper-button-next::after{
        color : black;
        font-size: 15px;
    }
` 

S.BookingListContainer = styled.div`
    height: 200vh;
    margin: 20px 0 0 70px; 
    position: relative;
`

S.TitleWrapper = styled.div`
    & .pageTitle{
            color : ${theme.PALETTE.black};
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 20px;
        }
        & .pageSubTitle{
            color : ${theme.PALETTE.black};
            font-size: 20px;
            font-weight: bold;
        }
    
`

S.BookingLists = styled.div`
        padding: 50px 50px 50px; //위쪽 내부여백만 0

`


export default S;