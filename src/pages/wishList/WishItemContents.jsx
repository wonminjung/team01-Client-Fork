import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import S from './style';
import HeartButton from '../../components/heartbutton/HeartButton';
import Modal from './modal/Modal';


const WishItemContents = () => {
    // 모달 안보이는게 기본값
    const [showModal, setShowModal] = useState(false);

    // 삭제하기 위해 하트버튼 누른 아이템의 상태
    //⭐현재 삭제하기 위해 하트버튼 눌러도, 새로고침하면 위시리스트가 초기화 됨.
    //⭐추후 서버에 user데이터>wish데이터>accommodations데이터>roomId를 삭제하는 로직 짜야 함.
    const [selectedItemId, setSelectedItemId] = useState(null);

    // 컨텐츠 데이터 
    const [contentData, setContentData] = useState([
        {
            id : 1,
            img : "./images/pages/main/image1-1.jpg",
            title : "위드독 독채 풀빌라",
            address : "충남/태안군",
            dayPrice : "150,000"
        },
        {
            id : 2,
            img : "./images/pages/main/image2-1.jpg",
            title : "강화도 럭셔리 대형 풀빌라",
            address : "인천/강화도",
            dayPrice : "200,000"
        },
        {
            id : 3,
            img : "./images/pages/main/image3-1.jpg",
            title : "6.다온빌(스파/개별풀)",
            address : "서면/양양",
            dayPrice : "250,000"
        },
        {
            id : 4,
            img : "./images/pages/main/image4-1.jpg",
            title : "독채풀빌라 스테이호은",
            address : "경기/양평군",
            dayPrice : "250,000"
        },
        {
            id : 5,
            img : "./images/pages/main/image5-1.jpg",
            title : "별담하늘담",
            address : "경기/양평군",
            dayPrice : "250,000"
        },
        {
            id : 6,
            img : "./images/pages/main/image6-1.jpg",
            title : "춘천 유유자적 일동",
            address : "춘천/서면",
            dayPrice : "250,000"
        },
        {
            id : 7,
            img : "./images/pages/main/image1-1.jpg",
            title : "위드독 독채 풀빌라",
            address : "충남/태안군",
            dayPrice : "150,000"
        },
        {
            id : 8,
            img : "./images/pages/main/image2-1.jpg",
            title : "강화도 럭셔리 대형 풀빌라",
            address : "인천/강화도",
            dayPrice : "200,000"
        },
        {
            id : 9,
            img : "./images/pages/main/image3-1.jpg",
            title : "6.다온빌(스파/개별풀)",
            address : "서면/양양",
            dayPrice : "250,000"
        },
        {
            id : 10,
            img : "./images/pages/main/image4-1.jpg",
            title : "독채풀빌라 스테이호은",
            address : "경기/양평군",
            dayPrice : "250,000"
        },
        {
            id : 11,
            img : "./images/pages/main/image5-1.jpg",
            title : "별담하늘담",
            address : "경기/양평군",
            dayPrice : "250,000"
        },
        {
            id : 12,
            img : "./images/pages/main/image6-1.jpg",
            title : "춘천 유유자적 일동",
            address : "춘천/서면",
            dayPrice : "250,000"
        },{
            id : 13,
            img : "./images/pages/main/image1-1.jpg",
            title : "위드독 독채 풀빌라",
            address : "충남/태안군",
            dayPrice : "150,000"
        },
        {
            id : 14,
            img : "./images/pages/main/image2-1.jpg",
            title : "강화도 럭셔리 대형 풀빌라",
            address : "인천/강화도",
            dayPrice : "200,000"
        },
        {
            id :15,
            img : "./images/pages/main/image3-1.jpg",
            title : "6.다온빌(스파/개별풀)",
            address : "서면/양양",
            dayPrice : "250,000"
        }
    ]);

    // 상원님 detil의 userData 임시로 사용
    const userData = [
        {
            id : 1,
            userId : "hyeona023",
            password : "1234",
            name : "현아",
            profileImg : "./images/pages/detail/user/1/thumb.jpg",
            email : "hyeona@gmail.com",
            address : {
                city : "Kulas Light",
                street : "Gwenborough",
                suit : "Apt. 556",
                zipcode : "92998-3874",
            },
            phone : "010-1234-1234",
            wishList : [1,2,3]
        },
        {
            id : 2,
            userId : "example1",
            password : "1234",
            name : "닉네임1",
            profileImg : "./images/pages/detail/user/2/thumb.jpg",
            email : "example1@gmail.com",
            address : {
                city : "Kulas Light",
                street : "Gwenborough",
                suit : "Apt. 556",
                zipcode : "92998-3874",
            },
            phone : "010-4321-4321",
            wishList : [3,6]
        },
        {
            id : 3,
            userId : "example2",
            password : "1234",
            name : "닉네임2",
            profileImg : "./images/pages/detail/user/3/thumb.jpg",
            email : "example2@gmail.com",
            address : {
                city : "Kulas Light",
                street : "Gwenborough",
                suit : "Apt. 556",
                zipcode : "92998-3874",
            },
            phone : "010-1111-1111",
            wishList : [2,3,5]
        }
    ]


   // 1번 유저가 로그인함
    const loginUser = userData.filter((user)=> user.id === 1)[0]
    // console.log(loginUser);

    
    const [roomId, setRoomId] = useState("");
    
    // const removeItem = (id) => {
    //     setContentData(contentData.filter(item => item.id !== id));
    // };

    const handleRemoveItem = (roomId) => {
        setRoomId(roomId);
        setSelectedItemId(roomId);
        setShowModal(true);
    };

    // 모달 확인창 o 버튼 클릭시, user데이터의 wishList배열에서 해당 아이템 삭제함
    // ---------------------------> 삭제 기능 구현해야함! 안지워짐 ㅠ
    const handleConfirmRemove = (roomId) => {
        // removeItem(selectedItemId);
        const equal = loginUser.wishList.filter((list)=> list !== roomId)
        console.log(equal);
        setShowModal(false);
    };

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
            {/* 로그인한 유저의 user데이터의 wishList 데이터에 데이터가 있다면 */}
            {loginUser.wishList.length > 0 ? (
                loginUser.wishList.map((data, i) =>
                    <div className="content" key={i}>
                        <HeartButton onClick={() => handleRemoveItem(data)}/>
                            {/* detail로 간다~~~~~😂😂😂😂😂😂😂 */}
                        {/* Link의 a태그기능을 막아둠. 현재 클릭한 data가 detail의 roomId와 같음*/}
                        <Link onClick={e => {e.preventDefault(); navigate(`/detail?roomId=${data}`)}}>
                            <div className="imgBox">
                                <img src={contentData.filter((room)=> room.id === data)[0].img} />
                            </div>
                            <div className="textBox">
                                <div className="titleBox">
                                    <h6>{contentData.filter((room)=> room.id === data)[0].title}</h6>
                                </div>
                                <div className="addressAndPriceBox">
                                    <span className="address">{contentData.filter((room)=> room.id === data)[0].address}</span>
                                    <span className="price">{contentData.filter((room)=> room.id === data)[0].dayPrice}</span>
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