import React from 'react'
import S from './style'

const RightSide = ({days}) => {
    // fetch()
    const contentData = [
        {
            userId : "example1",
            id : "1",
            cate : "coolPool",
            img : ["./images/pages/main/image1-1.jpg","./images/pages/main/image1-2.jpg","./images/pages/main/image1-3.jpg","./images/pages/main/image1-4.jpg","./images/pages/main/image1-5.jpg"],
            title : "위드독 독채 풀빌라",
            address : "충남/태안군",
            dayPrice : 150000,
            roomData : {
                maxUser : 6,
                bedroom : 2,
                bed : 2,
                bathroom : 2
            },
            description : `안녕하세요. 저희는 다양한 휴식 공간을 연구하고 제공하는 ONDA입니다. 이 곳에서 머무르실 모든 분들께서 편안하고 행복한 시간을 보내기를 바랍니다.\n
[숙소 소개]
반려견 동반이 가능하며 프라이빗한 나만의 공간에서 다양한 부대시설을 즐기실 수 있습니다.
깨끗한 시설과 최고의 서비스가 준비되어 있는 애견 스파 풀빌라에서 사랑하는 사람들과 반려견과 함께 행복한 추억을 만들어 가세요.

[객실 유형]
복층형 :
- 1층: 침대룸2(퀸 3, 슈퍼싱글1) + 화장실1 + 거실 +주방
- 2층: 테라스 + 화장실1(샤워실, 스파시설 및 애견 씻길 수 있는 공간) + 거실 + 주방
* 침구는 예약하신 인원에 맞게 제공됩니다.

숙소
[ 공지사항 ]
※ 반려견과 동반하지 않는 분들도 이용 가능합니다.
※ 화기류 객실 반입 금지입니다.
※ 마킹하는 반려견은 실내에서 매너벨트(기저귀) 착용 필수입니다.
* 반려견 마킹으로 인한 객실 비품 손상 및 오염 시 비용이 청구될 수 있습니다.
※ 반려견에 의한 침구류 세탁이 필요한 경우, 세탁 비용이 청구될 수 있어 유의 부탁드립니다.
※ 반려견만 객실에 두고 외출 불가하여 외출 시 반려견과 동반 부탁드립니다.
※ 반려견의 실외 대변 및 객실 내 대,소변은 견주님께서 처리하셔야합니다.
(배변패드, 매너밸트 구비되어있음)
※ 부주의로 인한 사고 발생 시 책임지지 않습니다.

[입/퇴실안내]
입실시간:16시
퇴실시간:12시

[인원 추가 요금]
(1박기준)
- 1인 30,000원 (중학생 이상부터 ~ 성인까지)
※ 노키즈존으로 운영하는 펜션으로 중학생 이상부터 입실 가능
※ 기준 인원을 초과한 인원은 추가요금이 발생되며, 미결제 인원에 대한 추가요금은 현장결제입니다.
# 야외수영장(무료)
- 운영 기간 : 5월 초 ~ 10월 31일까지
- 이용 시간 : 입실 후 ~ 22시
- 이용 복장 : 수영복, 래쉬가드, 면티, 반바지
※ 면티,반바지 착용 가능하나 물빠짐 없는 밝은 색 옷으로 착용 부탁드립니다.
※ 애견도 사용 가능합니다.
※ 애견 튜브 2개 준비되어 있습니다.
※ 이불셋팅은 인원수에 맞춰 셋팅됩니다.
- 침구 추가시 침구 1셋트당 2만원`,
            convenience : [
                {con : "계곡 전망"},
                {con : "산 전망"},
                {con : "무선 인터넷"},
                {con : "45인치 HDTV + 프리미엄 케이블 TV"},
                {con : "건물 내 무료 주차"},
                {con : "전용 야외 수영장 - 연중 언제든 예약가능,\n특정 시간대만 이용 가능, 수영장 덮개, 온수"},
            ],
            convenienceIcon : [
                {icon : "tv"},
                {icon : "picture"},
                {icon : "wifi"},
                {icon : "tv"},
                {icon : "car"},
                {icon : "pool"},
            ],
            notice : [
                [
                    {content : "체크인 시간 : 오후 3:00 ~ 오후 9:00"},
                    {content : "체크아웃 시간 : 오후 3:00 ~ 오후 9:00"},
                    {content : "셀프 체크인 : 키패드"},
                ],
                [
                    {content : "게스트 정원 : 6명"},
                    {content : "반려동물 동반 가능"},
                    {content : "소음 제한 시간대 : 오후 11:00 ~ 오전 7:00"},
                    {content : "상업적 사진 촬영 금지"},
                    {content : "추가 이용규칙 : \n겨울철에는 온수풀로 운영되는 곳입니다. 수영하실때만 덮개를 열어두시고 수영장 미 이용시 수영장 덮개를 반드시 덮어주세요. 특히 주무시기 전 수영장덮개를 덮어놓았는지 꼭!! 확인해주시기 바랍니다.\n양평은 특히 추운 곳이라 밤 사이에 덮개를 덮어놓지 않으면 물이 다 식어버려서 다시 데우는데 1박 2일이 꼬박 걸려 다음 이용자들이 수영장을 이용하지 못하는 불상사가 발생할 수 있습니다"},
                ],
                [
                    {content : "쓰레기 버리기"},
                    {content : "문 잠그기"},
                    {content : "가전제품 끄기"},
                    {content : "추가 요청 사항"},
                ],
                [
                    {content : "출입이 제한되지 않는 수영장/온수 욕조"},
                    {content : "근처에 호수, 강, 바다 등이 있음"},
                ],
                [
                    {content : "숙소 내 실외 보안 카메라"},
                    {content : "일산화탄소 경보기 설치됨"},
                    {content : "화재경보기 설치됨"},
                ],
            ],
            noticeIcon : [
                [
                    {icon : "time"},
                    {icon : "time"},
                    {icon : "check"},
                ],
                [
                    {icon : "users"},
                    {icon : "pet"},
                    {icon : "moon"},
                    {icon : "photo"},
                    {icon : "memo"},
                ],
                [
                    {icon : "trash"},
                    {icon : "lock"},
                    {icon : "off"},
                    {icon : "note"},
                ],
                [
                    {icon : "pool"},
                    {icon : "caution"},
                ],
                [
                    {icon : "eye"},
                    {icon : "bell"},
                    {icon : "bell"},
                ],
            ],
            cleanVat : 50000,
        },
    ]

    return (
        <S.SideBox className='rightBox'>
            <div>
                <div className='imgBox'>
                    <img src={`${contentData[0].img[0]}`} alt="example1" />
                </div>
                <div>
                    <h3>
                        {contentData[0].title}
                    </h3>
                </div>
            </div>
            <div>
                <div>
                    <h3>요금 세부정보</h3>
                </div>
                <div>
                    <h4>₩307,400 x {days}박</h4>
                    <h4>₩1,537,000</h4>
                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
            <div>
                <div>
                    <h4 className='h4Strong'>총 합계<underline>(KRW)</underline></h4>
                    <h4 className='h4Strong'>₩1,537,000</h4>
                </div>
            </div>
        </S.SideBox>
    );
};

export default RightSide;