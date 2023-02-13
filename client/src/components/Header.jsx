import React from 'react'
import logo from '../assets/react.svg'

export default function Header() {
    return (
        <div className='navbar bg-light mb-4 p-8'>
            <div className="container">
                <div className="navbar-brand" href='/'>
                    <div className="d-flex">
                        <img src={logo} alt="logo" className='mr-2' />
                        <div>PM</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
