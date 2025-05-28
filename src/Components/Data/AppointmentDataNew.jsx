import { Brain, Eye, Heart, Stethoscope } from 'lucide-react';
import React from 'react'
const appointmentData = {
  calendarAppointments: [
    { id: 1, title: 'Dentist', doctor: 'Dr. Smith', time: '10:00 AM', date: '15', type: 'dental' },
    { id: 2, title: 'Physiotherapy Appointment', doctor: 'Dr. Johnson', time: '02:00 PM', date: '22', type: 'therapy' }
  ],
  upcomingSchedule:[
    { id: 1, day: 'Thursday', title: 'Health checkup complete', time: '09:00 AM', icon: Stethoscope, status: 'completed' },
    { id: 2, day: 'Thursday', title: 'Ophthalmologist', time: '11:00 AM', icon: Eye, status: 'scheduled' },
    { id: 3, day: 'Saturday', title: 'Cardiologist', time: '02:00 PM', icon: Heart, status: 'scheduled' },
    { id: 4, day: 'Saturday', title: 'Neurologist', time: '04:00 PM', icon: Brain, status: 'scheduled' }
  ],
  weeklyActivity: [
    {
      day: 'Mon',
      bars: [
        { height: 50, color: '#00cfff' },
        { height: 70, color: '#2e3192' },
        { height: 30, color: '#c0c0c0' }
      ],
      label: 'Mon'
    },
    {
      day: 'Tue',
      bars: [
        { height: 40, color: '#00cfff' },
        { height: 60, color: '#2e3192' }
      ],
      label: 'Tue'
    },
    {
      day: 'Wed',
      bars: [
        { height: 30, color: '#00cfff' },
        { height: 50, color: '#2e3192' },
        { height: 40, color: '#c0c0c0' }
      ],
      label: 'Wed'
    },
    {
      day: 'Thu',
      bars: [
        { height: 60, color: '#00cfff' },
        { height: 40, color: '#2e3192' },
        { height: 50, color: '#c0c0c0' }
      ],
      label: 'Thu'
    },
    {
      day: 'Fri',
      bars: [
        { height: 70, color: '#00cfff' },
        { height: 30, color: '#2e3192' }
      ],
      label: 'Fri'
    },
    {
      day: 'Sat',
      bars: [
        { height: 50, color: '#00cfff' },
        { height: 60, color: '#2e3192' },
        { height: 40, color: '#c0c0c0' }
      ],
      label: 'Sat'
    },
    {
      day: 'Sun',
      bars: [
        { height: 20, color: '#00cfff' },
        { height: 30, color: '#2e3192' }
      ],
      label: 'Sun'
    }
  ]
};
export default appointmentData;
