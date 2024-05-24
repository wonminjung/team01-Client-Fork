import styled from 'styled-components'

const S = {};

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

export default S;