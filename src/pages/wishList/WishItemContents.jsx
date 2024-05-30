import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import S from './style';

const WishItemContents = () => {
    // 좋아요 누른 데이터들만 가져와야 함.
    // HeartButton component 따로 만들고, isClicked와 handleClicked만들기
    // ResetHeader();
    const contentData = [
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
        },{
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
        }
    ]

    return (
        <S.ContentBox>
            {contentData.map((data,i) =>
                <div className="content">
                    {/* 좋아요버튼 컴포넌트 만들기 */}
                    <FontAwesomeIcon className='heart' icon={faHeart} />
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
            
            )}

        </S.ContentBox>
    );
};

export default WishItemContents;