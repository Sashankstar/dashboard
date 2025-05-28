import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import appointmentData from '../Components/Data/AppointmentDataNew';
import './ScheduleStyles.css';

const daysInWeek = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
const month = 'October';
const year = 2021;

const CalendarView = () => {
  const firstDayIndex = 5;
  const daysInMonth = 31;
  const calendarDays = [];
  for (let i = 0; i < firstDayIndex; i++) {
    calendarDays.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }
  const appointmentsByDate = {};
  appointmentData.calendarAppointments.forEach(app => {
    appointmentsByDate[app.date] = appointmentsByDate[app.date] || [];
    appointmentsByDate[app.date].push(app.time);
  });

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <ChevronLeft className="nav-arrow left" />
        {month} {year}
        <ChevronRight className="nav-arrow right" />
      </div>
      <div className="days-of-week">
        {daysInWeek.map(day => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="calendar-days">
        {calendarDays.map((day, idx) => (
          <div key={idx} className={`calendar-day${day ? '' : ' empty'}`}>
            {day && (
              <>
                <div className="day-number">{day}</div>
                <div>
                  {appointmentsByDate[day] && appointmentsByDate[day].map((time, i) => (
                    <div key={i} className="appointment-time">{time}</div>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="appointment-cards">
        {appointmentData.calendarAppointments.map(app => (
          <div key={app.id} className="appointment-card-small">
            <div>{app.title}</div>
            <div className="time">{app.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CalendarView;
