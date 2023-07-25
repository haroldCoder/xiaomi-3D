import React from 'react'

export default function DisplaySection() {
  return (
    <div className='display'>
        <section style={{textAlign: "center"}}>
            <h2 className='title'>New</h2>
            <p className='text'>Brillant.</p>
            <span className='description'>
                A display that's up to 2x brighter in the sun.
            </span>
            <ul className="links">
                <li>
                    <button className='button'>Try</button>
                </li>
            </ul>
        </section>
    </div>
  )
}
