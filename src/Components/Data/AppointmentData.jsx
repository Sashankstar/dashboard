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
    { day: 'Mon', appointments: 2, label: 'M' },
    { day: 'Tue', appointments: 1, label: 'T' },
    { day: 'Wed', appointments: 3, label: 'W' },
    { day: 'Thu', appointments: 2, label: 'T' },
    { day: 'Fri', appointments: 1, label: 'F' },
    { day: 'Sat', appointments: 2, label: 'S' },
    { day: 'Sun', appointments: 0, label: 'S' }
  ]
};
export default appointmentData