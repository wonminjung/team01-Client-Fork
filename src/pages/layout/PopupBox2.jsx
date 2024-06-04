import React from 'react';
import DatePicker from './DatePicker';

const PopupBox2 = ({modal2IsOpen}) => {
    return (
        <div className={`popup checkIn`} style={{display: `${modal2IsOpen? "block":"none"}`}}>
            <div className="content">
                <DatePicker />
            </div>
        </div>
    );
};

export default PopupBox2;