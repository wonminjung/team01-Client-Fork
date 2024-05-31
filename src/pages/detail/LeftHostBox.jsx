import React from 'react';

const LeftHostBox = ({profileImg, name, starAvr, commentData}) => {
    return (
        <div className="hostBox">
            <div>
                <div className="ownerImg">
                    <img src={profileImg} alt="호스트썸네일" />
                </div>
                <div className="ownerName">
                    <h4>호스트 : {name} 님</h4>
                </div>
            </div>
            <div>
                <div className="avrStarBox">{starAvr()}</div>
                <div className="reviewBox">{commentData.length}개</div>
            </div>
        </div>
    );
};

export default LeftHostBox;