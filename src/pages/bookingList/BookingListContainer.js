import React, { useState, useEffect } from 'react';
import S from './style';
import BookingItem from './BookingItem';
import NotBooking from './NotBooking';
import BookingDetail from './BookingDetail';
import ResetHeader from '../layout/ResetHeader';
import ScrollEvent from '../layout/ScrollEvent';

// 예약한 숙소리스트
const BookingListContainer = () => {
    ResetHeader();
    ScrollEvent();
   
    const userObjectId = "667ad4d1ab5eb02e847a4118";// 로그인한 유저의 식별자(임의)
    const [isReserved, setIsReserved] = useState(null); // 유저가 예약한 숙소가 있는지 여부 상태
    const [activeIndex, setActiveIndex] = useState(null); // 열린 아코디언 패널의 인덱스를 저장하는 상태(null은 패널이 열리지 않은 상태)
    const [itemData, setItemData] = useState([]);

    useEffect(() => {
        const getBookingList = async () => {
            try{ //userId를 가지고 User객체에서 해당 _id를 찾고 => userId
                 // 그 _id를 가지고 Booking 해당 booking객체들을 가져오기 => bookingList
                const response = await fetch(`http://localhost:8000/booking/bookingList`,{
                    method : "POST",
                    headers : {
                        'Content-Type' : 'application/json; charset=utf-8'
                    },
                    body: JSON.stringify({
                        userId : userObjectId
                    })
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                // console.log(data);
                // [
                // 0: {_id: '667e97abbd69f55811325283', guests: 3, infants: 0, userId: '667ad4d1ab5eb02e847a4118', roomId: '667adac97aa8b09d01fb7e42', …},
                // 1: {_id: '667e97abbd69f55811325287', guests: 5, infants: 3, userId: '667ad4d1ab5eb02e847a4118', roomId: '667adac97aa8b09d01fb7e33', …},
                // 2: {_id: '667e97abbd69f55811325284', guests: 8, infants: 3, userId: '667ad4d1ab5eb02e847a4118', roomId: '667adac97aa8b09d01fb7e87', …},
                // 3: {_id: '667e97abbd69f55811325288', guests: 10, infants: 2, userId: '667ad4d1ab5eb02e847a4118', roomId: '667adac97aa8b09d01fb7e25', …},
                // 4: {_id: '667e97abbd69f55811325285', guests: 2, infants: 1, userId: '667ad4d1ab5eb02e847a4118', roomId: '667adac97aa8b09d01fb7f34', …},
                // 5: {_id: '667e97abbd69f55811325286', guests: 3, inf...}
                // ]

                if(data){//데이터가 있는경우
                    setIsReserved(true);// 예약한 숙소가 있어서 예약한숙소 보여줌
                    setItemData(data);// 뿌려줄 예약한 숙소 데이터 세팅
                }else{
                    setIsReserved(false);
                }

            }catch(error){ // 데이터를 못가져왔을 경우
                console.error("Error fetching bookingList:", error);
                setIsReserved(false);
            }

        }
        getBookingList();

    },[])


    // 아코디언 클릭 핸들러 (BookingItem부분 클릭시, BookingDetail 열림)
    const handleAccordionClick = (index) => {
        // activeIndex : 현재 열려 있는 아코디언 패널의 인덱스를 저장하는 상태 
        // index :  itemData 배열의 각 항목에 대한 인덱스
        
        //⭐아코디언 패널 토글 헷갈림
        //  activeIndex == index :클릭한 헤더의 정보와 관련된 패널이 이미 열려있단 의미여서 null로 닫아주는 로직.
        // activeIndex !== index : 클릭한 헤더의 정보와 관련된 패널이 열린게 없으니 새로 패널을 열고자 할 때를 의미하여 index를 불러오는 로직.
        setActiveIndex(activeIndex === index ? null : index);
    };


    // // 사진배너 데이터들
    // const itemData = [
    //     {
    //         id: "1",
    //         title: "노을빛을품은 감성 숙소, 선셋티아",
    //         img: "./images/pages/bookingList/room1.gif",
    //         schedule: "2024년 5월 19일 ~ 2024년 5월 20일",
    //         address: "제주시, 제주도, 한국",
    //         reservationNum: "HMZXMWA5J2",

    //         detailAddress : "제주 제주시 조천읍 선흘남4길 31",
    //         checkInDate : "5월 19일",
    //         checkInTime : "오후 3:00",
    //         checkOutDate : "5월 21일",
    //         checkOutTime : "오전 11:00",
    //         guests : 2,
    //         infants : 1,
    //         hostPhoneNum : "010-1234-5678",
    //         hostName : "Sunsetia", 
    //         howToCheck1 : `도어락 셀프 체크인 
    //         (비밀번호는 호스트가 문자로 전달)`,
    //         howToCheck2 : `건물 내 무료 주차`,
    //         dayPrice: 250000,
    //         stayPeriod : 2,
    //         cleanVat : 50000,

            
    //     },
    //     {
    //         id: "2",
    //         title: "일상호사, Ilsanghosa A",
    //         img: "./images/pages/bookingList/room2.webp",
    //         schedule: "2024년 5월 20일 ~ 2024년 5월 21일",
    //         address: "구좌읍, 제주도, 한국",
    //         reservationNum: "HMZXMWA5J3",

    //         detailAddress : "제주특별자치도 제주시 구좌읍 월정1길 54-15",
    //         checkInDate : "5월 19일",
    //         checkInTime : "오후 3:00",
    //         checkOutDate : "5월 21일",
    //         checkOutTime : "오전 11:00",
    //         guests : 2,
    //         infants : 1,
    //         hostPhoneNum : "010-1234-5678",
    //         hostName : "Sunsetia", 
    //         howToCheck1 : `도어락 셀프 체크인 
    //         (비밀번호는 호스트가 문자로 전달)`,
    //         howToCheck2 : `건물 내 무료 주차`,
    //         dayPrice: 350000,
    //         stayPeriod : 2,
    //         cleanVat : 10000,
            

    //     },
    //     {
    //         id: "3",
    //         title: "벨37, 리버스테이 A",
    //         img: "./images/pages/bookingList/room3.webp",
    //         schedule: "2024년 5월 21일 ~ 2024년 5월 22일",
    //         address: "연천군, 경기도, 한국",
    //         reservationNum: "HMZXMWA5J2",

    //         detailAddress : "경기 연천군 장남면 장백로330번길 216-80",
    //         checkInDate : "5월 19일",
    //         checkInTime : "오후 3:00",
    //         checkOutDate : "5월 21일",
    //         checkOutTime : "오전 11:00",
    //         guests : 2,
    //         infants : 1,
    //         hostPhoneNum : "010-1234-5678",
    //         hostName : "Sunsetia", 
    //         howToCheck1 : `도어락 셀프 체크인 
    //         (비밀번호는 호스트가 문자로 전달)`,
    //         howToCheck2 : `건물 내 무료 주차`,
    //         dayPrice: 500000,
    //         stayPeriod : 2,
    //         cleanVat : 0,
            

    //     }
    // ];

    return (
        <S.BookingListContainer>
            <S.TitleWrapper>
                <h1 className="pageTitle">여행</h1>
                <h4 className="pageSubTitle">예정된 예약</h4>
            </S.TitleWrapper>
            <ul>
                {isReserved ? ( // 예약한 숙소 있을 때,
                    itemData.map((item, index) => (
                        <div key={item.id} style={{marginBottom :'50px'}}>
                            <BookingItem 
                                item={item}  
                                onClick={() => handleAccordionClick(index)}   
                                isActive={activeIndex === index} // isActive props 전달
                                />
                        {activeIndex === index ? (<S.panel style={{ maxHeight: activeIndex === index ? '500px' : '0' }}>
                                <BookingDetail 
                                    item={item}
                                    index={index}
                                    isActive={ activeIndex === index}
                                    />
                            </S.panel>) : <div></div>}
                        
                        </div>
                    ))
                ) : ( // 예약한 숙소 없을 때,
                    <NotBooking />
                )}
            </ul>
        </S.BookingListContainer>
    );
};

export default BookingListContainer;