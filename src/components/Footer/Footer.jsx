import React from 'react'
import './Footer.scss'
import logo13 from '../../image/batman-logo-11530959634fovhjqquqe.png'

export default function Footer() {
  return (<>
    <div className='line-footer'></div>
    <div className='main-footer-container'>
      <div className='left-block'></div>
      <div className='centr-block'></div>
      <div className='right-block'>
        <div className='top-block'></div>
        <div className='bottom-block'><img src={logo13} /> </div>
      </div>
    </div>
  </>)
}
