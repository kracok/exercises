import React, { useState } from 'react';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import CountdownComponent from "./CountdownComponent";

const Countdown = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <div class='countdown'>

            <p className="pageHeaderText">
                For this exercise I made an countdown timer for a specific date (very important dates!). 
                I also imported the Date Picker component
            </p>

            <div className="datePickerContainer">
                <p>Date Picker Component</p>
                <DatePicker 
                    selected={selectedDate} 
                    onChange={date => setSelectedDate(date)} 
                    dateFormat="dd/MM/yyyy"
                    showYearDropdown
                    scrollableYearDropdown
                    scrollableMonthYearDropdown
                    isClearable
                />
            </div>

            <CountdownComponent 
                timerDate={"June 11, 2021"}
                timerDescription={"The release date for the video game Ratchet & Clank Rift Apart"}
            />

            <CountdownComponent 
                timerDate={"May 14, 2021"}
                timerDescription={"The release date for the video game Mass Effect Legendary Edition"}
            />

        </div>
    )
};

export default Countdown;