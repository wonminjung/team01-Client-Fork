import styled from "styled-components";
import theme from "../../global/theme";
import { flexCenterColumn } from "../../global/common";


const S = {};

S.WishListContainer = styled.div`
    height: 200vh;
` 

S.WishItemWrapper = styled.div`
    display: block;
    text-align: center;
    position: absolute;
    right: 1200px;
    top: 100px;
    // 좋아요 하트 버튼
   & .like{
        color: red;
        width: 25px;
        height : 25px;
        position: relative;
        left:155px;
        top: 3cap;
   }
   // 카드1
    & .wishItem {
        & .imgWrapper{
            margin-bottom: 19px;
            & img{
                width: 360px;
                height: 216px;
                border-radius: 20px;
            }
        }
        & .ItemInfo{

            & h1{
                font-size: 20px;
                color : ${theme.PALETTE.black};
                margin-bottom: 10px;
            }

            & .detailInfo{
                margin-bottom : 23px;
            }

            &:last-child{
                font-size: 12px;
                color : ${theme.PALETTE.black}
            }
        }
    }
`
S.span = styled.span`
    display: inline-flex;
    justify-content: center;
    width : 500px;
   
    // 제주시/제주도
    & h2{
        font-size: 12px;
        color: #6A6A6A;
    }
    // ￦250,000
    & h2:last-child{
        margin-left:5px;
        color: ${theme.PALETTE.yellow}
    }
`


export default S;