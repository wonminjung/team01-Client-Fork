import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import S from './style';
import HeartButton from '../../components/heartbutton/HeartButton';
import Modal from './modal/Modal';


const WishItemContents = () => {
    //💥현재 서버와 연결 안되어 있어 새로고침시, 삭제한 데이터 화면에 다시 뜸.
    // 이 부분 서버 연결시, 수정하기!

    // 모달의 상태
    const [showModal, setShowModal] = useState(false);

    // 삭제하기 위해 클릭한 하트의 해당 룸 아이템의 상태
    const [roomId, setRoomId] = useState("");

    // user 데이터 (상원님 detil의 userData 임시로 사용)
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
            // wishList 부분
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

    // 위시리스트 데이터 (wishList-array)
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


   // 로그인한 유저의 상태 관리
   // *filter메서드는 새로운 array를 반환하므로 [0]으로 표시해줘야 함
    const [loginUser, setLoginUser] = useState(userData.filter((user)=> user.id === 1)[0]);
    // console.log(loginUser); // id가 1번인 name:현아 객체 조회 확인됨


    // 하트버튼 클릭시, 해당 아이템 삭제위해 컨펌 모달메시지 띄우는 메서드
    const handleRemoveItem = (data) => {
        let roomId = data;
        setRoomId(roomId);
        setShowModal(true);
    };

    // 삭제 확인 모달창의 O 버튼 클릭시, user데이터의 wishList배열에서 해당 아이템 삭제하는 메서드
    const handleConfirmRemove = () => {

        // 상태로 관리된 roomId는 현재 삭제하려고 클릭한 roomId를 나타냄
        console.log(roomId) 

        // 로그인한 유저의 wishList배열을 삭제하려는 roomId를 제외한 새로운 배열로 필터링함
        const updatedWishList  = loginUser.wishList.filter((list)=> list !== roomId)

        // 삭제하려던 roomId를 제외한 배열만 추출됨
        console.log(updatedWishList);

        // 로그인유저의 wishList 데이터 업데이트
        setLoginUser({
            ...loginUser,
            wishList: updatedWishList,
        })

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
            {loginUser.wishList.length > 0 ? (
                loginUser.wishList.map((data, i) =>
                    <div className="content" key={i}>
                        {/* 하트버튼 클릭시, 해당 아이템 삭제 기능 메서드 삽입 */}
                        <HeartButton onClick={() => handleRemoveItem(data)} />
                        {/* 아이템 클릭시, 해당 아이템의 detail페이지로 이동 구현 (Link의 a태그기능을 막아둠. 현재 클릭한 data가 detail의 roomId와 같음)*/}
                        <Link onClick={e => {e.preventDefault(); navigate(`/detail?roomId=${data}`)}}>
                            <div className="imgBox">
                                {/* 로그인한 유저의 wishList 컨텐츠 이미지 불러오기 */}
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