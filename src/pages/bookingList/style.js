import styled from 'styled-components'
import theme from '../../global/theme';
import { flexCenterColumn } from "../../global/common";


const S = {};
const PALETTE = theme.PALETTE;

/* 전체 페이지 */
S.BookingListContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 1180px;
    margin: 0 auto;
    padding: 50px;
    min-height: calc(100vh - 230px);
    &>ul{
        max-width : 1300px;
        margin: 0 auto; //좌우 자동
    }
`
/* 페이지 제목 : 여행 - 예정된 예약 */
S.TitleWrapper = styled.div`
    margin-bottom: 50px;
    & h1{
        font-size: 28px;
        font-weight: bold;
        color: ${PALETTE.black};
        margin-bottom: 15px;
    }
        & .pageSubTitle{
            color : ${theme.PALETTE.black};
            font-size: 20px;
            /* font-weight: bold; */
        }
    
`
/* 예약내역이 없을 때의 페이지 */
S.NotBookingWrapper = styled.div`
    display: flex; 
    justify-content: flex-start;
    align-items: center;//무방
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid ${PALETTE.gray[200]};
    width: 100%;
    height: 280px;
    & .textBox{
        width:486px;
        padding: 40px;
        & .iconBox{
            & img {
                width:45px;
                height: 45px;
                /* transform: rotate(30deg); */
                margin-bottom:27px;
            }
        }
        & .text{

            & h3{
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 14px;
            }
            & p{
                font-size: 14px;
                margin-bottom: 30px;
            }

        }
        & .navToMainPage{
            & button{
                & a{
                color: ${PALETTE.yellow};
                width:100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                &:hover{
                    color: white;
                }
            }
            }
 
        }

    }
    & .imgBox{
        border-radius: 0 20px 20px 0;
        overflow:hidden;
        height: 100%;
        display: flex;
        align-items: center;
        width: calc(100% - 486px);
        min-width : 400px;
        & img{
            width: 100%;   
            height: inherit;
            object-fit: cover;
        }
    }

`
/* BookingItem */
S.BookingItemWrapper = styled.button`
        cursor: pointer;
        transition: 0.3s; // hover되면 0.3초동안 커짐
        &:hover{//커서 이미지 위에 올리면 1.02배 커짐
            transform: scale(1.04);
        }
        text-align: left;
        display: flex; // 가로로 배치 예정이라 디폴트 row 생략
        justify-content: flex-start;
        align-items: center;
        overflow: hidden;
        border: 1px solid ${PALETTE.gray[200]};
        width: 100%;
        height: 280px;
        transition: 0.4s;
        border-radius: 40px;
        background-color: white;

        &:hover {
        /* 호버 상태일 때 border 색상 */
        border-color: ${PALETTE.yellow};
        }
        /* 아이템이 활성화된 경우의 스타일 */
        &.active {
            /* 클릭된 아이템의 border 색상 */
            border-color: ${PALETTE.yellow}; 
           
        }

        & .textBox{
            width: 486px;
            padding: 40px;
            & .text{
                & .title{ // 노을빛을 품은 감성 숙소, 선센티아
                    font-size: 20px;
                    font-weight: bold;
                    margin-bottom: 30px;
                }
                & .schedule, .briefAddress, .bookingCode{
                    color: ${PALETTE.gray[300]};
                    font-size: 15px;
                    margin: 12px;
                }
            }
        }
        & .imgBox{
            border-radius: 0 20px 20px 0;
            overflow: hidden;
            height: 100%;
            display: flex;
            align-items: center;
            width: calc(100% - 486px); 
             min-width: 400px;
               & img{
                width: 100%;
               } 

        }

`
/* panel부분  */ 
S.panel = styled.div`
    margin: 10px 0px;
    background-color: white;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
`

/* 예약 상세 내역 (bookingDetail) */
S.bookingDetailWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center; //확인하기
    border : 1px solid ${PALETTE.gray[200]};
    border-radius: 40px;
    overflow: hidden;
    width: 100%;
    height: 500px;

    &.active{
        border-color:  ${PALETTE.yellow};
    }
    & .mapBox{
            width: 50%;
            height: 100%;
            padding: 30px;
            display : flex;
            flex-direction: column;
            position : relative;
            & .howToGo {
                display: flex;
                flex-direction: row;
                margin-bottom: 15px;
                & .iconPort{

                    & svg{ // port-icon
                        font-size: 18px;
                        & path{
                            fill : ${PALETTE.yellow};
                        }
                        margin-right : 5px;
                    }}
                & .textArea{
                    padding-left: 0px;
                    & .textBox{ // 찾아가는 방법
                        font-size: 18px;
                        margin-bottom: 10px
                    }
                    & .detailAddress{ // 주소
                        font-size:15px;
                        color: ${PALETTE.gray[300]};
                        width: 100%;
                        word-break: keep-all;
                    }
                }
            }
            & #map{
                    height : 100%;
                    border-radius: 20px;
            }
            & .iconCopy{
                border: none;
                background-color: inherit ;
                cursor: pointer;
                position: absolute;
                right : 30px;
                top : 55px;
                display: flex;
                align-items: center;
                & img{ // 주소복사 icon
                    height: 20px;
                }
                & h5{ // 주소 복사
                    font-size: 15px;
                    margin-left : 3px;
                }
            }
    }
    
    & .infoBox{
        width: 100%;
        display: flex;

        & .leftBox{
            width: 50%;
            height : 80%;
            display: flex;
            flex-direction: column;
            padding-left: 20px;

            /* 숙박 일정 */
            & .scheduleWrapper{
                margin-top : 40px;
                justify-content: center;
                display: flex;
                flex-direction: column;
                align-items: flex-start;// 수평 가운데 정렬
                justify-content: center;// 수직 가운데 정렬
                & .title{
                    width : 200px;
                    height: 20px;
                    display: flex;
                    align-items: center;
                    margin-bottom: 15px;
                    margin-right:50px;
                    & svg{ // 달 아이콘
                    font-size : 22px;
                     & path{
                        fill : ${PALETTE.yellow}
                     }
                    padding-left : 10px;
                    }
                    & h3{ // 숙박일정
                    font-size: 18px;
                    margin-left:14px;
                    }
                }
                & .data{
                    display: flex;
                    flex-direction: column;
                    gap:10px; 
                    font-size: 16px;
                    padding-left: 44px;
                & .dat>div>h5{
                    width : 100px;                
                   }
                        & .checkInBox{
                            display: flex;
                            flex-direction: row;
                            & .checkIn{
                                color : ${PALETTE.gray[300]};
                                /* margin-right: 8px; */
                                width: 70px;
                                }
                            & .checkInDate{
                                /* width: 200px; */
                                }  
                        }
                            & .checkOutBox{
                                display: flex;
                                flex-direction: row;
                                & .CheckOut{
                                 color : ${PALETTE.gray[300]};
                                
                                 width: 70px;
                                }
                                & .checkOutDate{
                                    width: 200px;
                                }
                         }
                             & .headCountBox{
                                display: flex;
                                flex-direction: row;
                                 & .headCount{
                                 color : ${PALETTE.gray[300]};
                                
                                 width: 70px;
                                 }
                                & .headContNum{
                                   
                                 }
                        }

                    }
                }
            /* 호스트 연락처*/
            & .hostContactWrapper{
                    width: 80%;
                    height: 100px;
                    /* border: 1px solid #73AD21; */
                    justify-content: center;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;// 수평 가운데 정렬
                    justify-content: center;// 수직 가운데 정렬
                    
                    & .title{
                        display: flex;
                        align-items: center;
                        margin-bottom: 10px;
                        margin-right:50px;
                        & svg{ 
                        font-size : 22px;
                        & path{
                            fill : ${PALETTE.yellow}
                        }
                        padding-left : 10px;
                        }
                    & h3{ 
                    font-size: 18px;
                    margin-left:11px;
                    }
                    }
                    & .data{
                        position: relative;
                        left : 43px;
                        & h5{
                            color : ${PALETTE.gray[300]}
                            }
                        } 
                    }
            /* 체크인 방법 */
            & .checkInTipWrapper{
                width: 80%;
                height: 130px;
                /* border: 1px solid #73AD21; */
                display: flex;
                flex-direction: column;
                align-items: flex-start;// 수평 가운데 정렬
                justify-content: center;// 수직 가운데 정렬
                & .title{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 10px;
                    margin-right:50px;
                    & svg{ 
                    font-size : 22px;
                     & path{
                        fill : ${PALETTE.yellow}
                     }
                    padding-left : 10px;
                    }
                    & h3{ 
                    font-size: 18px;
                    margin-left:12px;
                    }
                }
                & .data{
                    & .tipList{
                        padding-left: 44px;
                        list-style-type : disc;
                        & .tipOne{
                            color : ${PALETTE.gray[300]};
                            margin-bottom: 10px;
                            white-space: pre-line;
                            /* font-size: 15px; */
                        }
                        & .tipTwo{
                            color : ${PALETTE.gray[300]};
                            /* font-size: 15px; */

                        }
                    }
                }
            }
        }



        & .rightBox{
            width: 50%;
            height: 80%;
            display: flex;
            flex-direction: column;
            position: relative;
            padding-right : 20px;

            /* 요금 상세 내역 */
            & .chargeWrapper {
                margin-top : 40px;
                width: 100%;
                height: 163px;
                /* border: 1px solid #73AD21; */
                display: flex;
                justify-content: flex-start;
                flex-direction: column;
                align-items: flex-start;// 수평 가운데 정렬
                margin-bottom:20px;
                & .title{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 12px;
                    margin-right:50px;
                    & svg{ 
                        font-size : 22px;
                        & path{
                            fill : ${PALETTE.yellow}
                        }
                        padding-left : 10px;
                        }
                    & h3{ 
                    font-size: 18px;
                    margin-left:14px;
                    }
                }
                & .data{
                    position: relative;
                    left : 40px;
                    width : 75%;
                    & .calc{
                        font-size: 15px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-bottom: 15px;
                        & span{
                            font-size: 15px;
                            color: ${PALETTE.black};
                        }
                    }
                    & .divisionLine{
                        border-top: 1px solid #444444;
                        margin: 10px 0px;
                        border-color: silver;
                        }
                    }
                    & .sum{
                        display: flex;
                        justify-content: space-between;
                        font-size: 15px;
                        margin-bottom: 30px;
                        color : ${PALETTE.yellow}
                    }
                }
            }
        }
        /* 환불 정책 */
        & .refundPolicyWrapper{
            width: 80%;
            height: 163px;
            /* border: 1px solid #73AD21; */
            justify-content: center;
            display: flex;
            flex-direction: column;
            align-items: flex-start;// 수평 가운데 정렬
            justify-content: center;// 수직 가운데 정렬
            margin-top : 20px;
            & .title{
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 12px;
                margin-right:50px;
                & svg{ 
                    font-size : 22px;
                     & path{
                        fill : ${PALETTE.yellow}
                     }
                    padding-left : 6px;
                    }
                    & h3{ 
                    font-size: 18px;
                    margin-left:10px;
                    }
            }
            & p{
                position: relative;
                left : 37px;
                margin:0 5px;
                letter-spacing: 0.5px;
                /* word-spacing:-1px; */
                line-height:18px;
                font-size: 14px;
            }
        }
        & .cancelBooking{
            position: absolute;
            top: -30px;
            right: 250px;
            & button{
                width: 200px;
                position: relative;
                margin: 4px;
                padding: 0;
                &>div{
                    width: 100%;
                    height: 100%;
                    & a{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100%;
                        margin: 0;
                        color : ${PALETTE.yellow};
                        &:hover{
                            color: white;
                        }
                    }
                    & img{
                        position: relative;
                        width: 20px;
                        margin-right: 5px;
                        top: -1px;
                    }
                }
            }
        }
                
        & .navToDetailPage{
            position: absolute;
            top: -30px;
            right: 23px;
            & button{
                width: 200px;
                position: relative;
                margin: 4px;
                padding: 0;
                &>div{
                    width: 100%;
                    height: 100%;
                    & a{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100%;
                        margin: 0;
                        color : ${PALETTE.yellow};
                        &:hover{
                            color: white;
                        }
                    }
                    & img{
                        position: relative;
                        width: 20px;
                        margin-right: 5px;
                        top: -1px;
                    }
                }
                

               
                
            }
        }
    

`
export default S;