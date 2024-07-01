import React, { useEffect, useState } from 'react';
import S from './style';
import WishItemContents from './WishItemContents';
import ResetHeader from '../layout/ResetHeader';
import ScrollEvent from '../layout/ScrollEvent';
import Modal from './modal/Modal';
import { Navigate, useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';



const WishListContainer = () => {
    ResetHeader();
    ScrollEvent();
    
    const userStatus = useSelector((state) => state.user.isLogin); //useSelector 훅을 사용하여 로그인 상태를 확인
    const userId = useSelector((state)=> state.user.currentUser.userId); // 현재 로그인한 유저의 id
    const navigate = useNavigate();
    const [rooms, setRooms] = useState([]); // 숙소의 상태
    const [isWished, setIsWished] = useState(null); // 유저가 wishItem이 있는지 여부
    // isWished=null(null은 값이 아직 설정되지 않았음을 의미 => 로딩중 표현)
    // isWished=false(false는 특정 조건이 충족되지 않음을 의미=>모달창 표시 여부 표현)
    const [isModalOpen, setIsModalOpen] = useState(true); 
    const [update, setUpdate] = useState(true);


    useEffect(()=> {
        // 비로그인 유저가 로그인화면으로 유도될때 에러 안뜨도록 
        if(!userStatus) {
            return;
        }

        const getWishList = async () => {
            try{
                const response = await fetch(`http://localhost:8000/room/wishList`,{
                    method : "POST",
                    headers : {
                        'Content-Type' : 'application/json; charset=utf-8'
                    },
                    body: JSON.stringify({
                        userId : userId
                    })
                })

                const data = await response.json();
                if(data && data.rooms) { //rooms = user.wishList
                    setRooms(data.rooms);
                    setIsWished(data.rooms.length > 0); //찜한 숙소가 1개 이상이면 모달창 안 띄움.
                }else{
                    setIsWished(false); // 데이터가 없을경우, isWished false로
                }
            }catch(error){
                console.error("Error fetching wishList:", error);
                setIsWished(false); // 에러 발생 시에도, isWished false로 
            }

        };
        getWishList()

    },[update]) // update값이 변경되면 useEffect 재실행!

     // 로그인 상태 확인 후 로그인 안된 경우 리디렉션
    if(!userStatus) {
        alert("로그인이 필요합니다.")
        // replace로 왔던 기록을 없애고 로그인 페이지로 이동(뒤로가기시 메인페이지로)
        return <Navigate to={"/signIn"} replace={true}/>
    }

    // 모달창 닫는 함수
    const handleModalClose = () => {
        setIsModalOpen(false);  
    };


    return (
        <S.WishListContainer>
            <S.PageTitle>위시리스트</S.PageTitle>
            {/* 찜한 숙소가 있다면 바로 위시리스트 페이지 보이게 하기 */}
            {isWished === null ? (
                <div></div>
            ) : isWished ?  (
                <WishItemContents rooms={rooms} userId={userId} setUpdate={setUpdate} update={update}/> 
            ): (
                    <div>
                        {/* 찜한 숙소가 없다면 모달창 먼저 띄우기. */}
                         { !isWished &&  (
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
