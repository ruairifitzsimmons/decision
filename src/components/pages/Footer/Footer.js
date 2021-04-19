import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
} from 'react-icons/fa';

function Footer() {
    const [state, handleSubmit] = useForm("xbjqjggw");
  if (state.succeeded) {
    return [<Footer />];
  }
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
                <label htmlFor="email">
                    <p className='footer-subscription-heading'>
                        Join my email list to recieve ideas, deals and freebies!
                    </p>
                </label>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time
                </p>

                {/* Form */}
                <div className='input-area'>
                    <form onSubmit={handleSubmit}>
                        <input 
                        className='footer-input'
                        id='email'
                        name='email'
                        type='email'
                        placeholder='email'/>
                        <ValidationError prefix="Email" field="email" errors={state.errors}/>
                        <Button type='submit' disabled={state.submitting} buttonStyle='style-primary' buttonColor='purple' buttonSize='size-auto' >
                            Subscribe
                        </Button>
                    </form>
                </div>
            </section>

            <section className='social-media'>
                <div className='social-media-wrap'>

                    {/* Socials */}
                    <div className='social-icons'>
                        <a className="sociallink" href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                            <FaFacebook/>
                        </a>
                        
                        <a className="sociallink" href="https://www.twitter.com/decisionthree" target="_blank" rel="noreferrer">
                            <FaTwitter/>
                        </a>

                        <a className="sociallink" href="https://www.instagram.com/decision.gg/" target="_blank" rel="noreferrer">
                            <FaInstagram/>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;