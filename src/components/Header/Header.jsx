import React from 'react'
import './Header.scss'
import logo1 from '../../image/Warner-Bros.-Logo-1280x640.jpg'

export default function Header() {
  return (<>
    <div className='main-header-container'>
      <div className='auxiliary-container'> 
        <div className='first'><img src={logo1} /></div>
        <div className='second'></div>
      </div>
      <div className='third'></div>
    </div>
    <div className='line'></div>
  </>)
}
