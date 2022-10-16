import React from 'react'
import './jobCard.css'


const JobCard = (props) => {
  return (



    <div id='job-card-container'>
      <div className='section-1'>
        <div>
          <span className='grey-box'></span>
        </div>
        <div>
          <h3 className='job-title'>{props.jobTitle}</h3>
          <h4 className='company-name'>{props.companyName}</h4>
          <p className='date-posted'>Posted {props.time}</p>
        </div>
      </div>
      <div className='job-details'>
        <p className='job-type'>{props.type}</p>
        <p className='location'>{props.location}</p>
        <p className='seniority'>{props.seniority}</p>
      </div>
      <div>
        <p>picture</p>
        <p>picture</p>
      </div>
    </div>
  )
}

export default JobCard