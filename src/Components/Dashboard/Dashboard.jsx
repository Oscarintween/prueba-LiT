import React from 'react'
import './dashboard.css'

const Dashboard = () => {
  return (
    <div id='dashboard-container'>
      <div className="dashboard__lit-logo">
        <img id='dashboard__lit-logo' src="https://latinasintech.org/wp-content/uploads/2019/11/Logo_LiT-1.png" alt="" />
      </div>
      <div className="dashboard__menu">
        <ul className='dashboard__ul'>
          <li>Dashboard</li>
          <li className='dashboard__li lit-recruit'>LiT Recruit <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxko8FEz44oDExWQqtw1uFD4SADsL7sNxsLA&usqp=CAU" alt="more-icon" /></li>
          <li className='dashboard__li'>Events</li>
          <li className='dashboard__li'>Level up</li>
          <li className='dashboard__li'>LiT Community</li>
          <li><img className='dashboard__envolope' src="https://www.linkpicture.com/q/Envelope.png" alt="envolope" /></li>
          <li className='dashboard__li more'><span id='dashboard__profile-pic'></span><img className='dashboard__more-icon' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxko8FEz44oDExWQqtw1uFD4SADsL7sNxsLA&usqp=CAU" alt="more-icon"/></li>
        </ul>
      </div>
    </div>
  )
}

export default Dashboard