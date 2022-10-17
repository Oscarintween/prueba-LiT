import React, {useState} from 'react'
import './searchBar.css'
import { useNavigate } from 'react-router-dom'
import JobCard from '../JobCard/JobCard'

const SearchBar = ({jobsInfo}) => {

  const navigate = useNavigate()
  const [filteredData,setFilteredData]= useState(jobsInfo)
  
  const handleFunctionalChange = (e)=>{
    const userInput = e.target.value
    const filteredData = jobsInfo.filter((job)=>{
      return job["Functional Area"].toLowerCase().includes(userInput.toLowerCase())
    })
    setFilteredData(filteredData)
  }

  const handleSeniorityChange = (e)=>{
    const userInput = e.target.value
    const filteredData = jobsInfo.filter((job)=>{
      return job["Seniority"].toLowerCase().includes(userInput.toLowerCase())
    })
    setFilteredData(filteredData)
  }

  // const handlePerksChange = (e)=>{
  //   const userInput = e.target.value
  //   const filteredData = jobsInfo.filter((job)=>{
  //     return job.Perks.toLowerCase().includes(userInput.toLowerCase())
  //   })
  //   setFilteredData(filteredData)
  // }

  

  const handleLocationChange = (e)=>{
    const userInput = e.target.value
    const filteredData = jobsInfo.filter((job)=>{
      return job["Location Full"].toLowerCase().includes(userInput.toLowerCase())
    })
    setFilteredData(filteredData)
  }

  const handleKeywordsChange = (e)=>{
    const userInput = e.target.value
    const filteredData = jobsInfo.filter((job)=>{
      return job["Company Name"].toLowerCase().includes(userInput.toLowerCase())
       || job["Job Title"].toLowerCase().includes(userInput.toLowerCase())
       || job["Functional Area"].toLowerCase().includes(userInput.toLowerCase())
        
    })
    setFilteredData(filteredData)
  }


  return (
    <div>
      <div id='Search-filter'>
        <h2>Search by filters</h2>
        <form>
          <input 
            id='functional-input'
            placeholder='Functional Area'
            onChange={handleFunctionalChange}
            >
          </input>

          <input
            id='seniority-input'
            placeholder='Seniority'
            onChange={handleSeniorityChange}
          >
          </input>

          <input
          id='perks-input' 
          placeholder='Perks'
          // onChange={handlePerksChange}
          >
          </input>

          <input
          id='location-input'
          placeholder='Location'
          onChange={handleLocationChange}
          >
          </input>

        </form>
        <span className='line-break'></span>
        <h2>Search by keywords</h2>
        <div id='keywords-section'>
          <div>
            <input 
            id='keywords-input' 
            placeholder='Keywords'
            onChange={handleKeywordsChange}
            />
          </div>
          <div className='order-by-container'>
            <p>Order by:</p>
            <button className='square-button recent'>Recent</button>
            <button className='square-button companies-az'>Companies A-Z</button>
          </div>
        </div>
      </div>
      <div>
      {
          
          filteredData.map((job,index)=>(
            <div id='job-card' key = {index} onClick={()=>navigate(`/${job.id}`)}>
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
      </div>
    </div>
    
  )
}

export default SearchBar