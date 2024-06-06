import React, { useEffect, useState } from 'react';
import S from './style';

// 지도 생성 전에 주소로부터 좌표를 먼저 얻고, 그 좌표로 options.center를 설정한 뒤 지도를 생성하는 로직
const KakaoMap = ({ props }) => { // props로 주소 받기
    const [center, setCenter] = useState({ lat: 33.450701, lng: 126.570667 }); // 초기값 설정(제주 카카오)

    useEffect(() => {
        // Kakao Maps API 스크립트 로드(index.html에 심는 것 대신)
        const script = document.createElement('script');
        script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=36c7797271c2d5cecad0688f5075fb95&autoload=false&libraries=services';
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
            window.kakao.maps.load(() => {

                // 1. 주소로 좌표 구하기
                const container = document.getElementById('map'); // 지도를 담을 영역의 DOM 레퍼런스
                const geocoder = new window.kakao.maps.services.Geocoder(); //주소-좌표 변환 geocoder메서드
                // 주소로 좌표를 검색
                geocoder.addressSearch(props, function (result, status) {
                    if (status === window.kakao.maps.services.Status.OK) {
                        const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);// coords변수에 좌표 저장
                        setCenter({ lat: result[0].y, lng: result[0].x }); // 중심 좌표상태 업데이트
                // 지도를 생성
                const map = new window.kakao.maps.Map(container, {
                    center: coords,
                    level: 3
                });

                // 2. 마커에 img 넣기
                let imageSrc = "../../images/pages/bookingList/simpleHome.svg", // 마커이미지의 주소입니다    
                imageSize = new window.kakao.maps.Size(20, 20), // 마커이미지의 크기입니다
                imageOption = {offset: new window.kakao.maps.Point(10, 10)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
                // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
                const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
                // 마커를 생성
                const marker = new window.kakao.maps.Marker({
                    map: map,
                    position: coords,
                    image: markerImage
                });
                // 마커가 지도 위에 표시되도록 설정합니다
                marker.setMap(map);  

                // 3. 지도에 원 그리기
                // 작은 원을 생성
                const smallCircle = new window.kakao.maps.Circle({
                    center: coords,
                    radius: 18,
                    strokeWeight: 0,
                    // strokeColor: '#75B8FA',
                    strokeOpacity: 0.4,
                    strokeStyle: 'dashed',
                    fillColor: '#F2AC29',
                    fillOpacity: 0.9
                    });
                // 지도에 원을 표시합니다
                smallCircle.setMap(map);
                // 큰 원을 생성
                const bigCircle = new window.kakao.maps.Circle({
                    center: coords,
                    radius: 50,
                    strokeWeight: 0,
                    // strokeColor: '#75B8FA',
                    strokeOpacity: 0.4,
                    strokeStyle: 'dashed',
                    fillColor: '#F2AC29',
                    fillOpacity: 0.4
                });

                // 지도에 큰 원을 표시합니다
                bigCircle.setMap(map);
                    }
                });
            });
        };

        script.onerror = () => {
            console.error("Kakao Maps API 스크립트를 로드할 수 없습니다.");
        };
    }, [props]);

    return (
        <S.map>
            <div id="map"></div>
        </S.map>
    );
};

export default KakaoMap;
