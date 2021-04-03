import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from './Button'
import './Navbar.css'
import { IconContext } from 'react-icons/lib'

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
      }, []);

    window.addEventListener('resize', showButton)

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                {/* Navbar */}
                    <div className='navbar'>
                        <div className='navbar-container container'>
                            {/* Navbar Logo*/}
                            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                                <img src="images/logo-white.png" alt="Alt" className='navbar-icon'/>
                                {/*<span className='decision'>Decision</span>*/}
                            </Link>
                            
                            {/* Navbar Menu Toggler */}
                            <div className='menu-icon' onClick={handleClick}>
                                {click ? <FaTimes/> : <FaBars/>}
                            </div>

                            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                                <li className='nav-item'>
                                    <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                        About
                                    </Link>
                                </li>

                                <li className='nav-item'>
                                    <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                        Services
                                    </Link>
                                </li>

                                <li className='nav-item'>
                                    <Link to='/portolio' className='nav-links' onClick={closeMobileMenu}>
                                        Portfolio
                                    </Link>
                                </li>

                                {/* Contact Button */}
                                <li className='nav-item'>
                                    {button ? (
                                        <Link to='/contact' className='nav-links'>
                                            <Button buttonStyle='style-transparent'
                                            buttonSize='size-auto'
                                            arrow='arrow-light'>
                                                Contact
                                            </Button>
                                        </Link>
                                    ) : (
                                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                            <Button buttonStyle='style-primary' 
                                            buttonSize='size-auto'
                                            arrow='arrow-light'>
                                                Contact
                                            </Button>
                                        </Link>
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>
            </IconContext.Provider>
        </>
    )
}


export default Navbar;