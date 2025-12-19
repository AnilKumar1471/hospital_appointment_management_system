import React from 'react'
import { NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
            <nav className='navbar'>
                <p className='logo-name'>General <br /><b>Hospital</b></p>
                <NavLink to="/" end className="nav-link">
                    Home
                </NavLink>

                <NavLink to="/services" end className="nav-link">
                    Services
                </NavLink>

                <NavLink to="/about" end className="nav-link">
                    About
                </NavLink>

                <NavLink to="/contact" end className="nav-link">
                    Contact us
                </NavLink>
                <button  className='apn-btn'>
                    <b>Book Appointment</b>
                </button>
            </nav>
    )
}

export default Navbar