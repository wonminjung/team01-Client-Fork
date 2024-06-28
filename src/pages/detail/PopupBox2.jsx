import React from 'react';
import { DateRange } from 'react-date-range';
import theme from '../../global/theme';
import { ko } from 'date-fns/locale';

const PopupBox2 = ({popupState, today, state, setState, setStartDateState, setEndDateState, roomSchedule}) => {
    const PALETTE = theme.PALETTE;
    const onChangeDate = (item) => {
        const startday = item.selection.startDate;
        const endday = item.selection.endDate;
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
        <div className='checkInOutContainer' style={{display : popupState? "block":"none"}}>
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
                    disabledDates={roomSchedule}
                />
            </div>
        </div>
    );
};

export default PopupBox2;