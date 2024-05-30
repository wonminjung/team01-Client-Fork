import styled, { keyframes } from "styled-components";
import theme from "../../global/theme";
import { flexCenterColumn } from "../../global/common";


const S = {};
const PALETTE = theme.PALETTE;


/* 하트버튼 애니메이션 */
const sparkle = keyframes`
    0%, 100% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.2);
        opacity: 0.8;
    }
`;

//💥문제 : main페이지에서 wishList 검색해서 넘어갈때, 이상한 화면 지나감

/* 위시리스트 전체 */
S.WishListContainer = styled.div`
    height: 200vh; //1vh = 1% of viewport height, vw
    position: relative;
`

S.PageTitle = styled.h1`
    color : ${theme.PALETTE.black};
    font-size: 28px;
    font-weight: bold;
    position: absolute; /* 절대 위치 지정 */
    top: 1px; /* 위에서 50px */
    left: 60px; /* 왼쪽에서 50px */
`


/* 숙소카드 1개 */
/* 위시리스트 flex-container */
S.ContentBox = styled.div`
    display: flex;
    padding: 50px 50px 50px; //위쪽 내부여백만 0
    justify-content: flex-start; // justify-content : 가로방향 아이템 정렬
    align-items: flex-start; // align-items : 세로방향 아이템 정렬
    flex-wrap : wrap;//줄바꿈 가능
   
    /* 위시리스트 flex-item */
    & .content{
        position: relative;
        // default width(화면크기가 1000px보다 작을 때) : 전체의 50%
        width: 50%;
        padding: 10px; //<-이거 화면커지면 왜 적용 안되는지 알아보기
        transition: 0.3s; // hover되면 0.3초동안 커짐
        &:hover{//커서 이미지 위에 올리면 1.02배 커짐
            transform: scale(1.02);
        }
        // 반응형 미디어
        // 화면크기가 1000px 이상일 때,
        @media(min-width: 1000px){
            // 해당 숙소카드는 1개당 width를 33.333px로 보이게 하겠다.
            width: calc(100% / 3);
        }
        @media(min-width: 1300px){
            width: calc(100% / 4);
        }
        @media(min-width: 1550px){
            width: calc(100% / 5);
        }
        @media(min-width: 1900px){
            width: calc(100% / 6);
        }
        // 하트버튼(컴포넌트로 만들 예정/CSS도 손보기)
        & .heart{
            position: absolute;
            top : 18px;
            right: 25px;
            color: ${PALETTE.yellow};
            width: 25px;
            height : 25px;
            animation: ${sparkle} 1s infinite; // 애니메이션 적용
        }

        & a{ // 링크로 감싸준 부분
            & .imgBox{
                aspect-ratio: 5/3; //가로비율이 세로보다 조금 김
                border-radius: 20px;
                overflow: hidden; //삐져나오는 걸 가려줌
                & img{
                    width: 100%;
                    height: 100%; 
                    object-fit: cover; //전체 콘텐츠 상자를 채우면서 가로 세로 비율을 유지하도록 크기가 조정
                    border-radius: 20px;
                    }
                }
            & .textBox{
            padding: 20px 0;
            text-align: center;
            & .titleBox{
                font-size: 20px;
                margin-bottom: 13px;
                font-weight: bold;
                color: ${PALETTE.black};
            }
            & .addressAndPriceBox{
                    font-size: 14px;
                    margin-bottom: 28px;
                    & .address{
                        color: ${PALETTE.gray[300]};
                    }
                    & .price{
                        color: ${PALETTE.yellow};
                        display: inline-block;
                        margin-left: 10px;
                    }
                }
            & .ResevateButton{
                font-size: 12px;
                font-weight: bold;
                color: ${PALETTE.black};
            }
        } }
    }
        
`


export default S;