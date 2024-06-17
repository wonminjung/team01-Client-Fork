import React, { useState } from 'react';

import S from './style';
import KakaoMap from '../../../../components/kakaomap/KakaoMap';

const MiniDetailComponents = (props) => {
    const { contentData, clickCardListIndex } = props;
    const { title, img, roomData, introduction, amenities, address } = contentData[clickCardListIndex];

    // 기존 숙소 이미지 30개에서 mini Detail에 쓸 이미지 5개만 추출
    const miniDetailImg = img.slice(0, 5);

    // 소개글 더보기 버튼 상태
    const [ isMoreCheck, setMoreCheck ] = useState(false);
    const moreCheckHandle = () => {
        setMoreCheck(!isMoreCheck);
    };

    return (
        <S.MiniDetailContainer>
            <S.MarginSideContainer>
                <S.Title>
                    <div>{title}</div>
                </S.Title>

                <S.ImageGridContainer>
                    {
                        miniDetailImg.map((img, i) => (
                            <div className={`gridItem-${i+1}`} key={i}>
                                <img src={img} alt="이미지"/>
                            </div>
                        ))
                    }
                </S.ImageGridContainer>

                <S.OverviewContainer>
                    <S.SectionContainer>
                        <S.SectionTitle>
                            {title} 전체
                        </S.SectionTitle>
                        <S.OverviewList>
                            <li>
                                <span>
                                    <img src={roomData[0].iconUrl} alt="이미지" />
                                </span>
                                <span>
                                    {`최대인원 ${roomData[0].count}명`}
                                </span>
                            </li>
                            <li>
                                <span>
                                    <img src={roomData[1].iconUrl} alt="이미지" />
                                </span>
                                <span>
                                    {`침실 ${roomData[1].count}명`}
                                </span>
                            </li>
                            <li>
                                <span>
                                    <img src={roomData[2].iconUrl} alt="이미지" />
                                </span>
                                <span>
                                    {`침대 ${roomData[2].count}명`}
                                </span>
                            </li>
                            <li>
                                <span>
                                    <img src={roomData[3].iconUrl} alt="이미지" />
                                </span>
                                <span>
                                    {`욕실 ${roomData[3].count}명`}
                                </span>
                            </li>
                        </S.OverviewList>
                    </S.SectionContainer>

                    <S.SectionContainer>
                        <S.SectionTitle>
                            숙소 설명
                        </S.SectionTitle>
                        <S.OverviewIntroductionContainer
                            className={isMoreCheck ? "overviewChecked" : ""}
                        >
                            <S.OverviewIntorduction dangerouslySetInnerHTML={{__html: introduction}}/>
                        </S.OverviewIntroductionContainer>
                        <S.OverviewMoreButton 
                            className={isMoreCheck ? "OMBnotMore" : ""}
                            onClick={moreCheckHandle}
                        >
                            {isMoreCheck ? "간략히" : "더보기"}
                        </S.OverviewMoreButton>
                    </S.SectionContainer>
                    
                    <S.SectionContainer>
                        <S.SectionTitle>
                            숙소 편의시설
                        </S.SectionTitle>
                        <S.OverviewAmenities>
                            {
                                amenities && amenities.map((data, i) => (
                                    <li key={i}>
                                        <span>
                                            <img src={data.iconUrl} alt="이미지" />
                                        </span>
                                        <span>
                                            {data.name}
                                        </span>
                                    </li>
                                ))
                            }
                        </S.OverviewAmenities>
                    </S.SectionContainer>

                    <S.SectionContainer>
                        <S.MapContainer>
                            <KakaoMap props={address}/>
                        </S.MapContainer>
                    </S.SectionContainer>

                </S.OverviewContainer>
            </S.MarginSideContainer>
        </S.MiniDetailContainer>
    );
};

export default MiniDetailComponents;