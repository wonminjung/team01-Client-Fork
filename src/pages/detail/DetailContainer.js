import React from 'react';
import ResetHeader from '../layout/ResetHeader';
import S from './style';
import { useSearchParams } from 'react-router-dom';
import TitleBox from './TitleBox';
import ImageSlide from './ImageSlide';
import LeftContentBox from './LeftContentBox';
import RightContentBox from './RightContentBox';

const DetailContainer = () => {
    ResetHeader();
    const contentData = [
        {
            userId : "example1",
            id : "1",
            cate : "coolPool",
            img : ["./images/pages/main/image1-1.jpg","./images/pages/main/image1-2.jpg","./images/pages/main/image1-3.jpg","./images/pages/main/image1-4.jpg","./images/pages/main/image1-5.jpg"],
            title : "위드독 독채 풀빌라",
            address : "충남/태안군",
            dayPrice : "150000",
            roomData : {
                maxUser : 6,
                bedroom : 2,
                bed : 2,
                bathroom : 2
            },
            discription : "예약 전 숙소 이용 안내 및 이용 수칙을 반드시 읽어주세요.<br><br>'일상에서 벗어난 단 하루, 나만의 은신처에서 온전한 휴식을…'<br><br>'호젓한 은신처'를 의미하는 '호은'.<br><br>양평의 한적한 시골마을에 위치한 자연친화적 독채 스테이입니다.<br><br>거실의 커다란 통창은 아름다운 자연 경관을 한폭의 그림처럼 담아 냅니다. 통창 앞으로는 온 가족이 둘러앉을 수 있는 넉넉한 ",
            convenience : {
                con1 : "계곡 전망",
                con2 : "산 전망",
                con3 : "무선 인터넷",
                con4 : "45인치 HDTV + 프리미엄 케이블 TV",
                con5 : "건물 내 무료 주차",
                con6 : "전용 야외 수영장 - 연중 언제든 예약가능,<br>특정 시간대만 이용 가능, 수영장 덮개, 온수",
            },
        },
        {
            userId : "hyeona023",
            id : "2",
            cate : "coolPool",
            img : ["./images/pages/main/image2-1.jpg","./images/pages/main/image2-2.jpg","./images/pages/main/image2-3.jpg","./images/pages/main/image2-4.jpg","./images/pages/main/image2-5.jpg"],
            title : "강화도 럭셔리 대형 풀빌라",
            address : "인천/강화도",
            dayPrice : "200000",
            roomData : {
                maxUser : 6,
                bedroom : 2,
                bed : 2,
                bathroom : 2
            },
            discription : "예약 전 숙소 이용 안내 및 이용 수칙을 반드시 읽어주세요.<br><br>'일상에서 벗어난 단 하루, 나만의 은신처에서 온전한 휴식을…'<br><br>'호젓한 은신처'를 의미하는 '호은'.<br><br>양평의 한적한 시골마을에 위치한 자연친화적 독채 스테이입니다.<br><br>거실의 커다란 통창은 아름다운 자연 경관을 한폭의 그림처럼 담아 냅니다. 통창 앞으로는 온 가족이 둘러앉을 수 있는 넉넉한 ",
            convenience : {
                con1 : "계곡 전망",
                con2 : "산 전망",
                con3 : "무선 인터넷",
                con4 : "45인치 HDTV + 프리미엄 케이블 TV",
                con5 : "건물 내 무료 주차",
                con6 : "전용 야외 수영장 - 연중 언제든 예약가능,<br>특정 시간대만 이용 가능, 수영장 덮개, 온수",
            },
        },
        {
            userId : "example1",
            id : "3",
            cate : "coolPool",
            img : ["./images/pages/main/image3-1.jpg","./images/pages/main/image3-2.jpg","./images/pages/main/image3-3.jpg","./images/pages/main/image3-4.jpg","./images/pages/main/image3-5.jpg"],
            title : "6.다온빌(스파/개별풀)",
            address : "서면/양양",
            dayPrice : "250000",
            roomData : {
                maxUser : 6,
                bedroom : 2,
                bed : 2,
                bathroom : 2
            },
            discription : "예약 전 숙소 이용 안내 및 이용 수칙을 반드시 읽어주세요.<br><br>'일상에서 벗어난 단 하루, 나만의 은신처에서 온전한 휴식을…'<br><br>'호젓한 은신처'를 의미하는 '호은'.<br><br>양평의 한적한 시골마을에 위치한 자연친화적 독채 스테이입니다.<br><br>거실의 커다란 통창은 아름다운 자연 경관을 한폭의 그림처럼 담아 냅니다. 통창 앞으로는 온 가족이 둘러앉을 수 있는 넉넉한 ",
            convenience : {
                con1 : "계곡 전망",
                con2 : "산 전망",
                con3 : "무선 인터넷",
                con4 : "45인치 HDTV + 프리미엄 케이블 TV",
                con5 : "건물 내 무료 주차",
                con6 : "전용 야외 수영장 - 연중 언제든 예약가능,<br>특정 시간대만 이용 가능, 수영장 덮개, 온수",
            },
        },
        {
            userId : "hyeona023",
            id : "4",
            cate : "coolPool",
            img : ["./images/pages/main/image4-1.jpg","./images/pages/main/image4-2.jpg","./images/pages/main/image4-3.jpg","./images/pages/main/image4-4.jpg","./images/pages/main/image4-5.jpg"],
            title : "독채풀빌라 스테이호은",
            address : "경기/양평군",
            dayPrice : "250000",
            roomData : {
                maxUser : 6,
                bedroom : 2,
                bed : 2,
                bathroom : 2
            },
            discription : "예약 전 숙소 이용 안내 및 이용 수칙을 반드시 읽어주세요.<br><br>'일상에서 벗어난 단 하루, 나만의 은신처에서 온전한 휴식을…'<br><br>'호젓한 은신처'를 의미하는 '호은'.<br><br>양평의 한적한 시골마을에 위치한 자연친화적 독채 스테이입니다.<br><br>거실의 커다란 통창은 아름다운 자연 경관을 한폭의 그림처럼 담아 냅니다. 통창 앞으로는 온 가족이 둘러앉을 수 있는 넉넉한 ",
            convenience : {
                con1 : "계곡 전망",
                con2 : "산 전망",
                con3 : "무선 인터넷",
                con4 : "45인치 HDTV + 프리미엄 케이블 TV",
                con5 : "건물 내 무료 주차",
                con6 : "전용 야외 수영장 - 연중 언제든 예약가능,<br>특정 시간대만 이용 가능, 수영장 덮개, 온수",
            },
        },
        {
            userId : "example1",
            id : "5",
            cate : "coolPool",
            img : ["./images/pages/main/image5-1.jpg","./images/pages/main/image5-2.jpg","./images/pages/main/image5-3.jpg","./images/pages/main/image5-4.jpg","./images/pages/main/image5-5.jpg"],
            title : "별담하늘담",
            address : "경기/양평군",
            dayPrice : "250000",
            roomData : {
                maxUser : 6,
                bedroom : 2,
                bed : 2,
                bathroom : 2
            },
            discription : "예약 전 숙소 이용 안내 및 이용 수칙을 반드시 읽어주세요.<br><br>'일상에서 벗어난 단 하루, 나만의 은신처에서 온전한 휴식을…'<br><br>'호젓한 은신처'를 의미하는 '호은'.<br><br>양평의 한적한 시골마을에 위치한 자연친화적 독채 스테이입니다.<br><br>거실의 커다란 통창은 아름다운 자연 경관을 한폭의 그림처럼 담아 냅니다. 통창 앞으로는 온 가족이 둘러앉을 수 있는 넉넉한 ",
            convenience : {
                con1 : "계곡 전망",
                con2 : "산 전망",
                con3 : "무선 인터넷",
                con4 : "45인치 HDTV + 프리미엄 케이블 TV",
                con5 : "건물 내 무료 주차",
                con6 : "전용 야외 수영장 - 연중 언제든 예약가능,<br>특정 시간대만 이용 가능, 수영장 덮개, 온수",
            },
        },
        {
            userId : "hyeona023",
            id : "6",
            cate : "coolPool",
            img : ["./images/pages/main/image6-1.jpg","./images/pages/main/image6-2.jpg","./images/pages/main/image6-3.jpg","./images/pages/main/image6-4.jpg","./images/pages/main/image6-5.jpg"],
            title : "춘천 유유자적 일동",
            address : "춘천/서면",
            dayPrice : "250000",
            roomData : {
                maxUser : 6,
                bedroom : 2,
                bed : 2,
                bathroom : 2
            },
            discription : "예약 전 숙소 이용 안내 및 이용 수칙을 반드시 읽어주세요.<br><br>'일상에서 벗어난 단 하루, 나만의 은신처에서 온전한 휴식을…'<br><br>'호젓한 은신처'를 의미하는 '호은'.<br><br>양평의 한적한 시골마을에 위치한 자연친화적 독채 스테이입니다.<br><br>거실의 커다란 통창은 아름다운 자연 경관을 한폭의 그림처럼 담아 냅니다. 통창 앞으로는 온 가족이 둘러앉을 수 있는 넉넉한 ",
            convenience : {
                con1 : "계곡 전망",
                con2 : "산 전망",
                con3 : "무선 인터넷",
                con4 : "45인치 HDTV + 프리미엄 케이블 TV",
                con5 : "건물 내 무료 주차",
                con6 : "전용 야외 수영장 - 연중 언제든 예약가능,<br>특정 시간대만 이용 가능, 수영장 덮개, 온수",
            },
        }
    ]
    const commentData = [
        {
            id : 1,
            userId : "hyeona023",
            contentId : 1,
            body : "너무 만족스러운 여행이었어요~",
            star : 4,
            grade : {
                clean : 5,
                accuracy : 4,
                communication : 5,
                location : 4.5,
                priceSatis : 4.5,
            }
        },
        {
            id : 2,
            userId : "example2",
            contentId : 1,
            body : "너무 만족스러운 여행이었어요~ 너무 만족스러운 여행이었어요~",
            star : 5,
            grade : {
                clean : 5,
                accuracy : 5,
                communication : 5,
                location : 5,
                priceSatis : 4.5,
            }
        },
        {
            id : 3,
            userId : "example2",
            contentId : 2,
            body : "너무 만족스러운 여행이었어요~",
            star : 4,
            grade : {
                clean : 5,
                accuracy : 5,
                communication : 5,
                location : 5,
                priceSatis : 5,
            }
        },
        {
            id : 4,
            userId : "example1",
            contentId : 2,
            body : "대충 만족스러운 여행이었어요",
            star : 4,
            grade : {
                clean : 5,
                accuracy : 3,
                communication : 4,
                location : 5,
                priceSatis : 3,
            }
        },
    ]
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
        }
    ]
    const [searchParams,setSerchParams] = useSearchParams();
    const contentId = searchParams.get('content');
    const content = contentData.filter((data)=> data.id === contentId)[0];
    const user = userData.filter((data)=> content.userId === data.userId)[0];
    const comment = commentData.filter((data)=> data.contentId == content.id);
    const {img,title,dayPrice} = content;
    return (
        <S.DetailContainer>
            <S.DetailWrapper>
                <TitleBox title={title}/>
                <ImageSlide img={img}/>
                <S.DetailContentBox>
                    <LeftContentBox contentData={content} hostData={user} commentData={comment}/>
                    <RightContentBox price={dayPrice}/>
                </S.DetailContentBox>
            </S.DetailWrapper>
        </S.DetailContainer>
    );
};

export default DetailContainer;