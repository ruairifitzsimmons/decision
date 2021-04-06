import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from './Button';
import './Contact.css';

function ContactForm() {
    const [state, handleSubmit] = useForm("xayawrdl");
    if (state.succeeded) {
        return [<ContactForm />,
        <p className="thanks-return">Thanks, your submission has been sent 🚀</p>];
    }
    return (
            <div className="contact-container">
                <div className="row contact-row">
                    <div className="col contact-col">
                        <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
                            <h1>Get in touch</h1>

                            <label htmlFor="name">Name</label>
                            <input name="name" id="name" type="text"placeholder="name"/>
                            <ValidationError prefix="Name" field="name" errors={state.errors}/>

                            <label htmlFor="email">Email</label>
                            <input name="email" id="email" type="email" placeholder="email"/>
                            <ValidationError prefix="Email" field="email" errors={state.errors}/>

                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" type="text" placeholder="message"/>
                            <ValidationError prefix="Message" field="message" errors={state.errors}/>

                            <Button buttonStyle='style-primary' buttonSize='size-full' arrow='arrow-light' type="submit" disabled={state.submitting}>
                                Submit
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
    )
}

function Form() {
    return (
        <ContactForm />
    );
}

export default Form;