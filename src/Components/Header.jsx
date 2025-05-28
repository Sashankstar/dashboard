import React from 'react'
import { ArrowDown,  BarChart3, Bell, Calendar, Clock,  HelpCircle,  History, Home, MessageCircle,  Plus, Search, Settings } from 'lucide-react';
import HealthData from './Data/HealthData'
import './Header.css'
const Header = () => {
  return (
    <>
<div className='container' style={{display:"flex",}}>
  <div className="sidebar"style={{backgroundColor:"#eef2f4"}}>
     <div style={{display:"flex", alignItems: "center", gap: "10px",}}>
         <h1 style={{color:"lightseagreen"}}>Health<span style={{color:"black"}}>care.</span></h1>
       </div>
       <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
      <h1>General</h1>
      <span><Home/> Dashboard</span>
      <span><History/> History</span>
      <span><Calendar/> Calender</span>
      <span><Clock/> Appointement</span>
      <span><BarChart3/> Statistics</span>
    </div>
    <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
      <h1>Tools</h1>
      <span><MessageCircle/> Chat</span>
      <span><HelpCircle/> help</span>
    </div>
    <p><Settings/>settings</p>
  </div>

  <div className="bodypart" style={{ marginLeft: "190px", padding: "20px" }}>
  {/* Top bar: search and header */}
  <form style={{ display: "flex", alignItems: "center", position: "relative", gap: "50px" }}>
    <div>
      <Search style={{   position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", color: "#888" }} />
      <input type="text" name='search' placeholder='search...' style={{    paddingLeft: "30px", height: "30px", borderRadius: "4px", border: "1px solid", width: "350px"  }} />
    </div>
    <div className="user-profile">
      <img
        className="avatar"
        src="https://randomuser.me/api/portraits/men/75.jpg"
        alt="User Avatar"
      />
      <span className="user-name">John Doe</span>
    </div>
    <Bell style={{ color: 'blue', fill: "blue" }} />
    <button><Plus /></button>
  </form>
  <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
    <h1 style={{ color: "#04446f" }}>Dashboard</h1>
    <span style={{ marginTop: "25px" }}>This week <ArrowDown /></span>
  </div>
  <div style={{ display: "flex", gap: "60px", marginTop: "30px" }}>
    <div className='body-section' style={{ position: "relative" }}>
      <div className='body-image' style={{  boxShadow: "0px 4px 8px 20px #eef2f4",  width: "300px",  borderRadius: "20px",  backgroundColor: "#fff",  padding: "10px"}}>
        <img
          src="https://massageblisschicago.com/wp-content/uploads/2024/02/Myofascial-Release-Therapists-2.jpg"style={{ width: "100%", height: "550px" }}/>
        <div style={{ position: "absolute", top: "140px", left: "200px",   backgroundColor: "#3f51b5", color: "#fff", borderRadius: "10px",   padding: "6px 12px", fontSize: "12px", display: "flex", alignItems: "center", gap: "6px" }}>
          ❤️Healthy Heart
        </div>
        <div style={{   position: "absolute", top: "380px", left: "-10px",   backgroundColor: "#00c0cb", color: "#fff", borderRadius: "10px",   padding: "6px 12px", fontSize: "14px", display: "flex", alignItems: "center", gap: "6px" }}>
          🦵 Healthy Leg 
        </div>
      </div>
    </div>
    <div className="indicator" style={{   display: 'flex',   flexDirection: 'column',   gap: '20px',   justifyContent: 'center' }}>
      {HealthData.healthCards.map(card => {
        let progressWidth;
        if (card.severity === 'good') progressWidth = '90%';
        else if (card.severity === 'medium') progressWidth = '60%';
        else progressWidth = '30%';
        
        const emojis = {
          Lungs: "🫁",
          Teeth: "🦷",
          Bone: "🦴"
        };
        
        return (
          <div key={card.id} style={{   backgroundColor: '#f9fafb',   borderRadius: '16px',   padding: '20px',   width: '280px',   boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',   display: 'flex',   flexDirection: 'column',   gap: '8px' }}>
            <div style={{ fontSize: '24px' }}>{emojis[card.organ]} <span style={{
              fontSize: '18px', fontWeight: 'bold', color: '#1f2937' }}>{card.organ}</span></div>
            <div style={{ fontSize: '14px', color: '#6b7280' }}>Date: {card.date}</div>
            <div style={{   height: '10px',   width: '100%',   backgroundColor: '#e5e7eb',   borderRadius: '8px',   overflow: 'hidden',   marginTop: '8px' }}>
              <div style={{  width: progressWidth,  height: '100%',  backgroundColor: card.color,  transition: 'width 0.3s ease-in-out'}}></div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
 </div>
    </div>
  </>
  )
}

export default Header