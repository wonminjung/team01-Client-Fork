import React from 'react';
import S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { useSearchParams } from 'react-router-dom';


const ModalFilterBox = ({isFilterActivate, setFilterActivate, handlFilterStatus}) => {

    //  백그라운드만 클릭했을 때 닫히게
    const backgroundClick = () => {
        window.addEventListener("click", (e) => {
            if (e.target.classList.contains("filterBg")) {
                handlFilterStatus();
            }
        });

    };


    const [ searchParams ] = useSearchParams("?cate=coolPool&lPrice=0&gPrice=1000000&maxUser=0&bedroom=0&bed=0&bathroom=0");
    const value = searchParams.get("cate");
    const price = [ searchParams.get("lPrice"), searchParams.get("gRrice") ];

    return (
        <S.ModalFilter className={ isFilterActivate ? "filterBg" : "" } onClick={backgroundClick}>
            <S.Popup>
                <div className="filterHeader">
                    <div className="closeBtn" onClick={handlFilterStatus}>
                        <FontAwesomeIcon icon={faXmark}/>
                    </div>
                    <h6>필터</h6>
                </div>

                <div className="filterListBox">
                    <div className="priceFilter">
                        <h6>가격 범위</h6>
                        <RangeSlider
                            className="range-slider-yellow"
                            // value={value}
                            // onInput={setValue}
                            // onThumbDragEnd={setVal}
                            rangeSlideDisabled={true}
                            min={10000}
                            max={1000000}
                            step={1000}
                        />
                        

                    </div>


                    <div className="roomFilter">

                    </div>
                </div>

            </S.Popup>
        </S.ModalFilter>
    );
};

export default ModalFilterBox;