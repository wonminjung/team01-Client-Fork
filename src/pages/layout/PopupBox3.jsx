import React from 'react';

const PopupBox3 = ({modal3IsOpen}) => {
    return (
        <div className={`popup guest`} style={{display: `${modal3IsOpen? "block":"none"}`}}>
            <div className="content">
                
            </div>
        </div>
    );
};

export default PopupBox3;