import React, { useState } from 'react';
import ResetHeader from '../layout/ResetHeader';
import S from './style';
import { useSearchParams } from 'react-router-dom';
import TitleBox from './TitleBox';
import ImageSlide from './ImageSlide';
import LeftContentBox from './LeftContentBox';
import RightContentBox from './RightContentBox';
import DetailGradeBox from './DetailGradeBox';
import DetailCommentBox from './DetailCommentBox';
import DetailMapBox from './DetailMapBox';
import ScrollEvent from '../layout/ScrollEvent';
import PopupBox1 from './PopupBox1';

const DetailContainer = () => {
    ResetHeader();
    ScrollEvent();
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
                {icon : "picture"},
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
        {
            userId : "hyeona023",
            id : "2",
            cate : "coolPool",
            img : ["./images/pages/main/image2-1.jpg","./images/pages/main/image2-2.jpg","./images/pages/main/image2-3.jpg","./images/pages/main/image2-4.jpg","./images/pages/main/image2-5.jpg"],
            title : "강화도 럭셔리 대형 풀빌라",
            address : "인천/강화도",
            dayPrice : 120000,
            roomData : {
                maxUser : 6,
                bedroom : 2,
                bed : 2,
                bathroom : 2
            },
            description : "예약 전 숙소 이용 안내 및 이용 수칙을 반드시 읽어주세요.\n\n'일상에서 벗어난 단 하루, 나만의 은신처에서 온전한 휴식을…'\n\n'호젓한 은신처'를 의미하는 '호은'.\n\n양평의 한적한 시골마을에 위치한 자연친화적 독채 스테이입니다.\n\n거실의 커다란 통창은 아름다운 자연 경관을 한폭의 그림처럼 담아 냅니다. 통창 앞으로는 온 가족이 둘러앉을 수 있는 넉넉한 ",
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
            cleanVat : 40000,
        },
        {
            userId : "example1",
            id : "3",
            cate : "coolPool",
            img : ["./images/pages/main/image3-1.jpg","./images/pages/main/image3-2.jpg","./images/pages/main/image3-3.jpg","./images/pages/main/image3-4.jpg","./images/pages/main/image3-5.jpg"],
            title : "6.다온빌(스파/개별풀)",
            address : "서면/양양",
            dayPrice : 220000,
            roomData : {
                maxUser : 6,
                bedroom : 2,
                bed : 2,
                bathroom : 2
            },
            description : "예약 전 숙소 이용 안내 및 이용 수칙을 반드시 읽어주세요.\n\n'일상에서 벗어난 단 하루, 나만의 은신처에서 온전한 휴식을…'\n\n'호젓한 은신처'를 의미하는 '호은'.\n\n양평의 한적한 시골마을에 위치한 자연친화적 독채 스테이입니다.\n\n거실의 커다란 통창은 아름다운 자연 경관을 한폭의 그림처럼 담아 냅니다. 통창 앞으로는 온 가족이 둘러앉을 수 있는 넉넉한 ",
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
        {
            userId : "hyeona023",
            id : "4",
            cate : "coolPool",
            img : ["./images/pages/main/image4-1.jpg","./images/pages/main/image4-2.jpg","./images/pages/main/image4-3.jpg","./images/pages/main/image4-4.jpg","./images/pages/main/image4-5.jpg"],
            title : "독채풀빌라 스테이호은",
            address : "경기/양평군",
            dayPrice : 200000,
            roomData : {
                maxUser : 6,
                bedroom : 2,
                bed : 2,
                bathroom : 2
            },
            description : "예약 전 숙소 이용 안내 및 이용 수칙을 반드시 읽어주세요.\n\n'일상에서 벗어난 단 하루, 나만의 은신처에서 온전한 휴식을…'\n\n'호젓한 은신처'를 의미하는 '호은'.\n\n양평의 한적한 시골마을에 위치한 자연친화적 독채 스테이입니다.\n\n거실의 커다란 통창은 아름다운 자연 경관을 한폭의 그림처럼 담아 냅니다. 통창 앞으로는 온 가족이 둘러앉을 수 있는 넉넉한 ",
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
            cleanVat : 45000,
        },
        {
            userId : "example1",
            id : "5",
            cate : "coolPool",
            img : ["./images/pages/main/image5-1.jpg","./images/pages/main/image5-2.jpg","./images/pages/main/image5-3.jpg","./images/pages/main/image5-4.jpg","./images/pages/main/image5-5.jpg"],
            title : "별담하늘담",
            address : "경기/양평군",
            dayPrice : 150000,
            roomData : {
                maxUser : 6,
                bedroom : 2,
                bed : 2,
                bathroom : 2
            },
            description : "예약 전 숙소 이용 안내 및 이용 수칙을 반드시 읽어주세요.\n\n'일상에서 벗어난 단 하루, 나만의 은신처에서 온전한 휴식을…'\n\n'호젓한 은신처'를 의미하는 '호은'.\n\n양평의 한적한 시골마을에 위치한 자연친화적 독채 스테이입니다.\n\n거실의 커다란 통창은 아름다운 자연 경관을 한폭의 그림처럼 담아 냅니다. 통창 앞으로는 온 가족이 둘러앉을 수 있는 넉넉한 ",
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
            cleanVat : 40000,
        },
        {
            userId : "hyeona023",
            id : "6",
            cate : "coolPool",
            img : ["./images/pages/main/image6-1.jpg","./images/pages/main/image6-2.jpg","./images/pages/main/image6-3.jpg","./images/pages/main/image6-4.jpg","./images/pages/main/image6-5.jpg"],
            title : "춘천 유유자적 일동",
            address : "춘천/서면",
            dayPrice : 250000,
            roomData : {
                maxUser : 2,
                bedroom : 4,
                bed : 3,
                bathroom : 4
            },
            description : "예약 전 숙소 이용 안내 및 이용 수칙을 반드시 읽어주세요.\n\n'일상에서 벗어난 단 하루, 나만의 은신처에서 온전한 휴식을…'\n\n'호젓한 은신처'를 의미하는 '호은'.\n\n양평의 한적한 시골마을에 위치한 자연친화적 독채 스테이입니다.\n\n거실의 커다란 통창은 아름다운 자연 경관을 한폭의 그림처럼 담아 냅니다. 통창 앞으로는 온 가족이 둘러앉을 수 있는 넉넉한 ",
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
            },
            date : "2024-06-01 16:17:12",
        },
        {
            id : 2,
            userId : "example2",
            contentId : 1,
            body : "너무 만족스러운 여행이었어요~ 너무 만족스러운 여행이었어요~ 너무 만족스러운 여행이었어요~ 너무 만족스러운 여행이었어요~ 너무 만족스러운 여행이었어요~ 너무 만족스러운 여행이었어요~",
            star : 5,
            grade : {
                clean : 5,
                accuracy : 5,
                communication : 5,
                location : 5,
                priceSatis : 4.5,
            },
            date : "2024-06-03 16:17:12",
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
            },
            date : "2024-06-03 16:17:12",
        },
        {
            id : 4,
            userId : "example1",
            contentId : 2,
            body : "대충 만족스러운 여행이었어요",
            star : 3,
            grade : {
                clean : 5,
                accuracy : 3,
                communication : 4,
                location : 5,
                priceSatis : 3,
            },
            date : "2024-06-03 16:17:12",
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
            wishList : [1,2,3]
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
            wishList : [3,6]
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
            wishList : [2,3,5]
        }
    ]
    const [searchParams,] = useSearchParams();
    const contentId = searchParams.get('content');
    const content = contentData.filter((data)=> data.id === contentId)[0];
    const user = userData.filter((data)=> content.userId === data.userId)[0];
    const comment = commentData.filter((data)=> data.contentId == content.id);
    const {id,img,title,dayPrice,cleanVat} = content;
    const [popup1State, setpopup1State] = useState(false);
    return (
        <S.DetailContainer>
            <S.DetailWrapper>
                <TitleBox title={title}/>
                <ImageSlide img={img}/>
                <S.DetailContentBox>
                    <LeftContentBox contentData={content} hostData={user} commentData={comment} setpopup1State={setpopup1State}/>
                    <RightContentBox id={id} dayPrice={dayPrice} cleanVat={cleanVat}/>
                </S.DetailContentBox>
                <DetailGradeBox comment={comment}/>
                <DetailCommentBox commentData={comment} userData={user} allUserData={userData} setpopup1State={setpopup1State}/>
                <DetailMapBox address={content.address}/>
                <PopupBox1 content={content} commentData={comment} allUserData={userData} popup1State={popup1State} setpopup1State={setpopup1State}/>
            </S.DetailWrapper>
        </S.DetailContainer>
    );
};

export default DetailContainer;