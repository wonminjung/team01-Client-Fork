import styled from 'styled-components'
import theme from '../../global/theme';
import { flexCenterColumn } from "../../global/common";


const S = {};
const PALETTE = theme.PALETTE;

/* 전체 페이지 */
S.BookingListContainer = styled.div`
    height: 200vh;
    padding: 40px 100px;
    position: relative;

    &>ul{
        max-width : 1300px;
        margin: 0 auto; //좌우 자동
    }
`
/* 페이지 제목 : 여행 - 예정된 예약 */
S.TitleWrapper = styled.div`
    margin-bottom: 60px;
    margin-left : 100px;
    & .pageTitle{
            color : ${theme.PALETTE.black};
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 10px;
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
                    & img{ // port-icon
                        width: 50px;
                        height: 30px;
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
                        width: calc(100% - 85px);
                        word-break: keep-all;
                    }
                }
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
            display: flex;
            flex-direction: column;
            align-items: center;// 수평 가운데 정렬
            justify-content: center;// 수직 가운데 정렬

            /* 숙박 일정 */
            & .scheduleWrapper{
                width: 80%;
                height: 163px;
                /* border: 1px solid #73AD21; */
                justify-content: center;
                display: flex;
                flex-direction: column;
                align-items: flex-start;// 수평 가운데 정렬
                justify-content: center;// 수직 가운데 정렬
                & .title{
                    display: flex;
                    align-items: center;
                    margin-bottom: 15px;
                    margin-right:50px;
                    & img{ // 달 아이콘
                    height: 23px;
                    }
                    & h3{ // 숙박일정
                    font-size: 18px;
                    margin-left: 3px;
                    }
                }
                & .data{
                    display: flex;
                    flex-direction: column;
                    gap:10px; 
                    font-size: 16px;
                    margin-right: 15px;
                        & .checkInBox{
                            display: flex;
                            flex-direction: row;
                            & .checkIn{
                                color : ${PALETTE.gray[300]};
                                margin-right: 8px;
                                }
                            & .checkInDate{
                                }  
                        }
                            & .checkOutBox{
                                display: flex;
                                flex-direction: row;
                                & .CheckOut{
                                 color : ${PALETTE.gray[300]};
                                 margin-right: 8px;
                                }
                                & .checkOutDate{
                                }
                         }
                             & .headCountBox{
                                display: flex;
                                flex-direction: row;
                                 & .headCount{
                                 color : ${PALETTE.gray[300]};
                                 margin-right: 8px;
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
                        & img{
                            height: 23px;
                            margin-bottom: 5px;
                        }
                        & h3{
                            font-size: 18px;
                            margin-left: 3px;
                        }
                    }
                    & .data{
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
                    & img{
                        height: 38px;
                        position: relative;
                        left: -10px;
                    }
                    & h3{
                        font-size: 18px;
                        margin-left: -10px;

                    }
                }
                & .data{
                    & .tipList{
                        padding-left: 20px;
                        list-style-type : disc;
                        & .tipOne{
                            color : ${PALETTE.gray[300]};
                            margin-bottom: 10px;
                            white-space: pre-line
                        }
                        & .tipTwo{
                            color : ${PALETTE.gray[300]};

                        }
                    }
                }
            }
        }



        & .rightBox{
            width: 50%;
            display: flex;
            flex-direction: column;
            position: relative;

            /* 요금 상세 내역 */
            & .chargeWrapper {
                width: 80%;
                height: 163px;
                /* border: 1px solid #73AD21; */
                justify-content: center;
                display: flex;
                flex-direction: column;
                align-items: flex-start;// 수평 가운데 정렬
                justify-content: center;// 수직 가운데 정렬
                & .title{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 12px;
                    margin-right:50px;
                    & img{
                        height: 27px;
                    }
                    & h3{
                        font-size: 18px;
                        margin-left: -1px;
                    }
                }
                & .data{
                    & .calc{
                        font-size: 17px;
                    }
                    & .divisionLine{
                        border-top: 1px solid #444444;
                        margin: 10px 0px;
                        border-color: silver;
                        }
                    }
                    & .sum{
                        font-size: 17px;
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
            & .title{
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 12px;
                margin-right:50px;
                & img{
                    height: 27px;
                }
                & h3{
                    font-size: 18px;
                    margin-left: -1px;
                }
            }
            & p{
                margin:0 5px;
                letter-spacing: 0.5px;
                /* word-spacing:-1px; */
                line-height:18px;
            }
        }
        & .navToDetailPage{
            position: absolute;
            top: 350px;
            left: -1px;
            & button{
                width: 200px;
                position: relative;
                margin: 4px;
                & .whiteIcon, .yellowIcon{
                        height: 20px;
                        position: absolute;
                        left: 24px;
                        bottom: 15px;
                    }
                & .yellowFont, .whiteFont{
                    /* font-weight: bold; */
                    margin-left: 10px;
                }
                & .yellowFont{
                    color: ${PALETTE.yellow};
                }
                & .whiteFont{
                    color: white;
                }
                
            }
        }
    

`
export default S;