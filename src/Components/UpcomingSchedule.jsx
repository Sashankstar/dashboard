import React from 'react';
import appointmentData from '../Components/Data/AppointmentDataNew';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import './ScheduleStyles.css';

const UpcomingSchedule = () => {
  // Group upcomingSchedule by day
  const groupedByDay = appointmentData.upcomingSchedule.reduce((acc, appointment) => {
    if (!acc[appointment.day]) {
      acc[appointment.day] = [];
    }
    acc[appointment.day].push(appointment);
    return acc;
  }, {});

  return (
    <>
    <h2>The Upcoming Schedule</h2>
    <div className="upcoming-schedule-container" style={{display:"flex", gap:"30px"}}>
      {Object.entries(groupedByDay).map(([day, appointments]) => (
        <div key={day} className="day-group">
          <h3>On {day}</h3>
          {appointments.map(app => (
            <SimpleAppointmentCard
            key={app.id}
            title={app.title}
            time={app.time}
            icon={app.icon}
            status={app.status}
            />
          ))}
        </div>
      ))}
    </div>
    </>
  );
};

export default UpcomingSchedule;
