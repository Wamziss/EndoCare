import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function PeriodTracker() {
  const [value, setValue] = useState(new Date());

  const onChange = (nextValue) => {
    setValue(nextValue);
  };
  return (
    <div>
      <h3>My Period Calendar</h3>
      <div className="calendarCard">
        <p>14 Days Left</p>
        <div>
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
