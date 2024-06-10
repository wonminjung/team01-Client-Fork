import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import DetailGradeBox from './DetailGradeBox';

const PopupBox1 = ({content,commentData,popup1State,setpopup1State}) => {
    const starAvr = () => {
        let number = 0;
        for(let i = 0; i < commentData.length; i++){
            number += commentData[i].star;
        }
        number = number / commentData.length;
        return number.toFixed(1);
    }
    const closePopup1 = () => {
        setpopup1State(false);
        let offset = document.body.style.top;
        document.body.style.position = "unset";
        document.body.style.top = "unset";
        document.body.style.overflowY = "unset";
        document.body.style.width = "unset";
        window.scrollTo(0, offset.slice(0,-2) * -1);
    }
    return (
        <div className='reviewContainer' style={{display : popup1State? "block":"none"}}>
            <div className="reviewBackground" onClick={closePopup1}></div>
            <div className="reviewBox">
                <div className="reviewTop">
                    <button type='button' onClick={closePopup1}><FontAwesomeIcon icon={faXmark}/></button>
                    <h6>{content.title} 후기</h6>
                </div>
                <div className="reviewContent">
                    <div className="contentLeft">
                        <div className="reviewAvrStarBox">{commentData.length === 0? 0 : starAvr()}</div>
                        <DetailGradeBox comment={commentData}/>
                    </div>
                    <div className="contentRight"></div>
                </div>
            </div>
        </div>
    );
};

export default PopupBox1;