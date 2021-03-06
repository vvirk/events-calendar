import React from 'react';

class CalendarNav extends React.Component {
  render() {
    return (
      <nav className="calendar-nav">
        <button 
          className="calendar-nav-btn" 
          onClick={()=>(this.props.getPrevMonth())}
        >
          &#9668; prev
        </button>
        <button
          className="calendar-nav-btn" 
          onClick={()=>(this.props.getThisMonth())}
        >
          current month
        </button>
        <button 
          className="calendar-nav-btn" 
          onClick={()=>(this.props.getNextMonth())}
        >
          next &#9658;
        </button>
      </nav>
    );
  }
}

export default CalendarNav;