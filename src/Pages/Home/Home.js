import React from 'react';
import jobInfo from '../../data'
import './Home.css';
import Navbar from '../../Components/Navigation/Navbar';
import Dashboard from '../../Components/Dashboard/Dashboard'
import SearchBar from '../../Components/SearchBar/SearchBar'



function Home() {
console.log(jobInfo)


  return (
    <div className="Home">
      <header className="Home-header">
        <Navbar />
        <Dashboard />
      </header>
      <main>
        <SearchBar jobsInfo={jobInfo} />
      </main>
    </div>
  );
}

export default Home;
