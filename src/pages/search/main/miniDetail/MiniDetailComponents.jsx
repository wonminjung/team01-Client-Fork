import React, { useEffect, useRef, useState } from 'react';

import S from './style';
import KakaoMap from '../../../../components/kakaomap/KakaoMap';
import BasicButton from '../../../../components/button/BasicButton';
import { Link } from 'react-router-dom';

const MiniDetailComponents = ({ contentData, clickCardListIndex }) => {
    const { _id, title, roomImg, roomData, description, address, convenience } = contentData[clickCardListIndex];

    // 기존 숙소 이미지 30개에서 mini Detail에 쓸 이미지 5개만 추출
    const miniDetailImg = roomImg.slice(0, 5);

    // 미니디테일 스크롤
    const scrollRef = useRef();

    // 소개글 더보기 버튼 상태
    const [ isMoreCheck, setMoreCheck ] = useState(false);
    const moreCheckHandle = () => {
        setMoreCheck(!isMoreCheck);
    };

    // 카드리스트에서 클릭한 인덱스가 변경되었을 때마다 초기화
    useEffect(() => {
        // 소개글 더보기 버튼 초기화
        setMoreCheck(false);

        // 미니디테일의 스크롤만 초기화
        scrollRef.current.scrollTop = 0;

        // 해당 페이지의 스크롤도 초기화
        window.scrollTo({ top: 0 });
    }, [clickCardListIndex]);

    return (
        <S.MiniDetailContainer ref={scrollRef}>
            <S.MarginSideContainer>
                <S.HeaderContainer>
                    <div>{title}</div>
                    <Link to={`/detail?roomId=${_id}`}>
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
                                    {`침실 ${roomData.bedroom}개`}
                                </span>
                            </li>
                            <li>
                                <span>
                                    <img src={"./images/pages/search/main/miniDetail/overview/bed-single.svg"} alt="이미지" />
                                </span>
                                <span>
                                    {`침대 ${roomData.bed}개`}
                                </span>
                            </li>
                            <li>
                                <span>
                                    <img src={"./images/pages/search/main/miniDetail/overview/bath.svg"} alt="이미지" />
                                </span>
                                <span>
                                    {`욕실 ${roomData.bathroom}개`}
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