import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import S from './style';
import HeartButton from '../../components/heartbutton/HeartButton';


const WishItemContents = () => {
    // contentData 상태 관리 및 업데이트

    const [contentData, setContentData] = useState([
        {
            id : "1",
            img : "./images/pages/main/image1-1.jpg",
            title : "위드독 독채 풀빌라",
            address : "충남/태안군",
            dayPrice : "150,000"
        },
        {
            id : "2",
            img : "./images/pages/main/image2-1.jpg",
            title : "강화도 럭셔리 대형 풀빌라",
            address : "인천/강화도",
            dayPrice : "200,000"
        },
        {
            id : "3",
            img : "./images/pages/main/image3-1.jpg",
            title : "6.다온빌(스파/개별풀)",
            address : "서면/양양",
            dayPrice : "250,000"
        },
        {
            id : "4",
            img : "./images/pages/main/image4-1.jpg",
            title : "독채풀빌라 스테이호은",
            address : "경기/양평군",
            dayPrice : "250,000"
        },
        {
            id : "5",
            img : "./images/pages/main/image5-1.jpg",
            title : "별담하늘담",
            address : "경기/양평군",
            dayPrice : "250,000"
        },
        {
            id : "6",
            img : "./images/pages/main/image6-1.jpg",
            title : "춘천 유유자적 일동",
            address : "춘천/서면",
            dayPrice : "250,000"
        },
        {
            id : "7",
            img : "./images/pages/main/image1-1.jpg",
            title : "위드독 독채 풀빌라",
            address : "충남/태안군",
            dayPrice : "150,000"
        },
        {
            id : "8",
            img : "./images/pages/main/image2-1.jpg",
            title : "강화도 럭셔리 대형 풀빌라",
            address : "인천/강화도",
            dayPrice : "200,000"
        },
        {
            id : "9",
            img : "./images/pages/main/image3-1.jpg",
            title : "6.다온빌(스파/개별풀)",
            address : "서면/양양",
            dayPrice : "250,000"
        },
        {
            id : "10",
            img : "./images/pages/main/image4-1.jpg",
            title : "독채풀빌라 스테이호은",
            address : "경기/양평군",
            dayPrice : "250,000"
        },
        {
            id : "11",
            img : "./images/pages/main/image5-1.jpg",
            title : "별담하늘담",
            address : "경기/양평군",
            dayPrice : "250,000"
        },
        {
            id : "12",
            img : "./images/pages/main/image6-1.jpg",
            title : "춘천 유유자적 일동",
            address : "춘천/서면",
            dayPrice : "250,000"
        },{
            id : "13",
            img : "./images/pages/main/image1-1.jpg",
            title : "위드독 독채 풀빌라",
            address : "충남/태안군",
            dayPrice : "150,000"
        },
        {
            id : "14",
            img : "./images/pages/main/image2-1.jpg",
            title : "강화도 럭셔리 대형 풀빌라",
            address : "인천/강화도",
            dayPrice : "200,000"
        },
        {
            id : "15",
            img : "./images/pages/main/image3-1.jpg",
            title : "6.다온빌(스파/개별풀)",
            address : "서면/양양",
            dayPrice : "250,000"
        }
    ]);
   

    // contentData데이터 삭제 함수
    const removeItem = (id) => {
    // contetData배열을 순회하면서 클릭한 item을 제외한 아이템으로 구성된 새로운 배열 반환
            setContentData(contentData.filter(item => item.id !== id));
    }

    const handleRemoveItem = ({onRemove}) => {
        if(window.confirm("이 아이템을 위시리스트에서 제거하시겠습니까?")){
            onRemove();
        }
    }
    

    return (

        <S.ContentBox>
            {contentData.length > 0 ? (
                contentData.map((data) =>
                    <div className="content" key={data.id}>
                        <HeartButton 
                            onRemove={()=>removeItem(data.id)} 
                            onClick={handleRemoveItem}/>
                        <Link to={'/detail'}>
                            {/* 숙소 이미지 */}
                            <div className="imgBox">
                                <img src={data.img} />
                            </div>
                            {/* 숙소이름 및 가격 안내부분 */}
                            <div className="textBox">
                                <div className="titleBox">
                                    <h6>{data.title}</h6>
                                </div>
                            <div className="addressAndPriceBox">
                                <span className="address">{data.address}</span>
                                <span className="price">{data.dayPrice}</span>
                            </div>
                            <div className="ResevateButton">예약하기</div>
                        </div>
                    </Link>
                </div>
                )
            ) : (
                <div className="emptyState">
                    <p>위시리스트에 추가된 숙소가 없습니다.</p>
                    <p>검색 중에 발견한 숙소를 위시리스트에 저장하려면 하트 아이콘을 클릭하세요!💛</p>
                    <Link to={'/detail'}>구경하러 가기</Link>
                    <button>닫기</button>
                </div>
            )}

        </S.ContentBox>
    );
};

export default WishItemContents;