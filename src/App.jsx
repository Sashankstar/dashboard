import React from 'react';
import Header from './Components/Header';
import CalendarView from './Components/CalendarView';
import UpcomingSchedule from './Components/UpcomingSchedule';
import ActivityFeedNew from './Components/ActivityFeedNew';
import './Components/ScheduleStyles.css';

const App = () => {
  return (
    <div className="App" style={{ display: 'flex',justifyContent:"space-between"}}>
      <div style={{ flex: '0 0 250px' }}>
        <Header />
        <ActivityFeedNew />  
      </div>

      {/* Right column: Calendar and upcoming schedule */}
      <div style={{ flex: '0 0 350px', display: 'flex', flexDirection: 'column',}}>
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </div>
  );
};

export default App;
