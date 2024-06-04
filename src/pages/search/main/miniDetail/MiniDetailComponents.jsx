import React from 'react';

import S from './style';

const MiniDetailComponents = () => {

    const contentData = {
        id : "1",
        cate : "coolPool",
        img : [
            "./images/pages/search/main/cardList/_1_/b32eb100-2cf6-472c-9a82-76e54aa21968.jpg", 
            "./images/pages/search/main/cardList/_1_/b5651a00-0e09-48f1-a31e-78c5e676f6bf.jpg", 
            "./images/pages/search/main/cardList/_1_/ba265620-ac8b-40f5-949a-2035c5a3c365.jpg", 
            "./images/pages/search/main/cardList/_1_/ecace55e-9400-4991-b643-97607e0b0bc6.jpg", 
            "./images/pages/search/main/cardList/_1_/eff0a5bc-914a-44bf-b127-cdcf70462d25.jpg", 
        ],
        title : "위드독 독채 풀빌라",
        address : "충남/태안군",
        dayPrice : "150000",
        roomData : {
            maxUser : 6,
            bedroom : 2,
            bed : 2,
            bathroom : 2
        }
    };



    return (
        <S.MiniDetailContainer>
            <S.MarginSideContainer>
                <S.Title>
                    <div>{contentData.title}</div>
                </S.Title>

                <S.ImageGridContainer>
                    {
                        contentData.img.map((img, i) => (
                            <div className={`gridItem-${i+1}`} key={i}>
                                <img src={img} alt="이미지"/>
                            </div>
                        ))
                    }
                </S.ImageGridContainer>

                <S.OverviewContainer>
                    <S.OverviewTitle>
                        {contentData.title} 전체
                    </S.OverviewTitle>
                    <S.OverviewList>
                        <li>최대 인원 {contentData.roomData.maxUser}명</li>
                        <li>침실 {contentData.roomData.bedroom}개</li>
                        <li>침대 {contentData.roomData.bed}개</li>
                        <li>욕실 {contentData.roomData.bathroom}개</li>
                    </S.OverviewList>
                </S.OverviewContainer>

            </S.MarginSideContainer>
        </S.MiniDetailContainer>
    );
};

export default MiniDetailComponents;