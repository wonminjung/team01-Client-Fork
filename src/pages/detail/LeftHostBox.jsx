import React from 'react';
import S from './style';

const LeftHostBox = ({profileImg, name, commentData}) => {
    const starAvr = () => {
        let number = 0;
        for(let i = 0; i < commentData.length; i++){
            number += commentData[i].star;
        }
        number = number / commentData.length;
        return number.toFixed(1);
    }
    return (
        <div className="hostBox">
            <div>
                <div className="hostImg">
                    <img src={profileImg} alt="호스트썸네일" />
                </div>
                <div className="hostName">
                    <h6>호스트 : {name} 님</h6>
                </div>
            </div>
            <div>
                <div className="avrStarBox">
                    <div>{commentData.length === 0? 0 : starAvr()}</div>
                    <div><S.StarBack><span style={{width: `${starAvr(commentData) * 20}%`}}></span></S.StarBack></div>
                </div>
                <div className="reviewBox">
                    <div>{commentData.length}개</div>
                    <div><span>후기</span></div>
                </div>
            </div>
        </div>
    );
};

export default LeftHostBox;