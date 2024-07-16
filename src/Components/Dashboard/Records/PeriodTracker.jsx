import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./Styles.css"


function PeriodTracker() {
  const [value, setValue] = useState(new Date());

  const onChange = (nextValue) => {
    setValue(nextValue);
  };
  return (
    <div className='periodTracker'>
      <h3 className='subHeader'>My Period Calendar</h3>
      <div className="calendarCard">
        <p>Days left to next period: <span><b>14 days</b></span></p>
        <div className='myCalendar'>
          <Calendar
            onChange={onChange}
            value={value}
            
          />
        </div>
      </div>
    </div>
  );
}

export default PeriodTracker;
