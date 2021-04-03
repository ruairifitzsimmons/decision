import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
} from 'react-icons/fa';

function Footer() {
    return (
        <div className='footer-container'>

            <section className='footer-logo'>
                <div className='logo'>
                    <Link to='/' className='social-logo-link'>
                        <img src="../../images/logo-white.png" className='social-logo' alt=""/>
                    </Link>
                </div>
            </section>

            <section className='footer-subscription'>
                {/* Header */}
                <p className='footer-subscription-heading'>
                    Join my email list to recieve ideas, deals and freebies!
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time
                </p>

                {/* Form */}
                <div className='input-area'>
                    <form>
                        <input 
                        className='footer-input'
                        name='email'
                        type='email'
                        placeholder='email'/>
                        <Button buttonStyle='style-primary' buttonColor='purple' buttonSize='size-auto' >
                            Subscribe
                        </Button>
                    </form>
                </div>
            </section>

            <section className='social-media'>
                <div className='social-media-wrap'>

                    {/* Socials */}
                    <div className='social-icons'>
                        <Link
                        className='social-icon-link'
                        to='/'
                        target='_blank'
                        aria-label='Facebook'>
                            <FaFacebook/>
                        </Link>

                        <Link
                        className='social-icon-link'
                        to='/'
                        target='_blank'
                        aria-label='Twitter'>
                            <FaTwitter/>
                        </Link>

                        <Link
                        className='social-icon-link'
                        to=''
                        target=''
                        aria-label='Instagram'>
                            <FaInstagram/>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;