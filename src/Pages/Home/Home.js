import React from 'react';
import jobInfo from '../../data'
import './Home.css';
import Navbar from '../../Components/Navigation/Navbar';
import Dashboard from '../../Components/Dashboard/Dashboard'
import SearchBar from '../../Components/SearchBar/SearchBar'
import JobCard from '../../Components/JobCard/JobCard';
import { useNavigate } from 'react-router-dom';



function Home() {
const navigate = useNavigate()


  return (
    <div className="Home">
      <header className="Home-header">
        <Navbar />
        <Dashboard />
      </header>
      <main>
        <SearchBar />
        {
          jobInfo.map((job,index)=>(
            <div key = {index} onClick={()=>navigate(`/${job.id}`)}>
            <JobCard 
              companyName = {job["Company Name"]}  
              jobTitle = {job["Job Title"]}
              time = {job.Time}
              type = {job["Job Type"]}
              location = {job["Location Full"]}
              seniority = {job.Seniority}
            />
            </div>
            
          ))
        }
        
      </main>
    </div>
  );
}

export default Home;
