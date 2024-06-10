import React, { useState } from 'react';

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
        roomData : [
            {
                iconUrl: "./images/pages/search/main/miniDetail/overview/user.svg",
                count: 6,
                name: "최대 인원",
                cname: "명",
            },
            {
                iconUrl: "./images/pages/search/main/miniDetail/overview/house.svg",
                count: 2,
                name: "침실",
                cname: "개",
            },
            {
                iconUrl: "./images/pages/search/main/miniDetail/overview/bed-single.svg",
                count: 2,
                name: "침대",
                cname: "개",
            },
            {
                iconUrl: "./images/pages/search/main/miniDetail/overview/bath.svg",
                count: 2,
                name: "욕실",
                cname: "개",
            },
        ],
        introduction: `
        서울 중심부에 위치한 럭셔리 듀플렉스 펜트하우스에 오신 것을 환영합니다.<br><br>

        저희 숙소는 8미터 높이의 천장과 멋진 전망을 즐길 수 있는 넓은 창문을 갖추고 있습니다.<br><br>
        
        ⬇️ 자세한 내용을 보려면 클릭하세요. ⬇️<br>
        다음 정보를 참고하시기 바랍니다.<br><br>

        숙소<br>
        서울의 중심, 프라임 로케이션에 위치한 멋진 펜트하우스 로프트!<br><br>
        
        이 펜트하우스 로프트는 마포역에서 불과 200미터 거리에 있으며 버스 정류장에서 도보로 1분 거리에 있어 거의 모든 곳으로 쉽게 이동할 수 있습니다.<br><br>
        
        높이 솟은 높은 천장과 넓은 공간으로 서울에서 가장 인기 있는 동네 3곳인 홍대, 명동, 이태원에 쉽게 접근할 수 있어 서울 최고의 위치 중 하나입니다.<br><br>
        
        ✔️세련되고 새롭게 리모델링된 듀플렉스 펜트하우스 로프트에는 2층의 마스터 베드룸, 추가 침대, 주방, 욕실 2개가 있는 고급스러운 거실 공간이 있습니다. 서울 최고의 위치에서 고급스러움과 편안함의 절정을 경험하세요.<br><br>
        
        도시의 활기찬 중심지에서 고급 숙소를 찾고 계신 분들에게✔️ 안성맞춤입니다.<br><br>
        
        ✔️ 전문 청소 서비스를 통해 깨끗한 객실을 유지하고 편안한 호텔 침구를 제공합니다.<br><br>
        
        * 파티는 불가하며, 밤 9시 이후에는 시끄러운 음악이 금지됩니다.<br><br>
        
        - 넓은 창문을 통한 스카이라인 전망<br>
        - 초고속 인터넷/와이파이<br>
        - 47인치 휴대용 TV<br>
        - 모든 침실과 바닥에 에어컨<br>
        - 스마트 주방용품은 모두 휴대전화를 통해 제어할 수 있습니다.<br>
        - 원격 제어 커튼<br>
        기타 사항:<br>
        밤 10시 이후에는 특히 조용해 주세요. 이웃의 소음으로 인한 불만은 호스트의 퇴실 요청으로 이어질 수 있습니다.<br><br>
        
        근처 교통<br>
        마포역: 도보 3분<br>
        버스 정류장 근처: 도보 1분<br><br>
        
        인천공항철도<br>
        1) 공항버스 (6701) - 45분<br>
        2) 지하철 (AREX, 공덕) - 40분<br><br>
        
        홍대:<br>
        버스 - 15분 (7016, 7613 등)<br><br>
        
        명동:<br>
        버스 - 20분 (463, 604, 261 등)<br>
        : 지하철 - 이태원 25분<br>
        지하철 - 강남 15분<br>
        지하철 - 30분<br><br>
        
        다른 관광지로 가는 교통편에 대해 궁금한 점이 있으시면 언제든 문의주세요!<br><br>

        게스트 이용 가능 공간/시설<br>
        * 수영장, 피트니스센터, 사우나는 2인만 이용가능하오니 참고부탁드립니다. 그리고 숙박 요금에 포함되지 않은 호스트가 제공하는 무료 서비스이므로 호텔 정책에 따라 이용이 불가능할 수 있습니다.<br><br>

        기타 주의사항<br>
        객실 내 모든 종류의 흡연은 엄격히 금지되어 있습니다! 🚭<br>
        위반자는 퇴실을 요구할 수 있으며 벌금이 부과될 수 있습니다.<br><br><br>
        `,
        amenities: [
            {
                iconUrl: "./images/pages/search/main/miniDetail/amenities/image.svg", 
                name: "계곡 전망"
            },
            {
                iconUrl: "./images/pages/search/main/miniDetail/amenities/image.svg", 
                name: "산 전망"
            },
            {
                iconUrl: "./images/pages/search/main/miniDetail/amenities/wifi-full.svg", 
                name: "무선 인터넷"
            },
            {
                iconUrl: "./images/pages/search/main/miniDetail/amenities/tv.svg", 
                name: "45인치 HDTV + 프리미엄 케이블 TV"
            },
            {
                iconUrl: "./images/pages/search/main/miniDetail/amenities/car.svg", 
                name: "건물 내 무료 주차"
            },
            {
                iconUrl: "./images/pages/search/main/miniDetail/amenities/pool.svg",
                name: "전용 야외 수영장 - 연중 언제든 예약 가능, 특정 시간대만 이용 가능, 수영장 덮개, 온수"
            },
        ]
    };

    const [ isMoreCheck, setMoreCheck ] = useState(false);
    const moreCheckHandle = () => {
        setMoreCheck(!isMoreCheck);
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
                    <S.SectionContainer>
                        <S.SectionTitle>
                            {contentData && contentData.title} 전체
                        </S.SectionTitle>
                        <S.OverviewList>
                            {
                                contentData && contentData.roomData.map((data, i) => (
                                    <li key={i}>
                                        <span>
                                            <img src={data.iconUrl} alt="이미지" />
                                        </span>
                                        <span>
                                            {`${data.name} ${data.count}${data.cname}`}
                                        </span>
                                    </li>
                                ))
                            }
                        </S.OverviewList>
                    </S.SectionContainer>

                    <S.SectionContainer>
                        <S.SectionTitle>
                            숙소 설명
                        </S.SectionTitle>
                        <S.OverviewIntroductionContainer
                            className={isMoreCheck ? "overviewChecked" : ""}
                        >
                            <S.OverviewIntorduction dangerouslySetInnerHTML={{__html: contentData.introduction}}/>
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
                                contentData && contentData.amenities.map((data, i) => (
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
                </S.OverviewContainer>
            </S.MarginSideContainer>
        </S.MiniDetailContainer>
    );
};

export default MiniDetailComponents;