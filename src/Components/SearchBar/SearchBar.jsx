import React from 'react'
import './searchBar.css'

const SearchBar = () => {
  return (
    <div>
      <div id='Search-filter'>
        <h2>Search by filters</h2>
        <form>
          <input 
            id='functional-input'
            placeholder='Functional Area'>
          </input>

          <input
            id='seniority-input'
            placeholder='Seniority'>
          </input>

          <input
          id='perks-input' 
          placeholder='Perks'>
          </input>

          <input
          id='location-input'
          placeholder='Location'>
          </input>

        </form>
        <span className='line-break'></span>
        <h2>Search by keywords</h2>
        <div id='keywords-section'>
          <div>
            <input 
            id='keywords-input' 
            placeholder='Keywords'
            />
          </div>
          <div className='order-by-container'>
            <p>Order by:</p>
            <button className='square-button recent'>Recent</button>
            <button className='square-button companies-az'>Companies A-Z</button>
          </div>
        </div>
        
       
      </div>
    </div>
    
  )
}

export default SearchBar