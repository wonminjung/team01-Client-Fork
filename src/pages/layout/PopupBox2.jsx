import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { addDays } from "date-fns"
import ko from "date-fns/locale/ko"
import moment from 'moment';
import theme from "../../global/theme";

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const PopupBox2 = ({modal2IsOpen,setStartDateState,setEndDateState}) => {
    const PALETTE = theme.PALETTE;
    const today = moment().toDate();
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), 1),
          key: "selection",
        },
    ])
    const onChangeDate = (item) => {
        const startday = item.selection.startDate;
        const endday = item.selection.endDate;
        const diff = Math.ceil(Math.abs(endday - startday) / (1000 * 60 * 60 * 24));
        console.log(diff);
        setState([item.selection]);
        setStartDateState(
            startday.getFullYear() + "." + 
            (startday.getMonth()+1 <9? "0" + (startday.getMonth()+1): (startday.getMonth() + 1) ) + "." +
            (startday.getDate() < 9? "0" + (startday.getDate()) : (startday.getDate()))
        );
        setEndDateState(
            endday.getFullYear() + "." + 
            (endday.getMonth()+1 <9? "0" + (endday.getMonth()+1): (endday.getMonth() + 1) ) + "." +
            (endday.getDate() < 9? "0" + (endday.getDate()) : (endday.getDate()))
        );
    }
    return (
        <div className={`popup checkIn`} style={{display: modal2IsOpen? "block":"none"}}>
            <div className="content">
                <DateRange
                    rangeColors={[PALETTE.yellow]}
                    locale={ko}
                    minDate={today}
                    showDateDisplay={false}
                    editableDateInputs={false}
                    onChange={(item) => onChangeDate(item)}
                    moveRangeOnFirstSelection={false}
                    ranges={state}
                    months={2}
                    direction="horizontal"
                    dateDisplayFormat={'yyyy.MM.dd'}
                />
            </div>
        </div>
    );
};

export default PopupBox2;