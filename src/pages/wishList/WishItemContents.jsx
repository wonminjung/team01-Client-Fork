import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';
import S from './style';
import HeartButton from '../../components/heartbutton/HeartButton';
import Modal from './modal/Modal';
import { useDispatch } from 'react-redux';
import { setUser } from '../../modules/user';


const WishItemContents = ({rooms, userId, setUpdate}) => {
    const [showModal, setShowModal] = useState(false);// 모달의 상태
    const [roomId, setRoomId] = useState(null);// 삭제하기 위해 클릭한 하트의 해당 룸 아이템의 상태
    const navigate = useNavigate();
    const dispatch = useDispatch();


    // 하트버튼 클릭시, 해당 아이템 삭제위해 컨펌 모달메시지 띄우는 메서드
    const handleRemoveItem = (data) => {
        let roomId = data;
        setRoomId(roomId);
        setShowModal(true);
    };

    // 삭제 확인 모달창의 O 버튼 클릭시, user데이터의 wishList배열에서 해당 아이템 삭제하는 메서드
    const clickConfirmRemove = () => {
        handleConfirmRemove();
    }
    const handleConfirmRemove = async( ) => {
                try{
                    const response = await fetch(`http://localhost:8000/room/updateWishList`,

                        { 
                            method : "POST",
                            headers : {
                                "Content-Type" : "application/json; charset=utf-8",
                            },
                            body : JSON.stringify({
                                roomId : roomId._id,
                                userId : userId
                            })
                        });

                     if(response.ok){
                        const updatedRooms = await response.json();
                        dispatch(setUser(updatedRooms.user));

                        setUpdate(false)
                        navigate('/wishList') 
                     }else{
                        const errorData = await response.json();
                        console.error('Failed to update wishList', errorData.message || response.statusText);
                     } 
                }catch(error){
                    console.log('Error:', error);
                }
            
                setShowModal(false);  
       
    };

    // 삭제 확인 모달창의 x 버튼 클릭시, 모달 창 종료
    const handleCancelRemove = () => {
        setShowModal(false);
    };



    return (
        
        <S.ContentBox>
            {/* 로그인한 유저의 user데이터의 wishList 데이터에 데이터가 있다면 위시리스트페이지에 아이템 보여주기*/}
            {rooms.length > 0 ? (
                rooms.map((room, i) =>
                    <div className="content" key={i}>
                        {/* 하트버튼 클릭시, 해당 아이템 삭제 기능 메서드 삽입 */}
                        <HeartButton className='heart' onClick={() => handleRemoveItem(room) } />
                        <Link onClick={() => { navigate(`/detail?roomId=${room._id}`)}}>
                            <div className="imgBox">
                                {/* 로그인한 유저의 wishList 컨텐츠 이미지 불러오기 */}
                                <img src={room.roomImg[0]} />
                            </div>
                            <div className="textBox">
                                <div>
                                    <div className="titleBox">
                                        <h6>{room.title}</h6>
                                    </div>
                                    <div className="addAndPriceBox">
                                        <span className="address">{room.address}</span> 
                                    </div>
                                </div>
                                <div>
                                    <div className="linkBox">예약하기</div>
                                    <span className="price">{"￦" + room.dayPrice.toLocaleString('ko-KR')}</span>
                                </div>
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
                    onConfirm={clickConfirmRemove}
                />
            )}
        </S.ContentBox>
    );
};

export default WishItemContents;