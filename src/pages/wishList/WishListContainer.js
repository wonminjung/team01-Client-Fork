import React, { useEffect, useState } from 'react';
import S from './style';
import WishItemContents from './WishItemContents';
import ResetHeader from '../layout/ResetHeader';
import RemoveHeader from '../layout/RemoveHeader';
import ScrollEvent from '../layout/ScrollEvent';
import NotWished from './NotWished';
import Modal from './modal/Modal';
import BasicButton from '../../components/button/BasicButton';
import { useNavigate, useSearchParams } from 'react-router-dom';



const WishListContainer = () => {
    ResetHeader();
    ScrollEvent();

    const [searchParams] = useSearchParams();
    const [rooms, setRooms] = useState([]);
    const [isWished, setIsWished] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(true); 
    
    const navigate = useNavigate();

    // 로그인한 유저라고 가정
    // const signInUser = {
    //         id : '6672c609aa021dac908a48db',
    //         userId : "hyeona023",
    //         password : "1234",
    //         name : "현아",
    //         profileImg : "./images/pages/detail/user/1/thumb.jpg",
    //         email : "hyeona@gmail.com",
    //         address : {
    //             city : "Kulas Light",
    //             street : "Gwenborough",
    //             suit : "Apt. 556",
    //             zipcode : "92998-3874",
    //         },
    //         phone : "010-1234-1234",
    //         // wishList 부분
    //         wishList : [1,2,3]
    //     };
    
    useEffect(()=> {
        const getWishList = async () => {
            try{
                const userId = '6672c609aa021dac908a48db'; // 사용자 ID (임시로 하드코딩)
                const response = await fetch(`http://localhost:8000/room/wishList?userId=${userId}&{searchparams.toString()}`);
                const data = await response.json();
                if(data && data.rooms) {
                    setRooms(data.rooms);
                    setIsWished(data.rooms.length > 0);
                    console.log(data);
                }
            }catch(error){
                console.error("Eroor fetching wishList:", error);
            }

        };
        getWishList()

    },[searchParams])

    // 모달창 닫는 함수
    const handleModalClose = () => {
        setIsModalOpen(false);
        
    };


    return (
        <S.WishListContainer>
            <S.PageTitle>위시리스트</S.PageTitle>
            {/* 찜한 숙소가 있다면 바로 위시리스트 페이지 보이게 하기 */}
            {isWished ? (
                <WishItemContents rooms={rooms} /> 
            ): (
                    <div>
                        {/* 찜한 숙소가 없다면 모달창 먼저 띄우기. */}
                         {isModalOpen && (
                            <Modal showButtons={false}>
                                <div className='modalDecorate'>
                                    <button  className="closeButton"  onClick={handleModalClose}>X</button>
                                    <div className='modalBody'>
                                        <img src="./images/pages/wishList/NotWished1.png" alt="숙소사진" />
                                        <h2>마음에 드는 숙소를 한곳에 저장해보세요!</h2>
                                        <h3>검색 중에 발견한 숙소를 위시리스트에 저장하려면<br /> 하트 아이콘을 클릭해보세요.</h3>
                                    </div> 
                                    <button className="searchButton"onClick={() => navigate('/')}>숙소 검색하러 가기</button>
                                </div> 
                            </Modal>
                         )} 
                    </div>
                )}

        </S.WishListContainer>
    );
};

export default WishListContainer;
