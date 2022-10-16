import React from 'react'
import './backToJobs.css'
import { useNavigate } from 'react-router-dom'



const BackToJobs = () => {
    
    const frase = "<< Back to Jobs board"
    const navigate = useNavigate()


  return (
    <div className='back-to-jobs' onClick={()=>navigate('/')}>
        <h1>{frase}</h1>
    </div>
  )
}

export default BackToJobs