import React, { useState } from 'react';

import S from './style';
import KakaoMap from '../../../../components/kakaomap/KakaoMap';
import BasicButton from '../../../../components/button/BasicButton';
import { Link } from 'react-router-dom';

const MiniDetailComponents = ({ contentData, clickCardListIndex }) => {
    // const { title, img, roomData, description, address, convenience, convenienceIcon } = contentData[clickCardListIndex];
    const { id, title, roomImg, roomData, description, address, convenience } = contentData[clickCardListIndex];


    // 기존 숙소 이미지 30개에서 mini Detail에 쓸 이미지 5개만 추출
    const miniDetailImg = roomImg.slice(0, 5);

    // 소개글 더보기 버튼 상태
    const [ isMoreCheck, setMoreCheck ] = useState(false);
    const moreCheckHandle = () => {
        setMoreCheck(!isMoreCheck);
    };

    return (
        <S.MiniDetailContainer>
            <S.MarginSideContainer>
                <S.HeaderContainer>
                    <div>{title}</div>
                    <Link to={`/detail?roomId=${id}`}>
                        <BasicButton style={{width: "80px"}}>
                                상세보기
                        </BasicButton>
                    </Link>
                </S.HeaderContainer>

                <S.ImageGridContainer>
                    {
                        miniDetailImg && miniDetailImg.map((img, i) => 
                            (
                                <div className={`gridItem-${i+1}`} key={i}>
                                    <img src={img} alt="이미지"/>
                                </div>
                            )
                        )
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
                                    <img src={"./images/pages/search/main/miniDetail/overview/user.svg"} alt="이미지" />
                                </span>
                                <span>
                                    {`최대인원 ${roomData.maxUser}명`}
                                </span>
                            </li>
                            <li>
                                <span>
                                    <img src={"./images/pages/search/main/miniDetail/overview/house.svg"} alt="이미지" />
                                </span>
                                <span>
                                    {`침실 ${roomData.bedroom}명`}
                                </span>
                            </li>
                            <li>
                                <span>
                                    <img src={"./images/pages/search/main/miniDetail/overview/bed-single.svg"} alt="이미지" />
                                </span>
                                <span>
                                    {`침대 ${roomData.bed}명`}
                                </span>
                            </li>
                            <li>
                                <span>
                                    <img src={"./images/pages/search/main/miniDetail/overview/bath.svg"} alt="이미지" />
                                </span>
                                <span>
                                    {`욕실 ${roomData.bathroom}명`}
                                </span>
                            </li>
                        </S.OverviewList>
                    </S.SectionContainer>

                    <S.SectionContainer>
                        <S.SectionTitle>
                            숙소 설명
                        </S.SectionTitle>
                        <S.OverviewDescriptionContainer
                            className={isMoreCheck ? "overviewChecked" : ""}
                        >
                            <S.OverviewDescription>
                                {description && description}
                            </S.OverviewDescription>
                        </S.OverviewDescriptionContainer>
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
                        <S.OverviewConvenience>
                            {
                                convenience && convenience.map((conv, i) => 
                                    (
                                        <li key={i}>
                                            <span className={`dIcon ${conv.icon}`}></span>
                                            <span>
                                                {conv.con}
                                            </span>
                                        </li>
                                    )
                                )
                            }
                        </S.OverviewConvenience>
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