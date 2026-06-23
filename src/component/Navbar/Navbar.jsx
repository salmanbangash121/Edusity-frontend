import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
    return (
        <nav className='container'>
            <img src={logo} alt="" className='logo' />
            <nav className="container">
                <img src={logo} alt="Logo" className="logo" />

                <ul>
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#program">Program</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#campus">Campus</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#contact" className="btn">Contact Us</a></li>
                </ul>
            </nav>
        </nav>
    )
}

export default Navbar
