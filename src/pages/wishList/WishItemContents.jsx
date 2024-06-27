import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';
import S from './style';
import HeartButton from '../../components/heartbutton/HeartButton';
import Modal from './modal/Modal';


const WishItemContents = ({rooms, userId}) => {

    console.log(rooms);
    console.log(userId);

    

    // 모달의 상태
    const [showModal, setShowModal] = useState(false);

    // 삭제하기 위해 클릭한 하트의 해당 룸 아이템의 상태
    const [roomId, setRoomId] = useState("");


//    // 로그인한 유저의 상태 관리
//    // *filter메서드는 새로운 array를 반환하므로 [0]으로 표시해줘야 함
//     const [loginUser, setLoginUser] = useState(userData.filter((user)=> user.id === 1)[0]);
//     // console.log(loginUser); // id가 1번인 name:현아 객체 조회 확인됨


    // 하트버튼 클릭시, 해당 아이템 삭제위해 컨펌 모달메시지 띄우는 메서드
    const handleRemoveItem = (data) => {
        let roomId = data;
        setRoomId(roomId);
        setShowModal(true);
    };

    // 삭제 확인 모달창의 O 버튼 클릭시, user데이터의 wishList배열에서 해당 아이템 삭제하는 메서드
    const handleConfirmRemove = async( room) => {

                try{
                    const response = await fetch(`http://localhost:8000/room/updateWishList`,
                        { 
                            method : "POST"
                        },
                        {
                            body : JSON.stringify({
                                roomId : room._id,
                                userId : userId
                            })
                        }
                    )
                  navigate('/wishList') 
                }catch(error){

                }
            
        

        // 상태로 관리된 roomId는 현재 삭제하려고 클릭한 roomId를 나타냄
        console.log(roomId) 

        // 로그인한 유저의 wishList배열을 삭제하려는 roomId를 제외한 새로운 배열로 필터링함
        // const updatedWishList  = loginUser.wishList.filter((list)=> list !== roomId)

        // 삭제하려던 roomId를 제외한 배열만 추출됨
        // console.log(updatedWishList);

        // // 로그인유저의 wishList 데이터 업데이트
        // setLoginUser({
        //     ...loginUser,
        //     wishList: updatedWishList,
        // })

        // 모달 종료
        setShowModal(false);  
    };

    // 삭제 확인 모달창의 x 버튼 클릭시, 모달 창 종료
    const handleCancelRemove = () => {
        setShowModal(false);
    };

    // navigate 사용 위해 선언
    const navigate = useNavigate();
    // const nav = ()=> {
    //     navigate(`/detail?roomId=${data}`);
    // }


    return (
        
        <S.ContentBox>
            {/* 로그인한 유저의 user데이터의 wishList 데이터에 데이터가 있다면 위시리스트페이지에 아이템 보여주기*/}
            {rooms.length > 0 ? (
                rooms.map((room, i) =>
                    <div className="content" key={i}>
                        {/* 하트버튼 클릭시, 해당 아이템 삭제 기능 메서드 삽입 */}
                        <HeartButton onClick={() => handleRemoveItem(room)} />
                        {/* a가 detail의 roomId와 같음)*/}
                        <Link onClick={() => { navigate(`/detail?roomId=${room._id}`)}}>
                            <div className="imgBox">
                                {/* 로그인한 유저의 wishList 컨텐츠 이미지 불러오기 */}
                                <img src={room.roomImg[0]} />
                            </div>
                            <div className="textBox">
                                <div className="titleBox">
                                    <h6>{room.title}</h6>
                                </div>
                                <div className="addressAndPriceBox">
                                    <span className="address">{room.address}</span>
                                    <span className="price">{room.dayPrice}</span>
                                </div>
                                <div className="ReservateButton">예약하기</div>
                            </div>
                        </Link>
                    </div>
                )
            ) : (
                <div className="emptyState">
                    <p>위시리스트에 추가된 숙소가 없습니다.</p>
                    <p>검색 중에 발견한 숙소를 위시리스트에 저장하려면 하트 아이콘을 클릭하세요!💛</p>
                    <Link to={'/'}>구경하러 가기</Link>
                    <button>닫기</button>
                </div>
            )}
            {showModal && (
                <Modal
                    message="위시리스트에서 제거하시겠습니까?"
                    onCancel={handleCancelRemove}
                    onConfirm={handleConfirmRemove}
                />
            )}
        </S.ContentBox>
    );
};

export default WishItemContents;