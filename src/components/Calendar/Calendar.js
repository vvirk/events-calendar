import React from 'react';

class Calendar extends React.Component {
  render() {
    const today = this.props.today;
    const currentMonth = this.props.currentMonth;
    const currentYear = this.props.currentYear;
    const startCurrentMonth = new Date(currentYear, currentMonth);
    const endCurrentMonth = new Date(currentYear, currentMonth+1, 0);
    const lastDate = endCurrentMonth.getDate();
    const currentMonthDays = [];
    const emptyBlocks = [];
    for (let i = 1; i < getDay(startCurrentMonth); i++) {
      emptyBlocks.push('');
    };
    for (let i = 1; i<=lastDate; i++) {
      currentMonthDays.push(new Date(currentYear, currentMonth, i))
    };
    function getDay(date) {
      let day = date.getDay();
      if (day === 0) day = 7;
        return day;
    }
  return (
      <div id="calendar">
        <div className="weekDay">m</div>
        <div className="weekDay">t</div>
        <div className="weekDay">w</div>
        <div className="weekDay">t</div>
        <div className="weekDay">f</div>
        <div className="weekDay">s</div>
        <div className="weekDay">s</div>
        {emptyBlocks.map((block, index)=>(
          <div 
            className="empty" 
            key={index}
          >
            {block}
          </div>
        ))}
        {currentMonthDays.map((monthDay, index) => (
          <div 
            key={index}
            className={(monthDay.getDate() === today.getDate() &&
              monthDay.getMonth() === today.getMonth() &&
              monthDay.getFullYear() === today.getFullYear()) ? 'day currentDay' : 'day'}
          >
            <span 
              className={(monthDay.getDate() === today.getDate() &&
                monthDay.getMonth() === today.getMonth() &&
                monthDay.getFullYear() === today.getFullYear()) ? 'date currentDate' : 'date'}
              onClick={()=>(this.props.openWindow() && this.props.getSelectedDay(monthDay))}
            >
              {monthDay.getDate()}
              {(this.props.events[monthDay.getFullYear()] && 
                this.props.events[monthDay.getFullYear()][monthDay.getMonth()+1] && 
                this.props.events[monthDay.getFullYear()][monthDay.getMonth()+1][monthDay.getDate()]) ? 
                <div className="event-marker"></div> : null}   
            </span>
          </div>
        ))}
      </div>
  );
  }
}

export default Calendar;