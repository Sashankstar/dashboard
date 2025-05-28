import React from 'react';
import appointmentData from '../Components/Data/AppointmentDataNew';
import '../Components/ActivityFeedStyles.css';

const ActivityFeed = () => {
  const totalAppointments = appointmentData.weeklyActivity.reduce(
    (sum, day) => sum + day.bars.length,
    0
  );

  return (
    <div className="activity-feed-container">
      <div className="activity-feed-header">
        <h2>Activity</h2>
        <p className="activity-feed-subtitle">{totalAppointments} appointment{totalAppointments !== 1 ? 's' : ''} on this week</p>
      </div>
      <div className="activity-feed-bars">
        {appointmentData.weeklyActivity.map((day) => (
          <div key={day.day} className="activity-feed-day">
            <div className="activity-feed-day-bars">
              {day.bars.map((bar, index) => (
                <div
                  key={index}
                  className="activity-feed-bar"
                  style={{
                    height: `${bar.height}px`,
                    backgroundColor: bar.color,
                    marginLeft: index === 0 ? 0 : '4px',
                  }}
                />
              ))}
            </div>
            <div className="activity-feed-day-label">{day.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
