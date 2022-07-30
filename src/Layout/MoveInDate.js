import React, { useEffect, useState } from 'react';
import { getMonth } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';



const DateFixed = ({ month, setMonth }) => {
    const [selected, setSelected] = useState();
    const [isVisible, setVisibility] = useState(false);
    const disabledDays = [
        { from: new Date(2022, 1, 1), to: new Date() }
    ]
    const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    useEffect(() => {
        if (selected) {
            setMonth(MONTHS[getMonth(selected)]);
        }
    }, [selected])

    const showCalender = () => {
        setVisibility(true)
    }
    return (
        <div>
            <label className="label">
                <span className="label-text pl-2 m-1 ">Move in Date</span>
            </label>
            <button className='border border-violet-600 rounded-lg bg-base-100 w-24 md:w-36 text-gray-800 h-12 font-semibold' onClick={showCalender}>{month ? month : 'When'}
                <FontAwesomeIcon icon={faCalendar} className="pl-6"></FontAwesomeIcon> </button>
            {isVisible ? <DayPicker
                mode="single"
                selected={selected}
                onSelect={setSelected}
                disabled={disabledDays}
                fromYear={2022} toYear={2022}
                onDayClick={() => setVisibility(false)}
            /> :
                <></>}



        </div>
    );
};

export default DateFixed;