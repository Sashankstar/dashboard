import React from 'react';
import './ScheduleStyles.css';

const SimpleAppointmentCard = ({ title, time, icon: Icon, status }) => {
  // Determine if card is primary style (e.g., Dentist card in screenshot)
  const isPrimary = status === 'completed'; // example condition, can be adjusted

  return (
    <div className={`appointment-card${isPrimary ? ' primary' : ''}`}>
      {Icon && <Icon size={20} className="icon" />}
      <div className="content">
        <div className="title">{title}</div>
        <div className="time">{time}</div>
        {status && (
          <div className={`status ${status === 'completed' ? 'completed' : 'pending'}`}>
            {status}
          </div>
        )}
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
