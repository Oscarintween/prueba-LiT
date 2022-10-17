import React from 'react'
import BackToJobs from '../../Components/backToJobs/BackToJobs'
import Dashboard from '../../Components/Dashboard/Dashboard'
import Navbar from '../../Components/Navigation/Navbar'
import jobData from '../../data'
import { useParams } from 'react-router-dom'
import './jobDetails.css'

const JobDetails = () => {

  const {id} = useParams()
  const jobDetails = jobData.filter((job)=> job.id===id)

  return (
    <div id='job-details'>
      <Navbar />
      <Dashboard />
      <BackToJobs />

      <div>
        <h1 className='job-details-header'>{jobDetails[0]["Job Title"]}</h1>
      </div>

      <div id='company-name-badges'>
        <div className='company-logo-name'>
          <div className='company-logo'>
          </div>
          <div>
            <p className='company-name'>{jobDetails[0]["Company Name"]}</p>
            <p className='company-tagline'>Company tagline</p>
            <p className='time-posted'> Posted {jobDetails[0]["Time"]}</p>
          </div>
        </div>

        <div>
          badges
        </div>
      </div>

      <div className='about-the-job'>
        <div className='job-info' >
          <div className='job-info__details'>
            <p>{jobDetails[0]["Job Type"]}</p>
            <p>{jobDetails[0]["Location Full"]}</p>
            <p>{jobDetails[0]["Seniority"]}</p>
          </div>
          {}
           <div className='contingency-warning'>
            <div className='warning'>
              <img className='warning-1' src="https://www.linkpicture.com/q/_16.png" alt="" />
              <img className='warning-2' src="https://www.linkpicture.com/q/Vector-5_1.png" alt="warning" />
            </div>
            <div>
            <p>This may be a contingent job offer. For more information on Contingency Jobs, please read this article:
              <span>“Contingency Jobs: Pros and Cons. All you Need to Know if They Suit Your Professional Goals.”</span>
            </p>
            </div>
              
           </div>
           <button className='apply-button'>Apply</button>
        </div>  
        <div className='job-description'>
          <h1>About the job</h1>
          <p>As the first all-in-one virtual venue for live online events, Hopin brings people together in a highly interactive and engaging online experience that feels just like an in-person event, only without the barriers. Whether it’s a 50-person meetup, or a 50,000-person conference—any type of event organizer can host a Hopin. As the first all-in-one virtual venue for live online events, Hopin brings people together in a highly interactive and engaging online experience that feels just like an in-person event, only without the barriers. Whether it’s a 50-person meetup, or a 50,000-person conference—any type of event organizer can host a Hopin. 
          </p>
          <br />
          <p>As the first all-in-one virtual venue for live online events, Hopin brings people together in a As the first all-in-one virtual venue for live online events, Hopin brings people together lorem ipsum dolor sit amet...</p>
        </div>
      </div>
      <div className='about-the-company'>
        <div>
          <h1>About The Company</h1>
          <p>As the first all-in-one virtual venue for live online events, Hopin brings people together in a highly interactive and engaging online experience that feels just like an in-person event, only without the barriers. Whether it’s a 50-person meetup, or a 50,000-person conference—any type of event organizer can host a Hopin As the first all-in-one virtual venue for live online events, Hopin brings people together in a highly interactive and engaging online experience that feels just like an in-person event, only without the barriers. Whether it’s a 50-person meetup, or a 50,000-person conference—any type of event organizer can host a Hopin.</p>
          <button className='see-profile-button'>See Company profile</button>
        </div>
        <div className='grey-rectangle'>
        </div> 
      </div>
      <div className='similar-jobs'>
        <h1>Similar Jobs</h1>
      </div>
    </div>
  )
}

export default JobDetails