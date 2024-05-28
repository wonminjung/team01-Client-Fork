import React from 'react';
import ResetHeader from '../layout/ResetHeader';
import S from './style';
import BasicButton from '../../components/button/BasicButton';
import BasicInput from '../../components/input/BasicInput';
import BasicCheckbox from '../../components/checkbox/BasicCheckbox';
import { useSearchParams } from 'react-router-dom';
import TitleBox from './TitleBox';
import ImageSlide from './ImageSlide';
import LeftContentBox from './LeftContentBox';
import RightContentBox from './RightContentBox';

const DetailContainer = () => {
    ResetHeader();
    const contentData = [
        {
            id : "1",
            cate : "coolPool",
            img : ["./images/pages/main/image1-1.jpg","./images/pages/main/image1-2.jpg","./images/pages/main/image1-3.jpg","./images/pages/main/image1-4.jpg","./images/pages/main/image1-5.jpg"],
            title : "위드독 독채 풀빌라",
            address : "충남/태안군",
            dayPrice : "150000"
        },
        {
            id : "2",
            cate : "coolPool",
            img : ["./images/pages/main/image2-1.jpg","./images/pages/main/image2-2.jpg","./images/pages/main/image2-3.jpg","./images/pages/main/image2-4.jpg","./images/pages/main/image2-5.jpg"],
            title : "강화도 럭셔리 대형 풀빌라",
            address : "인천/강화도",
            dayPrice : "200000"
        },
        {
            id : "3",
            cate : "coolPool",
            img : ["./images/pages/main/image3-1.jpg","./images/pages/main/image3-2.jpg","./images/pages/main/image3-3.jpg","./images/pages/main/image3-4.jpg","./images/pages/main/image3-5.jpg"],
            title : "6.다온빌(스파/개별풀)",
            address : "서면/양양",
            dayPrice : "250000"
        },
        {
            id : "4",
            cate : "coolPool",
            img : ["./images/pages/main/image4-1.jpg","./images/pages/main/image4-2.jpg","./images/pages/main/image4-3.jpg","./images/pages/main/image4-4.jpg","./images/pages/main/image4-5.jpg"],
            title : "독채풀빌라 스테이호은",
            address : "경기/양평군",
            dayPrice : "250000"
        },
        {
            id : "5",
            cate : "coolPool",
            img : ["./images/pages/main/image5-1.jpg","./images/pages/main/image5-2.jpg","./images/pages/main/image5-3.jpg","./images/pages/main/image5-4.jpg","./images/pages/main/image5-5.jpg"],
            title : "별담하늘담",
            address : "경기/양평군",
            dayPrice : "250000"
        },
        {
            id : "6",
            cate : "coolPool",
            img : ["./images/pages/main/image6-1.jpg","./images/pages/main/image6-2.jpg","./images/pages/main/image6-3.jpg","./images/pages/main/image6-4.jpg","./images/pages/main/image6-5.jpg"],
            title : "춘천 유유자적 일동",
            address : "춘천/서면",
            dayPrice : "250000"
        }
    ]
    const [searchParams,setSerchParams] = useSearchParams();
    const contentId = searchParams.get('content');
    const content = contentData.filter((data)=> data.id === contentId)[0];
    const {id,cate,img,title,address,dayPrice} = content;
    return (
        <S.DetailContainer>
            <S.DetailWrapper>
                <TitleBox title={title}/>
                <ImageSlide img={img}/>
                <S.DetailContentBox>
                    <LeftContentBox />
                    <RightContentBox />
                </S.DetailContentBox>
            </S.DetailWrapper>
        </S.DetailContainer>
    );
};

export default DetailContainer;