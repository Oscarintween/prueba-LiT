import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div id='navbar-container'>
      <ul className='navbar__ul'>
        <li className='navbar__li more'>Get involved <img className='navbar__more-icon' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxko8FEz44oDExWQqtw1uFD4SADsL7sNxsLA&usqp=CAU" alt="" /></li>
        <li className='navbar__li more' >Founders & Investors <img className='navbar__more-icon' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxko8FEz44oDExWQqtw1uFD4SADsL7sNxsLA&usqp=CAU" alt="" /></li>
        <li className='navbar__li'>Chapters</li>
        <li className='navbar__li'>Blog</li>
        <li className='navbar__li'>Tiendita</li>
        <li className='navbar__li'><button className='donate-button'>Donate</button></li>
      </ul>
    </div>
  )
}

export default Navbar