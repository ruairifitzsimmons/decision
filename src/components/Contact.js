import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
    return (
        <>
            <div className="contact-container">
                <div className="row contact-row">
                    <div className="col contact-col">
                        <form className="contact-form" action="">
                            <h1>Get in touch</h1>

                            <label htmlFor="">Name</label>
                            <input placeholder="name" type="text"/>

                            <label htmlFor="">Email</label>
                            <input placeholder="email" type="text"/>

                            <label htmlFor="">Message</label>
                            <textarea placeholder="message" type="text"/>

                            <Link to="/contact">
                                <Button buttonStyle='style-primary' buttonSize='size-auto' arrow='arrow-light'>Submit</Button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact