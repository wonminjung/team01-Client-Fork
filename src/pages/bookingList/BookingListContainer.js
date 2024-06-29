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
        // console.log(index) 
        if (typeof index !== 'undefined') { 
            console.log('Clicked index:', index); 
            setActiveIndex(activeIndex === index ? null : index);
        } else {
            console.log('Index is undefined or null');
        }
    };



    return (
        <S.BookingListContainer>
            <S.TitleWrapper>
                <h1 className="pageTitle">여행</h1>
                <h4 className="pageSubTitle">예정된 예약</h4>
            </S.TitleWrapper>
            <ul>
                {isReserved === null ? (
                    <div></div>
                ) : isReserved ? ( // 예약한 숙소 있을 때,
                    itemData.map((item, index) => (
                        <div key={index} style={{marginBottom :'50px'}}>
                            <BookingItem 
                                item={item}  
                                onClick={() => handleAccordionClick(index)}   
                                isActive={activeIndex === index} // isActive props 전달
                                />
                                {activeIndex === index ? (
                                <S.panel style={{ maxHeight: activeIndex === index ? '500px' : '0' }}>
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