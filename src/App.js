import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import JobDetails from './Pages/JobDetails/JobDetails'

const App = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:id' element={<JobDetails />} />
        </Routes>
    </div>
  )
}

export default App