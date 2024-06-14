import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import FilterBox from './FilterBox';
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';
import FilterModal from './FilterModal';
import { useState } from 'react';

export default function Category(){
  const category = [
    {
      id: 1,
      cate: "coolPool",
      img: "./images/pages/main/cate1.jpg",
      tag: "멋진 수영장"
    },{
      id: 2,
      cate: "nearBeach",
      img: "./images/pages/main/cate2.jpg",
      tag: "해변 근처"
    },{
      id: 3,
      cate: "design",
      img: "./images/pages/main/cate3.jpg",
      tag: "디자인"
    },{
      id: 4,
      cate: "country",
      img: "./images/pages/main/cate4.jpg",
      tag: "한적한 시골"
    },{
      id: 5,
      cate: "coolView",
      img: "./images/pages/main/cate5.jpg",
      tag: "최고의 전망"
    },{
      id: 6,
      cate: "koreanHouse",
      img: "./images/pages/main/cate6.jpg",
      tag: "한옥"
    },{
      id: 7,
      cate: "farm",
      img: "./images/pages/main/cate7.jpg",
      tag: "농장"
    },{
      id: 8,
      cate: "nearLake",
      img: "./images/pages/main/cate8.jpg",
      tag: "호수 근처"
    },{
      id: 9,
      cate: "logHouse",
      img: "./images/pages/main/cate9.jpg",
      tag: "통나무집"
    },{
      id: 10,
      cate: "camp",
      img: "./images/pages/main/cate10.jpg",
      tag: "캠핑장"
    },{
      id: 11,
      cate: "minimalHouse",
      img: "./images/pages/main/cate11.jpg",
      tag: "초소형 주택"
    },{
      id: 12,
      cate: "symbolicCity",
      img: "./images/pages/main/cate12.jpg",
      tag: "상징적 도시"
    },{
      id: 13,
      cate: "containerHouse",
      img: "./images/pages/main/cate13.jpg",
      tag: "컨테이너하우스"
    },{
      id: 14,
      cate: "grandPiano",
      img: "./images/pages/main/cate14.jpg",
      tag: "그랜드피아노"
    },{
      id: 15,
      cate: "shapeAHouse",
      img: "./images/pages/main/cate15.jpg",
      tag: "A자형 주택"
    },{
      id: 16,
      cate: "domHouse",
      img: "./images/pages/main/cate16.jpg",
      tag: "돔하우스"
    },{
      id: 17,
      cate: "golf",
      img: "./images/pages/main/cate17.jpg",
      tag: "골프장"
    },{
      id: 18,
      cate: "skiEntry",
      img: "./images/pages/main/cate18.jpg",
      tag: "스키 타고 출입"
    },{
      id: 19,
      cate: "campingCar",
      img: "./images/pages/main/cate19.jpg",
      tag: "캠핑카"
    },{
      id: 20,
      cate: "ski",
      img: "./images/pages/main/cate20.jpg",
      tag: "스키"
    }
  ]
  const [searchParams] = useSearchParams('?cate=coolPool&lPrice=0&gPrice=1000000&maxUser=0&bedroom=0&bed=0&bathroom=0');
  const getKey = searchParams.get('cate'); // 카테고리 params 가져오기
  const getPrice = [searchParams.get("lPrice"),searchParams.get("gPrice")]; // 가격범위 params 가져오기
  const getMaxUser = searchParams.get("maxUser"); // 최대인원 params 가져오기
  const getBedroom = searchParams.get("bedroom"); // 침실 params 가져오기
  const getBed = searchParams.get("bed"); // 침대 params 가져오기
  const getBathroom = searchParams.get("bathroom"); // 욕실 params 가져오기
  const navigate = useNavigate();
  const setCur = category.filter((cate)=>cate.cate === getKey)[0].id - 1;
  const selectSlide = (nav) => {
    // 카테고리만 변경하고 필터값은 바꾸지않음
    const params = {cate : nav, lPrice : getPrice[0], gPrice: getPrice[1], maxUser: getMaxUser, bedroom: getBedroom, bed: getBed, bathroom: getBathroom}
    navigate({
      pathname : '/',
      search : `?${createSearchParams(params)}`
    })
  }
  let scrollY = "";
  const [modalOpen,setModalOpen] = useState(false);
  const modalOnOff = () => {
      setModalOpen(modalOpen? false : true);
      if(!modalOpen){
        scrollY = window.scrollY;
        document.body.style.position = "fixed";
        document.body.style.top = "-"+scrollY+"px";
        document.body.style.overflowY = "scroll";
        document.body.style.width = "100%";
      }else{
        let offset = document.body.style.top;
        document.body.style.position = "unset";
        document.body.style.top = "unset";
        document.body.style.overflowY = "unset";
        document.body.style.width = "unset";
        window.scrollTo(0, offset.slice(0,-2) * -1);
      }
  }
  return (
    <>
      <Swiper
        className='categoryContainer'
        navigation={true}
        modules={[Navigation]}
        slidesPerGroup={14}
        slidesPerView={14}
        allowTouchMove={false}
        breakpoints={{
          500 : {
            slidesPerView : 5
          },
          700 : {
            slidesPerView : 8
          },
          900 : {
            slidesPerView : 10
          },
          1000 : {
            slidesPerView : 12
          },
          1200 : {
            slidesPerView : 14
          },
          1500 : {
            slidesPerView : 16
          }
        }}
      >
        {category.map((cate,i)=>
          <SwiperSlide key={i}>
            <div className={`categoryCard ${i === setCur? "active" : ""}`} onClick={() => selectSlide(cate.cate)}>
              <div>
                <img src={cate.img} alt={`categoty${i+1}`}/>
              </div>
              <div>
                {cate.tag}
              </div>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
      <FilterBox modalOnOff={modalOnOff}/>
      <FilterModal modalOpen={modalOpen} modalOnOff={modalOnOff}/>
    </>
  );
};