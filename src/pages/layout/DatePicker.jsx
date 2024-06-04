import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { addDays } from "date-fns"
import ko from "date-fns/locale/ko"
import moment from 'moment';
import theme from "../../global/theme";

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const DatePicker = () => {
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
        setState([item.selection])
        console.log("Changed!")
    }
    return (
        <div>
            <DateRange
                rangeColors={[PALETTE.yellow]}
                locale={ko}
                minDate={today}
                editableDateInputs={false}
                onChange={(item) => onChangeDate(item)}
                moveRangeOnFirstSelection={false}
                ranges={state}
                months={2}
                direction="horizontal"
                // dateDisplayFormat={'yyyy.mm.dd'}
            />
        </div>
    );
};

export default DatePicker;