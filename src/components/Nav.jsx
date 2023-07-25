import React from 'react'
import xiaomi from '../assets/xiaomi.png'
import search from '../assets/search.png'
import store from '../assets/store.png'

export default function Nav() {
    return (
        <nav className='nav-wrapper'>
            <div className='nav-content'>
                <ul className='list-styled'>
                    <li>
                        <img src={xiaomi} style={{width: "2.5rem", height: "2.5rem"}} alt='Xiaomi' />
                    </li>
                    <li>
                        <a className='link-styled'>Store</a>
                    </li>
                    <li>
                        <a className='link-styled'>Phones</a>
                    </li>
                    <li>
                        <a className='link-styled'>Watch</a>
                    </li>
                    <li>
                        <a className='link-styled'>earphones</a>
                    </li>
                    <li>
                        <a className='link-styled'>Tv & Home</a>
                    </li>
                    <li>
                        <a className='link-styled'>Entretenimient</a>
                    </li>
                    <li>
                        <a className='link-styled'>Support</a>
                    </li>
                    <li>
                        <img src={search} alt="Search" />
                    </li>
                    <li>
                        <img src={store} alt="Store" />
                    </li>
                </ul>
            </div>
        </nav>
    )
}
