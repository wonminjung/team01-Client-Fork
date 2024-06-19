import React, { useState } from 'react';
import CardListContainer from './cardList/CardListContainer';
import MiniDetailComponents from './miniDetail/MiniDetailComponents';
import S from './style';
import { useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchMainContainer = () => {


    
    const contentData = [
        {
            id : "1",
            cate : "nearBeach",
            img : [
                "./images/pages/search/main/cardList/_1_/0db6f10e-48a0-47f2-8bce-ba9bcf28fa88.jpg", 
                "./images/pages/search/main/cardList/_1_/0deb9b66-26e5-488e-8e6f-ce23fedf780a.jpg", 
                "./images/pages/search/main/cardList/_1_/0e5fe280-f26f-4af3-acea-2a5e81c539e0.jpg", 
                "./images/pages/search/main/cardList/_1_/1fa4935b-916b-48b0-9f09-4f47ce915c11.jpg", 
                "./images/pages/search/main/cardList/_1_/2a7b90b2-79d8-4c2f-ac61-856f0c628a20.jpg", 
                "./images/pages/search/main/cardList/_1_/04e4ea2f-2a0e-4926-9f59-3565a3a56db9.jpg", 
                "./images/pages/search/main/cardList/_1_/4e24cf2d-712d-4794-aa94-4140ccae5a3a.jpg", 
                "./images/pages/search/main/cardList/_1_/6e627ee5-6711-40cd-a7d5-a614bb618e3d.jpg", 
                "./images/pages/search/main/cardList/_1_/8dda539f-3d29-457e-87f5-a7268ebb7c85.jpg", 
                "./images/pages/search/main/cardList/_1_/9bc28cff-5ad7-4cc8-a10a-a06a7247683d.jpg", 
                "./images/pages/search/main/cardList/_1_/9c33f39d-163b-46da-aafc-89478d86fe37.jpg", 
                "./images/pages/search/main/cardList/_1_/9e669d45-fb55-4231-a7f8-01147c6ac519.jpg", 
                "./images/pages/search/main/cardList/_1_/11afaa4a-2be0-4eaf-88fc-3bb648ef65a2.jpg", 
                "./images/pages/search/main/cardList/_1_/14e0d6b7-8993-4261-a050-1b0d47dd4096.jpg", 
                "./images/pages/search/main/cardList/_1_/91bc1ea5-8974-4d21-adbe-809a8b1fd210.jpg", 
                "./images/pages/search/main/cardList/_1_/0db6f10e-48a0-47f2-8bce-ba9bcf28fa88.jpg", 
                "./images/pages/search/main/cardList/_1_/764c06b5-a817-4b2c-93b2-2de302513f32.jpg", 
                "./images/pages/search/main/cardList/_1_/4350c42d-0e0d-4f43-8e7f-313690f3c13c.jpg", 
                "./images/pages/search/main/cardList/_1_/46346eb0-4c11-4541-a8de-5494061f2e8a.jpg", 
                "./images/pages/search/main/cardList/_1_/aca5fd57-3421-44e2-86d8-7ea3bb268f1d.jpg", 
                "./images/pages/search/main/cardList/_1_/b1d2fa06-6ff4-4baf-aa63-f4f57c78ef15.jpg", 
                "./images/pages/search/main/cardList/_1_/b32eb100-2cf6-472c-9a82-76e54aa21968.jpg", 
                "./images/pages/search/main/cardList/_1_/b5651a00-0e09-48f1-a31e-78c5e676f6bf.jpg", 
                "./images/pages/search/main/cardList/_1_/ba265620-ac8b-40f5-949a-2035c5a3c365.jpg", 
                "./images/pages/search/main/cardList/_1_/ecace55e-9400-4991-b643-97607e0b0bc6.jpg", 
                "./images/pages/search/main/cardList/_1_/eff0a5bc-914a-44bf-b127-cdcf70462d25.jpg", 
                "./images/pages/search/main/cardList/_1_/f3c4e40b-0bc8-4fdb-bc6f-59483819d012.jpg", 
                "./images/pages/search/main/cardList/_1_/f8951c4f-0bda-42d1-8b3b-7eeff1e7dc76.jpg", 
                "./images/pages/search/main/cardList/_1_/fb51b337-ea15-4e31-ab17-861049db65c2.jpg", 
                "./images/pages/search/main/cardList/_1_/fde94a0c-2ba0-4a22-92a8-9bcae9f3042b.jpg", 
            ],
            title : "서울의 집",
            address : "서울특별시 종로3가역",
            dayPrice : 1123123,
            roomData : {
                maxUser : 5,
                bedroom : 4,
                bed : 3,
                bathroom : 4,
            },
            description: `서울 중심부에 위치한 럭셔리 듀플렉스 펜트하우스에 오신 것을 환영합니다.  

            저희 숙소는 8미터 높이의 천장과 멋진 전망을 즐길 수 있는 넓은 창문을 갖추고 있습니다.  
            
            ⬇️ 자세한 내용을 보려면 클릭하세요. ⬇️ 
            다음 정보를 참고하시기 바랍니다.  

            숙소 
            서울의 중심, 프라임 로케이션에 위치한 멋진 펜트하우스 로프트!  
            
            이 펜트하우스 로프트는 마포역에서 불과 200미터 거리에 있으며 버스 정류장에서 도보로 1분 거리에 있어 거의 모든 곳으로 쉽게 이동할 수 있습니다.  
            
            높이 솟은 높은 천장과 넓은 공간으로 서울에서 가장 인기 있는 동네 3곳인 홍대, 명동, 이태원에 쉽게 접근할 수 있어 서울 최고의 위치 중 하나입니다.  
            
            ✔️세련되고 새롭게 리모델링된 듀플렉스 펜트하우스 로프트에는 2층의 마스터 베드룸, 추가 침대, 주방, 욕실 2개가 있는 고급스러운 거실 공간이 있습니다. 서울 최고의 위치에서 고급스러움과 편안함의 절정을 경험하세요.  
            
            도시의 활기찬 중심지에서 고급 숙소를 찾고 계신 분들에게✔️ 안성맞춤입니다.  
            
            ✔️ 전문 청소 서비스를 통해 깨끗한 객실을 유지하고 편안한 호텔 침구를 제공합니다.  
            
            * 파티는 불가하며, 밤 9시 이후에는 시끄러운 음악이 금지됩니다.  
            
            - 넓은 창문을 통한 스카이라인 전망 
            - 초고속 인터넷/와이파이 
            - 47인치 휴대용 TV 
            - 모든 침실과 바닥에 에어컨 
            - 스마트 주방용품은 모두 휴대전화를 통해 제어할 수 있습니다. 
            - 원격 제어 커튼 
            기타 사항: 
            밤 10시 이후에는 특히 조용해 주세요. 이웃의 소음으로 인한 불만은 호스트의 퇴실 요청으로 이어질 수 있습니다.  
            
            근처 교통 
            마포역: 도보 3분 
            버스 정류장 근처: 도보 1분  
            
            인천공항철도 
            1) 공항버스 (6701) - 45분 
            2) 지하철 (AREX, 공덕) - 40분  
            
            홍대: 
            버스 - 15분 (7016, 7613 등)  
            
            명동: 
            버스 - 20분 (463, 604, 261 등) 
            : 지하철 - 이태원 25분 
            지하철 - 강남 15분 
            지하철 - 30분  
            
            다른 관광지로 가는 교통편에 대해 궁금한 점이 있으시면 언제든 문의주세요!  

            게스트 이용 가능 공간/시설 
            * 수영장, 피트니스센터, 사우나는 2인만 이용가능하오니 참고부탁드립니다. 그리고 숙박 요금에 포함되지 않은 호스트가 제공하는 무료 서비스이므로 호텔 정책에 따라 이용이 불가능할 수 있습니다.  

            기타 주의사항 
            객실 내 모든 종류의 흡연은 엄격히 금지되어 있습니다! 🚭 
            위반자는 퇴실을 요구할 수 있으며 벌금이 부과될 수 있습니다.   
            `,
            convenience : [
                {con : "계곡 전망"},
                {con : "산 전망"},
                {con : "무선 인터넷"},
                {con : "45인치 HDTV + 프리미엄 케이블 TV"},
                {con : "건물 내 무료 주차"},
                {con : "전용 야외 수영장 - 연중 언제든 예약가능,\n특정 시간대만 이용 가능, 수영장 덮개, 온수"},
            ],
            convenienceIcon : [
                {icon : "picture"},
                {icon : "picture"},
                {icon : "wifi"},
                {icon : "tv"},
                {icon : "car"},
                {icon : "pool"},
            ],
        },
        {
            id : "2",
            cate : "coolPool",
            img : [
                "./images/pages/search/main/cardList/_2_/07175a2c-49df-4058-9985-72e7d6ec4545.jpg",
                "./images/pages/search/main/cardList/_2_/0ae5bc1d-9404-4e7b-b720-258b2c36976a.jpg",
                "./images/pages/search/main/cardList/_2_/0bd7853d-2663-41e9-bd61-24f9ebd5db11.jpg",
                "./images/pages/search/main/cardList/_2_/0ce47d41-badc-4ebf-8661-34b809d4698a.jpg",
                "./images/pages/search/main/cardList/_2_/19f4c151-dffd-4603-ae2a-59a8c57e21b1.jpg",
                "./images/pages/search/main/cardList/_2_/1fe495c0-cf65-4f5a-b29a-90a1c2ed0910.jpg",
                "./images/pages/search/main/cardList/_2_/20383cc5-d7ae-453e-a79e-a720c2448623.jpg",
                "./images/pages/search/main/cardList/_2_/21840585-503c-49e8-9792-79fe085d772c.jpg",
                "./images/pages/search/main/cardList/_2_/2274d5fc-dbeb-4d2c-8d41-674836bc8c87.jpg",
                "./images/pages/search/main/cardList/_2_/4c3ccc47-311f-46fc-9c8e-9df16eba6d6a.jpg",
                "./images/pages/search/main/cardList/_2_/5bc9a697-b948-4749-8c9b-c250e4d29a15.jpg",
                "./images/pages/search/main/cardList/_2_/5ebb3ba7-f873-4818-956a-ef1288694ab9.jpg",
                "./images/pages/search/main/cardList/_2_/70479096-f62d-4713-b4ad-d825ea03a675.jpg",
                "./images/pages/search/main/cardList/_2_/85a3b050-798e-4978-a703-4cde10591849.jpg",
                "./images/pages/search/main/cardList/_2_/8fc7faf8-1e26-4615-b830-182cf72290c2.jpg",
                "./images/pages/search/main/cardList/_2_/96a65481-48df-41fe-8e97-a3238acb192f.jpg",
                "./images/pages/search/main/cardList/_2_/9a643407-adf1-4c03-b7c5-3529c4cb98db.jpg",
                "./images/pages/search/main/cardList/_2_/9cdc18ad-a09a-469a-8682-ad77c0ab58ec.jpg",
                "./images/pages/search/main/cardList/_2_/9fed0467-8ee3-4d25-a0ea-f1389da693cf.jpg",
                "./images/pages/search/main/cardList/_2_/a0a630b2-b390-48bb-8654-bc3486b8f7f0.jpg",
                "./images/pages/search/main/cardList/_2_/a1b60e60-a513-4d17-bf89-391546659aa0.jpg",
                "./images/pages/search/main/cardList/_2_/a7212336-94f8-4aad-9809-75ec8cb05836.jpg",
                "./images/pages/search/main/cardList/_2_/bb877434-c79c-4851-878a-de058e7afade.jpg",
                "./images/pages/search/main/cardList/_2_/d3f9b2d0-0118-4420-8962-0a9913181361.jpg",
                "./images/pages/search/main/cardList/_2_/d43f26e6-7eaf-47a5-93d7-8972fd7b38e9.jpg",
                "./images/pages/search/main/cardList/_2_/d634002a-6350-42b7-8c37-1a951f783d2d.jpg",
                "./images/pages/search/main/cardList/_2_/d6cea683-0fd3-435c-b31a-1b7278bc0689.jpg",
                "./images/pages/search/main/cardList/_2_/e26bf0e7-62cf-4f6a-95a2-53a1ca6638aa.jpg",
                "./images/pages/search/main/cardList/_2_/eaa9a769-5a44-4829-a514-e2e3159b8f1f.jpg",
                "./images/pages/search/main/cardList/_2_/fcbaa271-d102-4066-89b7-c2a0b04cdcbf.jpg",
            ],
            title : "부산의 집",
            address : "부산 해운대",
            dayPrice : 900,
            roomData : {
                maxUser : 3,
                bedroom : 4,
                bed : 3,
                bathroom : 4,
            },
            description: `서울 중심부에 위치한 럭셔리 듀플렉스 펜트하우스에 오신 것을 환영합니다.  

            저희 숙소는 8미터 높이의 천장과 멋진 전망을 즐길 수 있는 넓은 창문을 갖추고 있습니다.  
            
            ⬇️ 자세한 내용을 보려면 클릭하세요. ⬇️ 
            다음 정보를 참고하시기 바랍니다.  

            숙소 
            서울의 중심, 프라임 로케이션에 위치한 멋진 펜트하우스 로프트!  
            
            이 펜트하우스 로프트는 마포역에서 불과 200미터 거리에 있으며 버스 정류장에서 도보로 1분 거리에 있어 거의 모든 곳으로 쉽게 이동할 수 있습니다.  
            
            높이 솟은 높은 천장과 넓은 공간으로 서울에서 가장 인기 있는 동네 3곳인 홍대, 명동, 이태원에 쉽게 접근할 수 있어 서울 최고의 위치 중 하나입니다.  
            
            ✔️세련되고 새롭게 리모델링된 듀플렉스 펜트하우스 로프트에는 2층의 마스터 베드룸, 추가 침대, 주방, 욕실 2개가 있는 고급스러운 거실 공간이 있습니다. 서울 최고의 위치에서 고급스러움과 편안함의 절정을 경험하세요.  
            
            도시의 활기찬 중심지에서 고급 숙소를 찾고 계신 분들에게✔️ 안성맞춤입니다.  
            
            ✔️ 전문 청소 서비스를 통해 깨끗한 객실을 유지하고 편안한 호텔 침구를 제공합니다.  
            
            * 파티는 불가하며, 밤 9시 이후에는 시끄러운 음악이 금지됩니다.  
            
            - 넓은 창문을 통한 스카이라인 전망 
            - 초고속 인터넷/와이파이 
            - 47인치 휴대용 TV 
            - 모든 침실과 바닥에 에어컨 
            - 스마트 주방용품은 모두 휴대전화를 통해 제어할 수 있습니다. 
            - 원격 제어 커튼 
            기타 사항: 
            밤 10시 이후에는 특히 조용해 주세요. 이웃의 소음으로 인한 불만은 호스트의 퇴실 요청으로 이어질 수 있습니다.  
            
            근처 교통 
            마포역: 도보 3분 
            버스 정류장 근처: 도보 1분  
            
            인천공항철도 
            1) 공항버스 (6701) - 45분 
            2) 지하철 (AREX, 공덕) - 40분  
            
            홍대: 
            버스 - 15분 (7016, 7613 등)  
            
            명동: 
            버스 - 20분 (463, 604, 261 등) 
            : 지하철 - 이태원 25분 
            지하철 - 강남 15분 
            지하철 - 30분  
            
            다른 관광지로 가는 교통편에 대해 궁금한 점이 있으시면 언제든 문의주세요!  

            게스트 이용 가능 공간/시설 
            * 수영장, 피트니스센터, 사우나는 2인만 이용가능하오니 참고부탁드립니다. 그리고 숙박 요금에 포함되지 않은 호스트가 제공하는 무료 서비스이므로 호텔 정책에 따라 이용이 불가능할 수 있습니다.  

            기타 주의사항 
            객실 내 모든 종류의 흡연은 엄격히 금지되어 있습니다! 🚭 
            위반자는 퇴실을 요구할 수 있으며 벌금이 부과될 수 있습니다.   
            `,
            convenience : [
                {con : "계곡 전망"},
                {con : "산 전망"},
                {con : "무선 인터넷"},
                {con : "45인치 HDTV + 프리미엄 케이블 TV"},
                {con : "건물 내 무료 주차"},
                {con : "전용 야외 수영장 - 연중 언제든 예약가능,\n특정 시간대만 이용 가능, 수영장 덮개, 온수"},
            ],
            convenienceIcon : [
                {icon : "picture"},
                {icon : "picture"},
                {icon : "wifi"},
                {icon : "tv"},
                {icon : "car"},
                {icon : "pool"},
            ],
        },
        {
            id : "3",
            cate : "coolPool",
            img : [
                "./images/pages/search/main/cardList/_3_/0b0ef59e-5e49-46b1-a808-a6cfbb5b5254.jpg",
                "./images/pages/search/main/cardList/_3_/15a08491-6235-4c84-8dec-97e2ddf38487.jpg",
                "./images/pages/search/main/cardList/_3_/27ad23d2-28f8-42fd-ac4d-63cfc68b7e6a.jpg",
                "./images/pages/search/main/cardList/_3_/287b6fc5-5034-4f78-8f5c-106ee7e14b75.jpg",
                "./images/pages/search/main/cardList/_3_/295e7809-a672-4f9d-8c7d-cc693f2cb81b.jpg",
                "./images/pages/search/main/cardList/_3_/36491b24-163a-4eb6-beb6-f651269314b8.jpg",
                "./images/pages/search/main/cardList/_3_/3eaab9c0-30a6-401c-ad3e-dfc62330eb0b.jpg",
                "./images/pages/search/main/cardList/_3_/3f402a70-6f1e-4dba-a7ae-f6492ea88d17.jpg",
                "./images/pages/search/main/cardList/_3_/411b3be9-5373-4c35-a0f0-57b1f997dcbe.jpg",
                "./images/pages/search/main/cardList/_3_/411e4c04-f1f6-429c-a635-5ccd30ac1dfb.jpg",
                "./images/pages/search/main/cardList/_3_/435449ea-5031-46c3-8879-081d5cca497c.jpg",
                "./images/pages/search/main/cardList/_3_/479923f9-1c2e-4aa9-bb64-5f5f4a3aa13d.jpg",
                "./images/pages/search/main/cardList/_3_/49886ec5-97c4-450d-a546-4188515018b0.jpg",
                "./images/pages/search/main/cardList/_3_/4e567d1e-49f0-4c4c-abf8-c5a2c7b9cc32.jpg",
                "./images/pages/search/main/cardList/_3_/66f15d8e-0930-42ae-9858-17f86802d586.jpg",
                "./images/pages/search/main/cardList/_3_/792d251a-b0b0-4ac5-b347-b28601873f94.jpg",
                "./images/pages/search/main/cardList/_3_/79341b0e-d080-4e24-bbe1-1a877730d24a.jpg",
                "./images/pages/search/main/cardList/_3_/81043132-1d80-45ef-b76d-a198c15aa458.jpg",
                "./images/pages/search/main/cardList/_3_/8692bfbd-656a-4b12-8f12-ef475799651d.jpg",
                "./images/pages/search/main/cardList/_3_/88d4297e-c281-4750-a8a6-757892647d86.jpg",
                "./images/pages/search/main/cardList/_3_/9155d924-cbc5-4e6f-b739-9909a293e42e.jpg",
                "./images/pages/search/main/cardList/_3_/915caf43-e419-48cb-b9f9-345fc45d165e.jpg",
                "./images/pages/search/main/cardList/_3_/a3424dfa-b9f2-429a-a03c-f7786a00383e.jpg",
                "./images/pages/search/main/cardList/_3_/b380cb0b-5a08-414e-9d1a-ee8294be36a2.jpg",
                "./images/pages/search/main/cardList/_3_/b46b1705-a4f0-4133-a3d2-2dbfb9f52aed.jpg",
                "./images/pages/search/main/cardList/_3_/b8d348de-c439-4c73-9581-5376cf9ff56e.jpg",
                "./images/pages/search/main/cardList/_3_/d27a4374-8515-4d8f-993e-e0e7694202c1.jpg",
                "./images/pages/search/main/cardList/_3_/ee165a09-e99e-41c7-b826-d5f0820dea8a.jpg",
                "./images/pages/search/main/cardList/_3_/fdf95ea8-4c87-45ad-a4f4-5909ffe3aaa2.jpg",
            ],
            title : "서울의 아파트",
            address : "서울 강남구",
            dayPrice : 8000,
            roomData : {
                maxUser : 3,
                bedroom : 4,
                bed : 3,
                bathroom : 4,
            },
            description: `저희 숙소는  “빈대” 걱정 없는 “안심 숙소” 입니다.🙆🏻‍♂️  안녕하세요.🙂 게스트 분들이 안심하고 머물다 가실 수 있도록 “보안”에 있어 철저히 관리하고 있으며, 편안하고 쾌적한 환경에서 머무실 수 있도록 “매일 청소, 침구류 세탁, 소독”을 하고 있습니다.  
            -롯데타워가 보이는 강남 고층 시티뷰🌃  -강남, 신사, 압구정 등 핫플레이스 인접🤖  -남부터미널/지하철역 도보 3분 🚌  -주차 가능 🚘  
            -1층에 위치한 CU편의점🏪  -숙소 앞에 위치한 번화가 🍕🍻 (카페, 식당, 술집, PC방 1분 이내)  -Netflix, Disney+, Youtube, Tiving, Watcha, 등 OTT시청 가능 📺  
            -free wifi 💻  -감성 포토존 📸  🚶🏻도보기준 -남부터미널역(3호선) 도보 3분 -교대역(2호선) 도보 7분 -올리브영/다이소 도보 5분  🚘차량기준 -예술의전당 8분 
            -신사(가로수길) 20분, 압구정 25분 -반포한강공원 15분 내외  
            `,
            convenience : [
                {con : "계곡 전망"},
                {con : "산 전망"},
                {con : "무선 인터넷"},
                {con : "45인치 HDTV + 프리미엄 케이블 TV"},
                {con : "건물 내 무료 주차"},
                {con : "전용 야외 수영장 - 연중 언제든 예약가능,\n특정 시간대만 이용 가능, 수영장 덮개, 온수"},
            ],
            convenienceIcon : [
                {icon : "picture"},
                {icon : "picture"},
                {icon : "wifi"},
                {icon : "tv"},
                {icon : "car"},
                {icon : "pool"},
            ],
        },
        {
            id : "4",
            cate : "coolPool",
            img : [
                "./images/pages/search/main/cardList/_4_/0eeb2cfa-a403-42eb-90f8-c33c69e66308.jpg",
                "./images/pages/search/main/cardList/_4_/2b0d5199-5599-48bf-834d-a794d922bb39.jpg",
                "./images/pages/search/main/cardList/_4_/368f8b71-c554-40af-a001-e621ab98b71b.jpg",
                "./images/pages/search/main/cardList/_4_/467f26a3-4c36-4bec-8765-4e2506e575ee.jpg",
                "./images/pages/search/main/cardList/_4_/47bf97bd-acf8-4dbe-b00c-730b62a62581.jpg",
                "./images/pages/search/main/cardList/_4_/599801d1-7437-4f43-bc09-117f9a60270a.jpg",
                "./images/pages/search/main/cardList/_4_/61f048e6-4948-4bda-b133-3f6fa996fbfa.jpg",
                "./images/pages/search/main/cardList/_4_/6b855b51-9ea6-4264-afed-c0073f3e6a13.jpg",
                "./images/pages/search/main/cardList/_4_/78957498-6028-474a-913f-1421b278022a.jpg",
                "./images/pages/search/main/cardList/_4_/81fa3631-e88f-42bf-8313-171cc280965c.jpg",
                "./images/pages/search/main/cardList/_4_/8dbd70a0-c9f0-49bc-9af0-318212789305.jpg",
                "./images/pages/search/main/cardList/_4_/91f88199-20f8-4d7c-9356-9300d17ad39b.jpg",
                "./images/pages/search/main/cardList/_4_/9aabe393-2421-41b7-a89a-e407ea45ae47.jpg",
                "./images/pages/search/main/cardList/_4_/9b684cb2-2e7a-4521-803d-44e8035b6e3b.jpg",
                "./images/pages/search/main/cardList/_4_/9c61cf42-269f-4035-9bf2-a275aa9f24a8.jpg",
                "./images/pages/search/main/cardList/_4_/9de540d6-57f1-4076-8914-e79eebe63847.jpg",
                "./images/pages/search/main/cardList/_4_/c6fc1cd8-81ee-4546-bf82-6fed8e12543f.jpg",
                "./images/pages/search/main/cardList/_4_/cbfd9150-8350-432c-b9ed-c4819049453a.jpg",
                "./images/pages/search/main/cardList/_4_/d2ec8594-d6e9-4d1b-b280-eec9fda6a7ca.jpg",
                "./images/pages/search/main/cardList/_4_/d3f196ef-b682-4c4e-98ba-19d4bb01d194.jpg",
                "./images/pages/search/main/cardList/_4_/dbc7543e-70fa-459b-93b5-a729f4d72454.jpg",
                "./images/pages/search/main/cardList/_4_/dfb5b584-b6bd-4692-81dd-fc460202502e.jpg",
                "./images/pages/search/main/cardList/_4_/e493ff7d-bdce-4a50-bc40-e006a150e2ee.jpg",
                "./images/pages/search/main/cardList/_4_/e614a514-5ab5-4a31-9f0a-236b9a010cba.jpg",
                "./images/pages/search/main/cardList/_4_/e6fdced4-f0a9-4294-aaab-eb5b3327b0b6.jpg",
                "./images/pages/search/main/cardList/_4_/f474d80a-a5b9-47f9-9e52-1560c2f53485.jpg",
                "./images/pages/search/main/cardList/_4_/f5b3b02f-0b46-42ba-a854-06cf07c1fd6a.jpg",
                "./images/pages/search/main/cardList/_4_/f8a1a913-b752-4acc-8153-ee0b81c260a0.jpg",
                "./images/pages/search/main/cardList/_4_/f98e1161-c726-4d20-9e05-3fdd522115d6.jpg",
                "./images/pages/search/main/cardList/_4_/ff5c2c76-5001-440f-89cb-3b886f796e54.jpg",
            ],
            title : "북촌 한옥독채",
            address : "서울 북촌",
            dayPrice : 70000000,
            roomData : {
                maxUser : 5,
                bedroom : 4,
                bed : 3,
                bathroom : 4,
            },
            description: `소월한옥은 서울시-한옥체험업이 공식 지정된 한옥 숙박 시설로 내국인과 외국인 모두 이용 가능합니다☺️  
            💚ㄴㅔ이버에 '소월담' 검색 후 예약하시면 더 저렴하게 예약하실 수 있습니다!  
            @인스타그램 : sowol_hanok  편백욕조(히노끼)에서 탁 트인 마당을 바라보며  감성 낙낙함을 느끼실 수 있어요.   
            온전히 프라이빗한 소월담에서는 북스테이를 해도 좋고, 익숙한 일터를 떠나 워케이션을 해도 좋고, 아무것도 하지않고 오로지 나, 또는 소중한 사람과의 시간에 집중 해도 좋을거에요 : )  
            널찍한 마당을 보며 브런치를 먹거나, 처마 밑 마루에 걸터앉아 내리는 비 풍경을 보며 차 한잔을 하거나, 낮의 새 소리와 저녁 하늘의 별을 보며 반신욕을 즐겨보세요!  
            #아티스트베이커리 #런던베이글뮤지엄과 같은 핫한 카페들이 있으며 경복궁, 청와대, 익선동 등의 관광지를 도보로 이용하실 수 있습니다 ☺️  *기본 인원 : 2인 금액입니다. 
            1인 추가 : 7만원(최대 4인까지 가능)
            `,
            convenience : [
                {con : "계곡 전망"},
                {con : "산 전망"},
                {con : "무선 인터넷"},
                {con : "45인치 HDTV + 프리미엄 케이블 TV"},
                {con : "건물 내 무료 주차"},
                {con : "전용 야외 수영장 - 연중 언제든 예약가능,\n특정 시간대만 이용 가능, 수영장 덮개, 온수"},
            ],
            convenienceIcon : [
                {icon : "picture"},
                {icon : "picture"},
                {icon : "wifi"},
                {icon : "tv"},
                {icon : "car"},
                {icon : "pool"},
            ],
        },
        {
            id : "5",
            cate : "coolPool",
            img : [
                "./images/pages/search/main/cardList/_5_/03a84ac8-1c76-484f-b0df-40c2a5f36af4.jpg",
                "./images/pages/search/main/cardList/_5_/064e8442-4d9a-4268-9378-ec8ef7d2ce55.jpg",
                "./images/pages/search/main/cardList/_5_/085b8d17-45b9-4265-b7a7-dfc326f8ced1.jpg",
                "./images/pages/search/main/cardList/_5_/09542ba9-f855-41a0-ad4a-d08bfd267567.jpg",
                "./images/pages/search/main/cardList/_5_/0ec7d97c-a126-4be2-9ad5-5ba44c14a5c4.jpg",
                "./images/pages/search/main/cardList/_5_/124c49ce-2e04-4c23-87f7-fa10a7e64023.jpg",
                "./images/pages/search/main/cardList/_5_/1cea97d0-7501-4ac0-818b-8471c5575d1b.jpg",
                "./images/pages/search/main/cardList/_5_/261b37f9-4bc5-40da-afd2-f7717d492bf4.jpg",
                "./images/pages/search/main/cardList/_5_/2a2e732d-2cf2-4af7-a5aa-57064b5758ce.jpg",
                "./images/pages/search/main/cardList/_5_/30c09272-a497-4728-9b44-680fa41058f7.jpg",
                "./images/pages/search/main/cardList/_5_/40f9e4d4-eeb7-48b4-93ec-faf3ee570cd2.jpg",
                "./images/pages/search/main/cardList/_5_/46cabfa2-5f2b-466e-9048-a3eb2a18ea88.jpg",
                "./images/pages/search/main/cardList/_5_/4cc32065-f6bb-4ee9-bcf9-e3c9656fee0a.jpg",
                "./images/pages/search/main/cardList/_5_/58503731-b1bd-40f5-9d94-b91960521f4b.jpg",
                "./images/pages/search/main/cardList/_5_/6910be13-49e2-472f-b951-a016f28abc52.jpg",
                "./images/pages/search/main/cardList/_5_/6aed7e8a-c153-4e8a-8efe-5a84fb418745.jpg",
                "./images/pages/search/main/cardList/_5_/8fd1a17e-fc53-4364-a2d2-b8f34d241ffa.jpg",
                "./images/pages/search/main/cardList/_5_/92afe69c-a434-49bc-9be9-6707d2b964e5.jpg",
                "./images/pages/search/main/cardList/_5_/94b77ecc-e659-4569-b28b-86d0716f4649.jpg",
                "./images/pages/search/main/cardList/_5_/95c98696-1e2b-4b35-a8de-defcc08d4930.jpg",
                "./images/pages/search/main/cardList/_5_/b85fcb1a-3aac-4bc9-a6c1-cb1b892f4702.jpg",
                "./images/pages/search/main/cardList/_5_/c0f31fa6-372e-4109-9677-c24678fcd1a7.jpg",
                "./images/pages/search/main/cardList/_5_/c7982d45-a04f-49f1-b4c0-6e146d6ce8b4.jpg",
                "./images/pages/search/main/cardList/_5_/dd00267e-bcb7-42c2-a098-0e89edcad8fd.jpg",
                "./images/pages/search/main/cardList/_5_/e2c369d6-ded5-4008-ad88-4f3b2074a754.jpg",
                "./images/pages/search/main/cardList/_5_/e92387f5-9128-4bc9-9b71-cdf87293c3ac.jpg",
                "./images/pages/search/main/cardList/_5_/ee507afa-8208-4169-8620-da21806eb82f.jpg",
                "./images/pages/search/main/cardList/_5_/fc2fc6be-1d2d-464c-8796-a46d26dc8aa9.jpg",
            ],
            title : "영등포구의 아파트",
            address : "서울 영등포구",
            dayPrice : 150000,
            roomData : {
                maxUser : 5,
                bedroom : 4,
                bed : 3,
                bathroom : 4,
            },
            description: `9호선 선유도역 인접한  
            깨끗한 신축의 선유드림_Sunyudream입니다   
            은은한 달빛처럼 포근한 숙소에서 연인과 함께, 친구와 함께,  또는 세상에서 가장 소중한 나만을 위해  
            아름다운 힐링 플레이스를 경험하세요:)   저희 선유드림은 푹신하고 포근한 침대에서 42인치 TV로  밤새 넷플릭싱 하기 좋은 최적의 숙소입니다~   
            바람 좋은 옥상 하늘정원에서 한강을 볼 수도 있고요 햇살좋은 날에는 선유도 공원까지 한 걸음에 갈 수도 있답니다   내 집보다 더 편하고 포근한 선유드림이 
            고단한 일상에서 단비같은 곳이 될께요 게스트분에게 특별한 경험이 되기를  바라는 마음입니다^^   푹신한 라텍스 매트리스와 호텔 침구류에서 
            편안하고 특별한 시간이 되시길 바랍니다   도보10분 이내에  예쁜 브런치카페, 하이볼 맛집,편의점,슈퍼,약국, 다이소 등  다양한 편의 시설이 있습니다
            `,
            convenience : [
                {con : "계곡 전망"},
                {con : "산 전망"},
                {con : "무선 인터넷"},
                {con : "45인치 HDTV + 프리미엄 케이블 TV"},
                {con : "건물 내 무료 주차"},
                {con : "전용 야외 수영장 - 연중 언제든 예약가능,\n특정 시간대만 이용 가능, 수영장 덮개, 온수"},
            ],
            convenienceIcon : [
                {icon : "picture"},
                {icon : "picture"},
                {icon : "wifi"},
                {icon : "tv"},
                {icon : "car"},
                {icon : "pool"},
            ],
        },
        {
            id : "6",
            cate : "coolPool",
            img : [
                "./images/pages/search/main/cardList/_6_/0d851182-a3d2-40c7-81ae-dbaf5bdda844.jpg",
                "./images/pages/search/main/cardList/_6_/2f9f88d5-69ca-4953-940a-50aeefa06874.jpg",
                "./images/pages/search/main/cardList/_6_/3e5e6e3f-e54c-4ee6-af3a-d698d3ce4b05.jpg",
                "./images/pages/search/main/cardList/_6_/409dbc9f-c6c5-4170-a395-77377102d082.jpg",
                "./images/pages/search/main/cardList/_6_/5b499977-3cab-4c82-8a41-005412ebd531.jpg",
                "./images/pages/search/main/cardList/_6_/765c42db-1bd5-4546-8659-9ffb32c81e14.jpg",
                "./images/pages/search/main/cardList/_6_/8417caef-7e51-4a30-a96a-371a5ba43667.jpg",
                "./images/pages/search/main/cardList/_6_/8698f700-a4a5-43e6-9c89-7a35cf539660.jpg",
                "./images/pages/search/main/cardList/_6_/92804026-a2c2-45d6-b531-c01e9e8af832.jpg",
                "./images/pages/search/main/cardList/_6_/9923cff2-391a-43fe-a3d6-aac26b99ae28.jpg",
                "./images/pages/search/main/cardList/_6_/a8995031-ebb2-43eb-92f3-d66ef87f5cfd.jpg",
                "./images/pages/search/main/cardList/_6_/a8e555fa-6ce4-4533-a4b0-923e09b4f798.jpg",
                "./images/pages/search/main/cardList/_6_/af4ac2cd-17e8-4f93-afe0-d26ec221ab6c.jpg",
                "./images/pages/search/main/cardList/_6_/b4da9eca-a0d1-4be6-a7e0-5b6cdf8a5c06.jpg",
                "./images/pages/search/main/cardList/_6_/b8809bb5-2450-442d-a99c-30664e0bb5ce.jpg",
                "./images/pages/search/main/cardList/_6_/b9ce64a3-65c8-4117-b88a-e6dd3a91982b.jpg",
                "./images/pages/search/main/cardList/_6_/c7d5c42a-aee8-41a3-8c8f-b30694452891.jpg",
                "./images/pages/search/main/cardList/_6_/ccfd6c27-581f-42a7-930e-3f4f3c5bd68c.jpg",
                "./images/pages/search/main/cardList/_6_/cec04e60-a3e6-4bb8-862b-49209e32ddbd.jpg",
                "./images/pages/search/main/cardList/_6_/d447c71b-890f-410c-af2d-e35086a99f43.jpg",
                "./images/pages/search/main/cardList/_6_/d6e63671-40ee-466c-8a4f-f0fed4db5333.jpg",
                "./images/pages/search/main/cardList/_6_/d8603f7c-9bef-4def-a797-e70c9ae20a8d.jpg",
                "./images/pages/search/main/cardList/_6_/d9a9dfeb-0887-43b5-a4b9-43d11afa483f.jpg",
                "./images/pages/search/main/cardList/_6_/df4557ec-dfda-4dc7-8c9b-34997fc8501d.jpg",
                "./images/pages/search/main/cardList/_6_/e0c015b6-c6a3-4b56-b582-1fe7bda15a22.jpg",
                "./images/pages/search/main/cardList/_6_/e561fd4d-f1af-4eeb-81d3-e168f87ba0f0.jpg",
                "./images/pages/search/main/cardList/_6_/f2c7efc9-3c79-4ab2-ac36-ef6f00fac5ea.jpg",
                "./images/pages/search/main/cardList/_6_/f35df218-439d-4acd-86ff-fc24d19171bb.jpg",
                "./images/pages/search/main/cardList/_6_/fb5b495f-0510-490d-831b-37db6a810a9b.jpg",
                "./images/pages/search/main/cardList/_6_/ff359b9d-8c15-4890-9ed4-206ebb10f31e.jpg",
            ],
            title : "한국 종로의 집",
            address : "서울 종로구",
            dayPrice : 150000,
            roomData : {
                maxUser : 5,
                bedroom : 4,
                bed : 3,
                bathroom : 4,
            },
            description: `아름다운 프리미엄 한옥스테이 '화운' 입니다. 
            북촌 한옥마을 삼청동에 위치하며 지리적 특성에 따라 창으로 북악산과 인왕산이 동시에 보이며 청와대, 삼청동길까지 한 눈에 보이는 대전경뷰를 가지고 있습니다.   
            - 프라이빗하게 독채 전부를 사용할 수 있습니다. - 야외 실외 자쿠지 이용 가능합니다 - 빔프로젝터로 넷플릭스 , TV , 유튜브 시청이 가능합니다. 
            - 조용한 동네로 음주가무 등 파티는 불가능합니다. - 주차 불가합니다 (모두의주차장이나 인근 유료주차장을 이용하셔야합니다) 
            - 숙소에 다칠 수 있는 위험요소가 많아 노키즈존으로 운영되고 있습니다.   - 삼성 비스포크 정수기 - 삼성 큐커(전자레인지, 에어프라이어, 토스터, 그릴) 
            - 펠로우 스태그 커피포트 - 삼성 비스크보 청소기 - 트롬 세탁기 - 다이슨 헤어드라이기 - 다이슨 선풍기 - 이솝 어메니티 - 제네바 블루투스 스피커 
            - 핸드드립 - 100인치 빔프로젝터 - 시몬스 매트리스 + 구스다운이불
            `,
            convenience : [
                {con : "계곡 전망"},
                {con : "산 전망"},
                {con : "무선 인터넷"},
                {con : "45인치 HDTV + 프리미엄 케이블 TV"},
                {con : "건물 내 무료 주차"},
                {con : "전용 야외 수영장 - 연중 언제든 예약가능,\n특정 시간대만 이용 가능, 수영장 덮개, 온수"},
            ],
            convenienceIcon : [
                {icon : "picture"},
                {icon : "picture"},
                {icon : "wifi"},
                {icon : "tv"},
                {icon : "car"},
                {icon : "pool"},
            ],
        },
        {
            id : "7",
            cate : "coolPool",
            img : [
                "./images/pages/search/main/cardList/_7_/02a2a40b-a46c-468a-a78b-6f841db169e6.jpg",
                "./images/pages/search/main/cardList/_7_/03fc3716-fc62-45db-9435-926f5d237084.jpg",
                "./images/pages/search/main/cardList/_7_/166b87cd-b487-4113-905a-67f4488e07d5.jpg",
                "./images/pages/search/main/cardList/_7_/262b2713-c299-4732-8dd6-8c4fcdb85529.jpg",
                "./images/pages/search/main/cardList/_7_/27117b15-1ba7-48ca-8102-b1d9f95de2da.jpg",
                "./images/pages/search/main/cardList/_7_/339f3b1c-d20c-48fc-a3d9-dfa9f4c2ee05.jpg",
                "./images/pages/search/main/cardList/_7_/4301b314-2774-4810-b4ff-bb9c2ac24675.jpg",
                "./images/pages/search/main/cardList/_7_/472347f9-b69f-491b-b6bf-397cce292563.jpg",
                "./images/pages/search/main/cardList/_7_/497b9d2c-0f11-4c4d-a5d7-e1a7e0825fe7.jpg",
                "./images/pages/search/main/cardList/_7_/543433fc-2e60-4267-ac0e-15df9f149a93.jpg",
                "./images/pages/search/main/cardList/_7_/599ec1a0-8832-4881-a4c5-ffa7526a86be.jpg",
                "./images/pages/search/main/cardList/_7_/5a46858f-14f7-466d-98a7-edb3d8060b49.jpg",
                "./images/pages/search/main/cardList/_7_/6add7d9f-b7ad-42dd-837b-6b5a26755335.jpg",
                "./images/pages/search/main/cardList/_7_/77b6a641-8066-4b76-a1ce-61a9032561f9.jpg",
                "./images/pages/search/main/cardList/_7_/c161de90-948f-4be7-a32d-3fc26c8ee456.jpg",
                "./images/pages/search/main/cardList/_7_/c6072af6-d922-4e73-a2ac-b44d9a74ed38.jpg",
                "./images/pages/search/main/cardList/_7_/db1e4472-4211-497c-8100-7c0ed2746506.jpg",
                "./images/pages/search/main/cardList/_7_/ddca6844-8ced-49b0-b0c8-5e778130b711.jpg",
                "./images/pages/search/main/cardList/_7_/f6cd9972-f7e2-4ee4-a60d-d82782a2cc14.jpg",
                "./images/pages/search/main/cardList/_7_/f7a229e3-3ffd-40b9-9045-1b5d43c45a37.jpg",
                "./images/pages/search/main/cardList/_7_/fda64d4b-77a9-4272-992e-1d7b16d08778.jpg",
                "./images/pages/search/main/cardList/_7_/fe687072-dc10-4846-9aa2-a1b0efecd779.jpg",
            ],
            title : "송파구 공동 주택",
            address : "서울 송파구",
            dayPrice : 150000364,
            roomData : {
                maxUser : 2,
                bedroom : 4,
                bed : 3,
                bathroom : 4,
            },
            description: ` 집에 가져온 카페처럼 [서울 더레이크] 에 오신 것을 환영합니다.  
            석촌호수와 롯데타워, 롯데월드가 내려다 보이는 나만의 공간에서 여유로운 휴식을 즐겨보세요~  
            밤이되어 타워와 롯데월드에 조명이 켜지는 광경을 방안에 지켜보면 정말 멋있답니다~  
            바로 앞에 석촌호수가 있어 산책하기에 좋고 건물1층 편의점, 송리단길, 먹자골목을 비롯해 롯데월드타워, 베이글 뮤지엄 등 잠실 주변 맛집들이 많습니다~  
            편안한 잠자리를 위해 침구에 특별히 신경을 많이 썼습니다~ 이불도 구스이불이라 가볍고 포근해요~  
            예약은 성인 최대 2인까지만 가능하며 뷰멍 때리며 조용히 쉬다가시고픈 분들 환영합니다~  
            오시면 직접 느끼시겠지만 공간이 조용합니다~ 이웃분들이 모두 서로 배려하며 지내고 있기 때문인데요~ 그래서 이 공간을 함께 배려해주실 수 있는 분들을 기다리고 있습니다~  
            구비되어 있는 품목들과 교통편 등 궁금하실 사항들을 정리해봤으니 잘 읽어봐주세요~  감사합니다🤗
            `,
            convenience : [
                {con : "계곡 전망"},
                {con : "산 전망"},
                {con : "무선 인터넷"},
                {con : "45인치 HDTV + 프리미엄 케이블 TV"},
                {con : "건물 내 무료 주차"},
                {con : "전용 야외 수영장 - 연중 언제든 예약가능,\n특정 시간대만 이용 가능, 수영장 덮개, 온수"},
            ],
            convenienceIcon : [
                {icon : "picture"},
                {icon : "picture"},
                {icon : "wifi"},
                {icon : "tv"},
                {icon : "car"},
                {icon : "pool"},
            ],
        },
        {
            id : "8",
            cate : "coolPool",
            img : [
                "./images/pages/search/main/cardList/_8_/02210471-d4ae-4815-83a6-545281423421.jpg",
                "./images/pages/search/main/cardList/_8_/186832aa-9387-4f96-b7a5-479c0ca4c0b1.jpg",
                "./images/pages/search/main/cardList/_8_/1aab396f-5e04-4f63-a81b-29652f049c09.jpg",
                "./images/pages/search/main/cardList/_8_/2a74a00a-1b2f-4a14-bd45-bd34082279ac.jpg",
                "./images/pages/search/main/cardList/_8_/2f653a4c-f416-459a-8540-b27261493c66.jpg",
                "./images/pages/search/main/cardList/_8_/3f1136b1-0044-43c1-866c-90644217a547.jpg",
                "./images/pages/search/main/cardList/_8_/3f578a02-caf3-4c91-b2fc-258e8249590f.jpg",
                "./images/pages/search/main/cardList/_8_/439c3a1d-8b0e-4803-8172-095e4e3e9ac3.jpg",
                "./images/pages/search/main/cardList/_8_/43ee9401-bb07-4e02-a4c5-9e3a93e640cf.jpg",
                "./images/pages/search/main/cardList/_8_/4d3051ff-fd52-4a6a-8142-8230c2ddaea8.jpg",
                "./images/pages/search/main/cardList/_8_/526fa24d-7899-4091-b141-d4f0cb6590df.jpg",
                "./images/pages/search/main/cardList/_8_/6212725f-5294-4aee-9622-b2517860b3b6.jpg",
                "./images/pages/search/main/cardList/_8_/652ae5d4-b00c-40ae-ba7e-59661ea547ea.jpg",
                "./images/pages/search/main/cardList/_8_/67f8ad0e-b926-41db-bdd4-a1072ee6dd4c.jpg",
                "./images/pages/search/main/cardList/_8_/72e4d8fe-3d1c-4759-b26c-b9f5b8089243.jpg",
                "./images/pages/search/main/cardList/_8_/7d6f7398-4e53-4793-94a0-55847134443b.jpg",
                "./images/pages/search/main/cardList/_8_/83156fe9-12e5-48d8-8710-7fe36ef301e5.jpg",
                "./images/pages/search/main/cardList/_8_/ab0fd93e-d342-4f9e-af37-49d60c5e3860.jpg",
                "./images/pages/search/main/cardList/_8_/ae589f05-767e-46d0-90f3-33f6b952087c.jpg",
                "./images/pages/search/main/cardList/_8_/b0de177b-6a42-486b-8a6c-e07a55528f86.jpg",
                "./images/pages/search/main/cardList/_8_/b32d2d16-4fed-4bc2-87c3-ed173fa59811.jpg",
                "./images/pages/search/main/cardList/_8_/b69fdac1-33fe-4eb4-b3c5-890db47e7241.jpg",
                "./images/pages/search/main/cardList/_8_/c48a01eb-2336-499e-9cd3-d19de67970d8.jpg",
                "./images/pages/search/main/cardList/_8_/c5254236-525e-474a-a0fc-77e9a77a27ec.jpg",
                "./images/pages/search/main/cardList/_8_/e40b9c1d-65ce-480f-925d-9d2889c22354.jpg",
                "./images/pages/search/main/cardList/_8_/e8c98262-fdf6-4a1f-a694-e34205d65108.jpg",
                "./images/pages/search/main/cardList/_8_/f183e814-b72f-4584-8555-71806f151ad4.jpg",
                "./images/pages/search/main/cardList/_8_/f68d16e2-eb8f-457f-8055-1fe60915f896.jpg",
                "./images/pages/search/main/cardList/_8_/fc6cd2e4-040b-4767-960e-62b4bd34edcf.jpg",
            ],
            title : "서대문구 창천동",
            address : "서울 서대문구",
            dayPrice : 15013135000,
            roomData : {
                maxUser : 2,
                bedroom : 4,
                bed : 3,
                bathroom : 4,
            },
            description: `*저의 숙소는 서울특별시 서대문구 창천동에 위치 해있습니다* 저희 숙소는 귀여움과 안전!깔끔함 !편의 그리고 감각까지 모두 갖춘 분위기 있는 공간입니다~ 
            넷플릭스와 각종 ott를 영화같이 즐길 수 있는 빔프로젝터도 준비되어있습니다 *사진에서 보이는 예쁜 조명들도 저희 베어스테이에 머무시면서  
            예쁜 사진을 남길 수 있도록 여러분들께 제공됩니다~^^* (조명 맛집이에요~ㅎㅎ) *저희 숙소는 2층입니다*  
            만약 예약 하고싶으신 날짜에 예약이 불가능하다면 다른 방도 준비되어있습니다~~!저희에게 다른방이 보고싶다고 연락주시면 아래 링크를 메세지로 보내드립니다!!.( 숙소의 인테리어 컨셉만 다를뿐 위치  층수 모두 동일합니다) 
            https://www.airbnb.co.kr/h/105hohouse
            `,
            convenience : [
                {con : "계곡 전망"},
                {con : "산 전망"},
                {con : "무선 인터넷"},
                {con : "45인치 HDTV + 프리미엄 케이블 TV"},
                {con : "건물 내 무료 주차"},
                {con : "전용 야외 수영장 - 연중 언제든 예약가능,\n특정 시간대만 이용 가능, 수영장 덮개, 온수"},
            ],
            convenienceIcon : [
                {icon : "picture"},
                {icon : "picture"},
                {icon : "wifi"},
                {icon : "tv"},
                {icon : "car"},
                {icon : "pool"},
            ],
        },
        {
            id : "9",
            cate : "coolPool",
            img : [
                "./images/pages/search/main/cardList/_9_/07bb2749-fe24-4c1b-98cf-aaa9f74d6bb0.jpg",
                "./images/pages/search/main/cardList/_9_/21604f31-4b7f-47ae-ad93-9268439f052c.jpg",
                "./images/pages/search/main/cardList/_9_/3ff71f01-ced5-4d02-858c-b3bcb05c2f60.jpg",
                "./images/pages/search/main/cardList/_9_/56b45bb0-aab1-4c8f-b31f-4fd043480bc6.jpg",
                "./images/pages/search/main/cardList/_9_/5ed90276-a511-47fe-9792-f8aa92782239.jpg",
                "./images/pages/search/main/cardList/_9_/850d9f8b_original.jpg",
                "./images/pages/search/main/cardList/_9_/93084458-6ab0-43d6-8a98-33055fe7ac99.jpg",
                "./images/pages/search/main/cardList/_9_/bd1f23d7-b125-46a4-847f-0e69969d72b8.jpg",
                "./images/pages/search/main/cardList/_9_/bebf2bf2-d7aa-4381-bf41-939b79473652.jpg",
                "./images/pages/search/main/cardList/_9_/c853a072-7c59-41a0-b5bc-e9ebddc9e7b4.jpg",
                "./images/pages/search/main/cardList/_9_/dabd55fa-6aae-4fdc-90be-94926aa796e9.jpg",
                "./images/pages/search/main/cardList/_9_/df6f23d5-7ca4-449e-b9d8-9b4090692ea5.jpg",
                "./images/pages/search/main/cardList/_9_/e4789ed4-8918-414b-9da1-0ccb04587b5e.jpg",
                "./images/pages/search/main/cardList/_9_/edbba533-3573-4e69-a30f-6a9b41fc5a13.jpg",
                "./images/pages/search/main/cardList/_9_/edf616aa-ffaa-461f-b871-d7d936e9058b.jpg",
                "./images/pages/search/main/cardList/_9_/ee61e74f-deb0-4f41-b015-9c4781eed019.jpg",
                "./images/pages/search/main/cardList/_9_/f31a1da0-eae3-4d2d-afe6-e52873943681.jpg",
                "./images/pages/search/main/cardList/_9_/f3c7af50-69ff-487a-a064-15ff20f18b85.jpg",
                "./images/pages/search/main/cardList/_9_/faf68d47-0be9-4f4a-9007-c6d2c779b666.jpg",
            ],
            title : "강원도 영월",
            address : "강원도 영월",
            dayPrice : 1500,
            roomData : {
                maxUser : 2,
                bedroom : 4,
                bed : 3,
                bathroom : 4,
            },
            description: `영월의 스테이하우스는 커플이 프라이빗하게 쉬기 좋은 객실입니다.   
            별도의 출입문 계단이 있는 2층 전체를 사용합니다. 
            창밖으로 보이는 주변 뷰와 예쁜 정원이 아름답고, 창밖으로 들리는 계곡물소리와 지저귀는 새소리 그리고 맑은 공기는 도시에서 지친 마음에 휴식을 주며,
            매일 청결하게 관리하는 침구는 편안한 잠자리를 제공합니다.  김삿갓계곡의 외씨버선길과 가깝고 숙소 바로 앞에는 아름다운 계곡이 흐르고 있습니다. 
            객실에서는 넷플릭스 및 Marshall 스피커로 감미로운 음악과 함께 빔 프로젝터로 보다 실감나고 편하게 영화를 감상하실 수 있으며, 
            해질녘에는 아름다운 정원의 해먹에 누워 자연속에서 재충전의 시간을 가져보세요~ 
            + 예약가능인원: 성인 2명(영월 스테이하우스는 노키즈존으로 운영됩니다.)
            `,
            convenience : [
                {con : "계곡 전망"},
                {con : "산 전망"},
                {con : "무선 인터넷"},
                {con : "45인치 HDTV + 프리미엄 케이블 TV"},
                {con : "건물 내 무료 주차"},
                {con : "전용 야외 수영장 - 연중 언제든 예약가능,\n특정 시간대만 이용 가능, 수영장 덮개, 온수"},
            ],
            convenienceIcon : [
                {icon : "picture"},
                {icon : "picture"},
                {icon : "wifi"},
                {icon : "tv"},
                {icon : "car"},
                {icon : "pool"},
            ],
        },
        {
            id : "10",
            cate : "coolPool",
            img : [
                "./images/pages/search/main/cardList/_10_/397b7f94-0965-461a-b515-bc9e21794c70.jpg",
                "./images/pages/search/main/cardList/_10_/3fb44357-f537-4f3f-ad28-fb512b548cfb.jpg",
                "./images/pages/search/main/cardList/_10_/4d0bde17-bae7-4e4a-9ff0-3e3596d39088.jpg",
                "./images/pages/search/main/cardList/_10_/5245d23e-703f-42d9-8df6-4721f059845d.jpg",
                "./images/pages/search/main/cardList/_10_/5ef6cdd6-ad17-4d01-820a-922a8a6dfed8.jpg",
                "./images/pages/search/main/cardList/_10_/a49b8ba9-37f8-4f97-b62e-9f2d85f01e23.jpg",
                "./images/pages/search/main/cardList/_10_/a58c07cf-c439-40f3-8ecb-e7cce6f4ff81.jpg",
                "./images/pages/search/main/cardList/_10_/b40b7307-78fd-4b0a-b537-80914b13e7df.jpg",
                "./images/pages/search/main/cardList/_10_/b6563b72-5504-4371-aa2f-496edb82f150.jpg",
                "./images/pages/search/main/cardList/_10_/b6c640af-5aae-467c-abaf-df0d0fd9a072.jpg",
                "./images/pages/search/main/cardList/_10_/bc28d488-7ced-4c1f-9e72-c2101d18be2a.jpg",
                "./images/pages/search/main/cardList/_10_/c86063fd-eb5a-4131-b626-bece519a586b.jpg",
                "./images/pages/search/main/cardList/_10_/d024d822-441d-4fd8-afb2-5fa607f22f6a.jpg",
                "./images/pages/search/main/cardList/_10_/d1a9f2b5-cde2-4a91-a76d-b0881867b117.jpg",
                "./images/pages/search/main/cardList/_10_/da84e4da-336f-414c-8ee6-c3cd4dcd7355.jpg",
                "./images/pages/search/main/cardList/_10_/ebd57f70-d870-456c-bbe5-aafed01b56d9.jpg",
                "./images/pages/search/main/cardList/_10_/f758eb0e-5928-4949-a9b1-3f99d2632513.jpg",
            ],
            title : "강원도 강릉",
            address : "강원도 강릉",
            dayPrice : 124560000,
            roomData : {
                maxUser : 2,
                bedroom : 4,
                bed : 3,
                bathroom : 4,
            },
            description: `이 독특한 숙소는 개성 넘치는 스타일을 자랑합니다.  
            숙소 교동의 조용한 주택가에 위치한 숙소입니다 
            2층전체를 이용합니다 아랫층 분들 배려해 실내화 착화 및 10시 이후 정숙해 주세요  기타 주의사항 분리수거 설거지 
            냄새가 심하거나 기름이 많이튀는 음식 조리불가;삼겹살,스테이크,매운탕 등 🚭실내절대금연  
            `,
            convenience : [
                {con : "계곡 전망"},
                {con : "산 전망"},
                {con : "무선 인터넷"},
                {con : "45인치 HDTV + 프리미엄 케이블 TV"},
                {con : "건물 내 무료 주차"},
                {con : "전용 야외 수영장 - 연중 언제든 예약가능,\n특정 시간대만 이용 가능, 수영장 덮개, 온수"},
            ],
            convenienceIcon : [
                {icon : "picture"},
                {icon : "picture"},
                {icon : "wifi"},
                {icon : "tv"},
                {icon : "car"},
                {icon : "pool"},
            ],
        },
        {
            id : "11",
            cate : "coolPool",
            img : [
                "./images/pages/search/main/cardList/_11_/0c862c16-5fa9-4fca-80b2-2f4941dba801.jpg",
                "./images/pages/search/main/cardList/_11_/270dd3af-0c38-43fd-b2b0-467e6f2bc508.jpg",
                "./images/pages/search/main/cardList/_11_/6795f572-c2a1-4bbc-a66f-39124a97e4e8.jpg",
                "./images/pages/search/main/cardList/_11_/6ee4733a-91d4-4dc1-a63c-964586853fc9.jpg",
                "./images/pages/search/main/cardList/_11_/718e75ab-ce73-430e-9354-ffa5d2224132.jpg",
                "./images/pages/search/main/cardList/_11_/86fbcbce-f1ce-49ef-afb6-2e82c14a4316.jpg",
                "./images/pages/search/main/cardList/_11_/8abcd419-96aa-4971-a7fd-abfd4203d007.jpg",
                "./images/pages/search/main/cardList/_11_/8d71f5a3-145d-4c23-8d4d-f0577ff8039e.jpg",
                "./images/pages/search/main/cardList/_11_/b4dae24d-b019-49b9-9bb4-1825e4a5aca6.jpg",
                "./images/pages/search/main/cardList/_11_/b7edb368-506f-4764-8abf-593c60d55c40.jpg",
                "./images/pages/search/main/cardList/_11_/baf28f62-62ce-4035-adc3-116cc11e40be.jpg",
            ],
            title : "강원도 강릉 강문동",
            address : "강원도 강릉 강문동",
            dayPrice : 1500000,
            roomData : {
                maxUser : 2,
                bedroom : 4,
                bed : 3,
                bathroom : 4,
            },
            description: `세인트존스 경포호텔은 강문해변 앞에 위치해있으며, 오션뷰 객실로 시원한 동해 바다와 소나무를 함께 보실 수 있습니다.   
            숙소 바로 앞에 해변가를 따라 소나무 길이 위치해 있어 거리를 산책하며 청정 자연을 만끽할 수 있습니다.   
            호텔 주변에는 경포대와 최근 인기가 많아진 카페거리가 위아래로 인접해 있으며, 동해바다와 소나무를 따라 펼처진 해안도로는 드라이브의 운치를 더해줍니다.   
            행복하고 잊지 못할 추억을 만들어가세요 :)  
            `,
            convenience : [
                {con : "계곡 전망"},
                {con : "산 전망"},
                {con : "무선 인터넷"},
                {con : "45인치 HDTV + 프리미엄 케이블 TV"},
                {con : "건물 내 무료 주차"},
                {con : "전용 야외 수영장 - 연중 언제든 예약가능,\n특정 시간대만 이용 가능, 수영장 덮개, 온수"},
            ],
            convenienceIcon : [
                {icon : "picture"},
                {icon : "picture"},
                {icon : "wifi"},
                {icon : "tv"},
                {icon : "car"},
                {icon : "pool"},
            ],
        },
        {
            id : "11",
            cate : "coolPool",
            img : [
                "./images/pages/search/main/cardList/_11_/0c862c16-5fa9-4fca-80b2-2f4941dba801.jpg",
                "./images/pages/search/main/cardList/_11_/270dd3af-0c38-43fd-b2b0-467e6f2bc508.jpg",
                "./images/pages/search/main/cardList/_11_/6795f572-c2a1-4bbc-a66f-39124a97e4e8.jpg",
                "./images/pages/search/main/cardList/_11_/6ee4733a-91d4-4dc1-a63c-964586853fc9.jpg",
                "./images/pages/search/main/cardList/_11_/718e75ab-ce73-430e-9354-ffa5d2224132.jpg",
                "./images/pages/search/main/cardList/_11_/86fbcbce-f1ce-49ef-afb6-2e82c14a4316.jpg",
                "./images/pages/search/main/cardList/_11_/8abcd419-96aa-4971-a7fd-abfd4203d007.jpg",
                "./images/pages/search/main/cardList/_11_/8d71f5a3-145d-4c23-8d4d-f0577ff8039e.jpg",
                "./images/pages/search/main/cardList/_11_/b4dae24d-b019-49b9-9bb4-1825e4a5aca6.jpg",
                "./images/pages/search/main/cardList/_11_/b7edb368-506f-4764-8abf-593c60d55c40.jpg",
                "./images/pages/search/main/cardList/_11_/baf28f62-62ce-4035-adc3-116cc11e40be.jpg",
            ],
            title : "강원도 강릉 강문동",
            address : "강원도 강릉 강문동",
            dayPrice : 1500000,
            roomData : {
                maxUser : 2,
                bedroom : 4,
                bed : 3,
                bathroom : 4,
            },
            description: `세인트존스 경포호텔은 강문해변 앞에 위치해있으며, 오션뷰 객실로 시원한 동해 바다와 소나무를 함께 보실 수 있습니다.   
            숙소 바로 앞에 해변가를 따라 소나무 길이 위치해 있어 거리를 산책하며 청정 자연을 만끽할 수 있습니다.   
            호텔 주변에는 경포대와 최근 인기가 많아진 카페거리가 위아래로 인접해 있으며, 동해바다와 소나무를 따라 펼처진 해안도로는 드라이브의 운치를 더해줍니다.   
            행복하고 잊지 못할 추억을 만들어가세요 :)  
            `,
            convenience : [
                {con : "계곡 전망"},
                {con : "산 전망"},
                {con : "무선 인터넷"},
                {con : "45인치 HDTV + 프리미엄 케이블 TV"},
                {con : "건물 내 무료 주차"},
                {con : "전용 야외 수영장 - 연중 언제든 예약가능,\n특정 시간대만 이용 가능, 수영장 덮개, 온수"},
            ],
            convenienceIcon : [
                {icon : "picture"},
                {icon : "picture"},
                {icon : "wifi"},
                {icon : "tv"},
                {icon : "car"},
                {icon : "pool"},
            ],
        },
        {
            id : "11",
            cate : "coolPool",
            img : [
                "./images/pages/search/main/cardList/_11_/0c862c16-5fa9-4fca-80b2-2f4941dba801.jpg",
                "./images/pages/search/main/cardList/_11_/270dd3af-0c38-43fd-b2b0-467e6f2bc508.jpg",
                "./images/pages/search/main/cardList/_11_/6795f572-c2a1-4bbc-a66f-39124a97e4e8.jpg",
                "./images/pages/search/main/cardList/_11_/6ee4733a-91d4-4dc1-a63c-964586853fc9.jpg",
                "./images/pages/search/main/cardList/_11_/718e75ab-ce73-430e-9354-ffa5d2224132.jpg",
                "./images/pages/search/main/cardList/_11_/86fbcbce-f1ce-49ef-afb6-2e82c14a4316.jpg",
                "./images/pages/search/main/cardList/_11_/8abcd419-96aa-4971-a7fd-abfd4203d007.jpg",
                "./images/pages/search/main/cardList/_11_/8d71f5a3-145d-4c23-8d4d-f0577ff8039e.jpg",
                "./images/pages/search/main/cardList/_11_/b4dae24d-b019-49b9-9bb4-1825e4a5aca6.jpg",
                "./images/pages/search/main/cardList/_11_/b7edb368-506f-4764-8abf-593c60d55c40.jpg",
                "./images/pages/search/main/cardList/_11_/baf28f62-62ce-4035-adc3-116cc11e40be.jpg",
            ],
            title : "강원도 강릉 강문동",
            address : "강원도 강릉 강문동",
            dayPrice : 1500000,
            roomData : {
                maxUser : 2,
                bedroom : 4,
                bed : 3,
                bathroom : 4,
            },
            description: `세인트존스 경포호텔은 강문해변 앞에 위치해있으며, 오션뷰 객실로 시원한 동해 바다와 소나무를 함께 보실 수 있습니다.   
            숙소 바로 앞에 해변가를 따라 소나무 길이 위치해 있어 거리를 산책하며 청정 자연을 만끽할 수 있습니다.   
            호텔 주변에는 경포대와 최근 인기가 많아진 카페거리가 위아래로 인접해 있으며, 동해바다와 소나무를 따라 펼처진 해안도로는 드라이브의 운치를 더해줍니다.   
            행복하고 잊지 못할 추억을 만들어가세요 :)  
            `,
            convenience : [
                {con : "계곡 전망"},
                {con : "산 전망"},
                {con : "무선 인터넷"},
                {con : "45인치 HDTV + 프리미엄 케이블 TV"},
                {con : "건물 내 무료 주차"},
                {con : "전용 야외 수영장 - 연중 언제든 예약가능,\n특정 시간대만 이용 가능, 수영장 덮개, 온수"},
            ],
            convenienceIcon : [
                {icon : "picture"},
                {icon : "picture"},
                {icon : "wifi"},
                {icon : "tv"},
                {icon : "car"},
                {icon : "pool"},
            ],
        },
        {
            id : "11",
            cate : "coolPool",
            img : [
                "./images/pages/search/main/cardList/_11_/0c862c16-5fa9-4fca-80b2-2f4941dba801.jpg",
                "./images/pages/search/main/cardList/_11_/270dd3af-0c38-43fd-b2b0-467e6f2bc508.jpg",
                "./images/pages/search/main/cardList/_11_/6795f572-c2a1-4bbc-a66f-39124a97e4e8.jpg",
                "./images/pages/search/main/cardList/_11_/6ee4733a-91d4-4dc1-a63c-964586853fc9.jpg",
                "./images/pages/search/main/cardList/_11_/718e75ab-ce73-430e-9354-ffa5d2224132.jpg",
                "./images/pages/search/main/cardList/_11_/86fbcbce-f1ce-49ef-afb6-2e82c14a4316.jpg",
                "./images/pages/search/main/cardList/_11_/8abcd419-96aa-4971-a7fd-abfd4203d007.jpg",
                "./images/pages/search/main/cardList/_11_/8d71f5a3-145d-4c23-8d4d-f0577ff8039e.jpg",
                "./images/pages/search/main/cardList/_11_/b4dae24d-b019-49b9-9bb4-1825e4a5aca6.jpg",
                "./images/pages/search/main/cardList/_11_/b7edb368-506f-4764-8abf-593c60d55c40.jpg",
                "./images/pages/search/main/cardList/_11_/baf28f62-62ce-4035-adc3-116cc11e40be.jpg",
            ],
            title : "강원도 강릉 강문동",
            address : "강원도 강릉 강문동",
            dayPrice : 1500000,
            roomData : {
                maxUser : 2,
                bedroom : 4,
                bed : 3,
                bathroom : 4,
            },
            description: `세인트존스 경포호텔은 강문해변 앞에 위치해있으며, 오션뷰 객실로 시원한 동해 바다와 소나무를 함께 보실 수 있습니다.   
            숙소 바로 앞에 해변가를 따라 소나무 길이 위치해 있어 거리를 산책하며 청정 자연을 만끽할 수 있습니다.   
            호텔 주변에는 경포대와 최근 인기가 많아진 카페거리가 위아래로 인접해 있으며, 동해바다와 소나무를 따라 펼처진 해안도로는 드라이브의 운치를 더해줍니다.   
            행복하고 잊지 못할 추억을 만들어가세요 :)  
            `,
            convenience : [
                {con : "계곡 전망"},
                {con : "산 전망"},
                {con : "무선 인터넷"},
                {con : "45인치 HDTV + 프리미엄 케이블 TV"},
                {con : "건물 내 무료 주차"},
                {con : "전용 야외 수영장 - 연중 언제든 예약가능,\n특정 시간대만 이용 가능, 수영장 덮개, 온수"},
            ],
            convenienceIcon : [
                {icon : "picture"},
                {icon : "picture"},
                {icon : "wifi"},
                {icon : "tv"},
                {icon : "car"},
                {icon : "pool"},
            ],
        },
        {
            id : "11",
            cate : "coolPool",
            img : [
                "./images/pages/search/main/cardList/_11_/0c862c16-5fa9-4fca-80b2-2f4941dba801.jpg",
                "./images/pages/search/main/cardList/_11_/270dd3af-0c38-43fd-b2b0-467e6f2bc508.jpg",
                "./images/pages/search/main/cardList/_11_/6795f572-c2a1-4bbc-a66f-39124a97e4e8.jpg",
                "./images/pages/search/main/cardList/_11_/6ee4733a-91d4-4dc1-a63c-964586853fc9.jpg",
                "./images/pages/search/main/cardList/_11_/718e75ab-ce73-430e-9354-ffa5d2224132.jpg",
                "./images/pages/search/main/cardList/_11_/86fbcbce-f1ce-49ef-afb6-2e82c14a4316.jpg",
                "./images/pages/search/main/cardList/_11_/8abcd419-96aa-4971-a7fd-abfd4203d007.jpg",
                "./images/pages/search/main/cardList/_11_/8d71f5a3-145d-4c23-8d4d-f0577ff8039e.jpg",
                "./images/pages/search/main/cardList/_11_/b4dae24d-b019-49b9-9bb4-1825e4a5aca6.jpg",
                "./images/pages/search/main/cardList/_11_/b7edb368-506f-4764-8abf-593c60d55c40.jpg",
                "./images/pages/search/main/cardList/_11_/baf28f62-62ce-4035-adc3-116cc11e40be.jpg",
            ],
            title : "강원도 강릉 강문동",
            address : "강원도 강릉 강문동",
            dayPrice : 1500000,
            roomData : {
                maxUser : 2,
                bedroom : 4,
                bed : 3,
                bathroom : 4,
            },
            description: `세인트존스 경포호텔은 강문해변 앞에 위치해있으며, 오션뷰 객실로 시원한 동해 바다와 소나무를 함께 보실 수 있습니다.   
            숙소 바로 앞에 해변가를 따라 소나무 길이 위치해 있어 거리를 산책하며 청정 자연을 만끽할 수 있습니다.   
            호텔 주변에는 경포대와 최근 인기가 많아진 카페거리가 위아래로 인접해 있으며, 동해바다와 소나무를 따라 펼처진 해안도로는 드라이브의 운치를 더해줍니다.   
            행복하고 잊지 못할 추억을 만들어가세요 :)  
            `,
            convenience : [
                {con : "계곡 전망"},
                {con : "산 전망"},
                {con : "무선 인터넷"},
                {con : "45인치 HDTV + 프리미엄 케이블 TV"},
                {con : "건물 내 무료 주차"},
                {con : "전용 야외 수영장 - 연중 언제든 예약가능,\n특정 시간대만 이용 가능, 수영장 덮개, 온수"},
            ],
            convenienceIcon : [
                {icon : "picture"},
                {icon : "picture"},
                {icon : "wifi"},
                {icon : "tv"},
                {icon : "car"},
                {icon : "pool"},
            ],
        },
        {
            id : "11",
            cate : "coolPool",
            img : [
                "./images/pages/search/main/cardList/_11_/0c862c16-5fa9-4fca-80b2-2f4941dba801.jpg",
                "./images/pages/search/main/cardList/_11_/270dd3af-0c38-43fd-b2b0-467e6f2bc508.jpg",
                "./images/pages/search/main/cardList/_11_/6795f572-c2a1-4bbc-a66f-39124a97e4e8.jpg",
                "./images/pages/search/main/cardList/_11_/6ee4733a-91d4-4dc1-a63c-964586853fc9.jpg",
                "./images/pages/search/main/cardList/_11_/718e75ab-ce73-430e-9354-ffa5d2224132.jpg",
                "./images/pages/search/main/cardList/_11_/86fbcbce-f1ce-49ef-afb6-2e82c14a4316.jpg",
                "./images/pages/search/main/cardList/_11_/8abcd419-96aa-4971-a7fd-abfd4203d007.jpg",
                "./images/pages/search/main/cardList/_11_/8d71f5a3-145d-4c23-8d4d-f0577ff8039e.jpg",
                "./images/pages/search/main/cardList/_11_/b4dae24d-b019-49b9-9bb4-1825e4a5aca6.jpg",
                "./images/pages/search/main/cardList/_11_/b7edb368-506f-4764-8abf-593c60d55c40.jpg",
                "./images/pages/search/main/cardList/_11_/baf28f62-62ce-4035-adc3-116cc11e40be.jpg",
            ],
            title : "강원도 강릉 강문동",
            address : "강원도 강릉 강문동",
            dayPrice : 1500000,
            roomData : {
                maxUser : 2,
                bedroom : 4,
                bed : 3,
                bathroom : 4,
            },
            description: `세인트존스 경포호텔은 강문해변 앞에 위치해있으며, 오션뷰 객실로 시원한 동해 바다와 소나무를 함께 보실 수 있습니다.   
            숙소 바로 앞에 해변가를 따라 소나무 길이 위치해 있어 거리를 산책하며 청정 자연을 만끽할 수 있습니다.   
            호텔 주변에는 경포대와 최근 인기가 많아진 카페거리가 위아래로 인접해 있으며, 동해바다와 소나무를 따라 펼처진 해안도로는 드라이브의 운치를 더해줍니다.   
            행복하고 잊지 못할 추억을 만들어가세요 :)  
            `,
            convenience : [
                {con : "계곡 전망"},
                {con : "산 전망"},
                {con : "무선 인터넷"},
                {con : "45인치 HDTV + 프리미엄 케이블 TV"},
                {con : "건물 내 무료 주차"},
                {con : "전용 야외 수영장 - 연중 언제든 예약가능,\n특정 시간대만 이용 가능, 수영장 덮개, 온수"},
            ],
            convenienceIcon : [
                {icon : "picture"},
                {icon : "picture"},
                {icon : "wifi"},
                {icon : "tv"},
                {icon : "car"},
                {icon : "pool"},
            ],
        },
        {
            id : "11",
            cate : "coolPool",
            img : [
                "./images/pages/search/main/cardList/_11_/0c862c16-5fa9-4fca-80b2-2f4941dba801.jpg",
                "./images/pages/search/main/cardList/_11_/270dd3af-0c38-43fd-b2b0-467e6f2bc508.jpg",
                "./images/pages/search/main/cardList/_11_/6795f572-c2a1-4bbc-a66f-39124a97e4e8.jpg",
                "./images/pages/search/main/cardList/_11_/6ee4733a-91d4-4dc1-a63c-964586853fc9.jpg",
                "./images/pages/search/main/cardList/_11_/718e75ab-ce73-430e-9354-ffa5d2224132.jpg",
                "./images/pages/search/main/cardList/_11_/86fbcbce-f1ce-49ef-afb6-2e82c14a4316.jpg",
                "./images/pages/search/main/cardList/_11_/8abcd419-96aa-4971-a7fd-abfd4203d007.jpg",
                "./images/pages/search/main/cardList/_11_/8d71f5a3-145d-4c23-8d4d-f0577ff8039e.jpg",
                "./images/pages/search/main/cardList/_11_/b4dae24d-b019-49b9-9bb4-1825e4a5aca6.jpg",
                "./images/pages/search/main/cardList/_11_/b7edb368-506f-4764-8abf-593c60d55c40.jpg",
                "./images/pages/search/main/cardList/_11_/baf28f62-62ce-4035-adc3-116cc11e40be.jpg",
            ],
            title : "강원도 강릉 강문동",
            address : "강원도 강릉 강문동",
            dayPrice : 1500000,
            roomData : {
                maxUser : 2,
                bedroom : 4,
                bed : 3,
                bathroom : 4,
            },
            description: `세인트존스 경포호텔은 강문해변 앞에 위치해있으며, 오션뷰 객실로 시원한 동해 바다와 소나무를 함께 보실 수 있습니다.   
            숙소 바로 앞에 해변가를 따라 소나무 길이 위치해 있어 거리를 산책하며 청정 자연을 만끽할 수 있습니다.   
            호텔 주변에는 경포대와 최근 인기가 많아진 카페거리가 위아래로 인접해 있으며, 동해바다와 소나무를 따라 펼처진 해안도로는 드라이브의 운치를 더해줍니다.   
            행복하고 잊지 못할 추억을 만들어가세요 :)  
            `,
            convenience : [
                {con : "계곡 전망"},
                {con : "산 전망"},
                {con : "무선 인터넷"},
                {con : "45인치 HDTV + 프리미엄 케이블 TV"},
                {con : "건물 내 무료 주차"},
                {con : "전용 야외 수영장 - 연중 언제든 예약가능,\n특정 시간대만 이용 가능, 수영장 덮개, 온수"},
            ],
            convenienceIcon : [
                {icon : "picture"},
                {icon : "picture"},
                {icon : "wifi"},
                {icon : "tv"},
                {icon : "car"},
                {icon : "pool"},
            ],
        },
        {
            id : "11",
            cate : "coolPool",
            img : [
                "./images/pages/search/main/cardList/_11_/0c862c16-5fa9-4fca-80b2-2f4941dba801.jpg",
                "./images/pages/search/main/cardList/_11_/270dd3af-0c38-43fd-b2b0-467e6f2bc508.jpg",
                "./images/pages/search/main/cardList/_11_/6795f572-c2a1-4bbc-a66f-39124a97e4e8.jpg",
                "./images/pages/search/main/cardList/_11_/6ee4733a-91d4-4dc1-a63c-964586853fc9.jpg",
                "./images/pages/search/main/cardList/_11_/718e75ab-ce73-430e-9354-ffa5d2224132.jpg",
                "./images/pages/search/main/cardList/_11_/86fbcbce-f1ce-49ef-afb6-2e82c14a4316.jpg",
                "./images/pages/search/main/cardList/_11_/8abcd419-96aa-4971-a7fd-abfd4203d007.jpg",
                "./images/pages/search/main/cardList/_11_/8d71f5a3-145d-4c23-8d4d-f0577ff8039e.jpg",
                "./images/pages/search/main/cardList/_11_/b4dae24d-b019-49b9-9bb4-1825e4a5aca6.jpg",
                "./images/pages/search/main/cardList/_11_/b7edb368-506f-4764-8abf-593c60d55c40.jpg",
                "./images/pages/search/main/cardList/_11_/baf28f62-62ce-4035-adc3-116cc11e40be.jpg",
            ],
            title : "강원도 강릉 강문동",
            address : "강원도 강릉 강문동",
            dayPrice : 1500000,
            roomData : {
                maxUser : 2,
                bedroom : 4,
                bed : 3,
                bathroom : 4,
            },
            description: `세인트존스 경포호텔은 강문해변 앞에 위치해있으며, 오션뷰 객실로 시원한 동해 바다와 소나무를 함께 보실 수 있습니다.   
            숙소 바로 앞에 해변가를 따라 소나무 길이 위치해 있어 거리를 산책하며 청정 자연을 만끽할 수 있습니다.   
            호텔 주변에는 경포대와 최근 인기가 많아진 카페거리가 위아래로 인접해 있으며, 동해바다와 소나무를 따라 펼처진 해안도로는 드라이브의 운치를 더해줍니다.   
            행복하고 잊지 못할 추억을 만들어가세요 :)  
            `,
            convenience : [
                {con : "계곡 전망"},
                {con : "산 전망"},
                {con : "무선 인터넷"},
                {con : "45인치 HDTV + 프리미엄 케이블 TV"},
                {con : "건물 내 무료 주차"},
                {con : "전용 야외 수영장 - 연중 언제든 예약가능,\n특정 시간대만 이용 가능, 수영장 덮개, 온수"},
            ],
            convenienceIcon : [
                {icon : "picture"},
                {icon : "picture"},
                {icon : "wifi"},
                {icon : "tv"},
                {icon : "car"},
                {icon : "pool"},
            ],
        },
        {
            id : "11",
            cate : "coolPool",
            img : [
                "./images/pages/search/main/cardList/_11_/0c862c16-5fa9-4fca-80b2-2f4941dba801.jpg",
                "./images/pages/search/main/cardList/_11_/270dd3af-0c38-43fd-b2b0-467e6f2bc508.jpg",
                "./images/pages/search/main/cardList/_11_/6795f572-c2a1-4bbc-a66f-39124a97e4e8.jpg",
                "./images/pages/search/main/cardList/_11_/6ee4733a-91d4-4dc1-a63c-964586853fc9.jpg",
                "./images/pages/search/main/cardList/_11_/718e75ab-ce73-430e-9354-ffa5d2224132.jpg",
                "./images/pages/search/main/cardList/_11_/86fbcbce-f1ce-49ef-afb6-2e82c14a4316.jpg",
                "./images/pages/search/main/cardList/_11_/8abcd419-96aa-4971-a7fd-abfd4203d007.jpg",
                "./images/pages/search/main/cardList/_11_/8d71f5a3-145d-4c23-8d4d-f0577ff8039e.jpg",
                "./images/pages/search/main/cardList/_11_/b4dae24d-b019-49b9-9bb4-1825e4a5aca6.jpg",
                "./images/pages/search/main/cardList/_11_/b7edb368-506f-4764-8abf-593c60d55c40.jpg",
                "./images/pages/search/main/cardList/_11_/baf28f62-62ce-4035-adc3-116cc11e40be.jpg",
            ],
            title : "강원도 강릉 강문동",
            address : "강원도 강릉 강문동",
            dayPrice : 1500000,
            roomData : {
                maxUser : 2,
                bedroom : 4,
                bed : 3,
                bathroom : 4,
            },
            description: `세인트존스 경포호텔은 강문해변 앞에 위치해있으며, 오션뷰 객실로 시원한 동해 바다와 소나무를 함께 보실 수 있습니다.   
            숙소 바로 앞에 해변가를 따라 소나무 길이 위치해 있어 거리를 산책하며 청정 자연을 만끽할 수 있습니다.   
            호텔 주변에는 경포대와 최근 인기가 많아진 카페거리가 위아래로 인접해 있으며, 동해바다와 소나무를 따라 펼처진 해안도로는 드라이브의 운치를 더해줍니다.   
            행복하고 잊지 못할 추억을 만들어가세요 :)  
            `,
            convenience : [
                {con : "계곡 전망"},
                {con : "산 전망"},
                {con : "무선 인터넷"},
                {con : "45인치 HDTV + 프리미엄 케이블 TV"},
                {con : "건물 내 무료 주차"},
                {con : "전용 야외 수영장 - 연중 언제든 예약가능,\n특정 시간대만 이용 가능, 수영장 덮개, 온수"},
            ],
            convenienceIcon : [
                {icon : "picture"},
                {icon : "picture"},
                {icon : "wifi"},
                {icon : "tv"},
                {icon : "car"},
                {icon : "pool"},
            ],
        },
    ];

    // CardList에서 클릭한 컴포넌트 MiniDetail에 띄우기 위한 상태(인덱스값)
    const [ clickCardListIndex, setClickCardListIndex ] = useState(0);

    // 상원씨가 보내준 쿼리스트링
    const [ searchParams ] = useSearchParams(`?val=서울&guests=1`);
    const maxUser = searchParams.get("guests");
    const area = searchParams.get("val");
    const cate = searchParams.get("cate");

    // 검색결과에 맞는 숙소?
    const filterContent = contentData.filter((data) => {
        const [ first, second ] = data.address.split(" ");
        
        // 카테고리가 검색결과일 때
        if (cate === "searchResult") {
            return first.includes(area) && data.roomData.maxUser >= maxUser;
        }

        return data.cate === cate && first.includes(area) && data.roomData.maxUser >= maxUser;
    });

    return (
        <S.SearchMainContainer>
        {
            filterContent.length > 0 ? 
            (
                <>
                    <CardListContainer contentData={filterContent} setClickCardListIndex={setClickCardListIndex} />
                    <MiniDetailComponents contentData={filterContent} clickCardListIndex={clickCardListIndex} />
                </>
            )
            :
            (
                <S.NoSearchResult>
                    <FontAwesomeIcon icon={faSearch} />
                    <h6>검색 결과가 없습니다.</h6>
                </S.NoSearchResult>
            )
        }
        </S.SearchMainContainer>
    );
};

export default SearchMainContainer;