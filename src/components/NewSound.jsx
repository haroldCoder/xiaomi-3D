import React from 'react'

function NewSound() {
    return (
        <div className='sound'>
            <section>
                <p className='title'>New Sound System</p>
                <h2 className='subtitle2'>Feel the base.</h2>
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
            </section>
            <section>

            </section>
        </div>
    )
}

export default NewSound