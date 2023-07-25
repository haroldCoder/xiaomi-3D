import React from 'react'
import xiaomi from '../assets/xiaomi-img.jpg'

export default function Jumbotron() {
  return (
    <div className="jumbotron-section">
        <h2 className='title'>New</h2>
        <h2 className='subtitle'>Xiaomi redmi 10</h2>
        <p className='text'>Big and Bigger.</p>
        <span className='description'>
            From $20/mo. for 24 mo. or 600 before trade-in
        </span>
        <ul className="links">
            <li>
                <button className='button'>Buy</button>
            </li>
            <li style={{background: "transparent"}}>
                <a className='link'>Learn more</a>
            </li>
        </ul>
        {/* <img className='xiaomi-img' src={xiaomi} alt="Xiaomi redmi 10" /> */}
    </div>
  )
}
