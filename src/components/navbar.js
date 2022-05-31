import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='nav-wrapper'>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/category">Category</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar