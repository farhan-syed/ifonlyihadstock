import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Picker = (props) => {
    const [date, setDate] = useState();
    
    const handleDateChangeRaw = (e) => {
        e.preventDefault();
    }
    
    const change = (date) => {
        setDate(date);
        props.onChange(date)
    }

    const isWeekday = (date) => {
        const day = date.getDay();
        return day !== 0 && day != 6;
    }

    const setPlaceholder = () => {
        let today = new Date();
        let month = today.getMonth() + 1;
        let day = today.getDate();
        let year = today.getFullYear();

        if (month < 10)
            month='0'+ month;

        if (day < 10)
            day='0' + day;

        return month+'/'+day+'/'+year;

    }

    return (
        <DatePicker 
            className="h-7 w-full p-3 mr-2 text-xs rounded-sm shadow-inner bg-gray-100 border-0 focus:ring-green-500 focus:bg-white" 
            minDate={new Date(2007,1,1)} 
            maxDate={new Date()} 
            filterDate={isWeekday}
            placeholderText={setPlaceholder()}
            selected={date}
            showYearDropdown 
            popperPlacement="bottom" 
            onChange={change} 
            onChangeRaw={handleDateChangeRaw}
        />
    )
}

export default Picker;
