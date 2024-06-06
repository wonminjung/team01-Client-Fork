import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import BasicButton from '../../components/button/BasicButton';
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const FilterModal = ({modalOpen,modalOnOff}) => {
    const [value, setValue] = useState([50000, 650000]);
    const val0Ref = useRef(null);
    const val1Ref = useRef(null);
    const setVal = () => {
        setValue([val0Ref.current.value, val1Ref.current.value])
    }
    return (
        <>
            <div className={`filterBackground ${modalOpen? "active": ""}`} onClick={modalOnOff}></div>
            <div className={`filterContent ${modalOpen? "active": ""}`}>
                <div className="topBox">
                    <button type='button' className='closeFilterBtn' onClick={modalOnOff}><FontAwesomeIcon icon={faXmark}/></button>
                    <div className="titleBox">
                        <h6>필터</h6>
                    </div>
                </div>
                <div className="filterListBox">
                    <div className="priceFilter">
                        <h6>가격 범위</h6>
                        <RangeSlider
                            className="range-slider-yellow"
                            value={value}
                            onInput={setValue}
                            min={10000}
                            max={1000000}
                            step={1000}
                        />
                        <div className="priceText">
                            <input type="text" ref={val0Ref} onChange={setVal} value={value[0]}/>
                            <input type="text" ref={val1Ref} onChange={setVal} value={value[1]}/>
                        </div>
                    </div>
                    <div className="roomFilter">1</div>
                </div>
                <div className="bottomBox">
                    <div className="filterRemoveBox">
                        <button type='bottom' className='filterRemoveBtn'>전체 해제</button>
                    </div>
                    <div className="filterSubmitBox">
                        <BasicButton className='filterSubmitBtn'>숙소 ??개 보기</BasicButton>
                    </div>
                </div>
            </div>
        </>
        
    );
};

export default FilterModal;