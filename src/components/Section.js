import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Section.css';

function Section({
    lightBg,
    topLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel1,
    buttonLabel2,
    img,
    alt,
    imgStart
}) {
    return (
        <>
        <div className={lightBg ? 'home_section' : 'home_section lightBg'}>
            <div className="section-container">
                <div className="row section-row"
                style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                    <div className="col section-col">
                        <div className="section-text-wrapper">
                            <div className="top-line">{topLine}</div>
                                <h1 className={lightText ? 'section-heading' : 'heading dark'}>{headline}</h1>
                                    <p className={lightTextDesc ? 'section-subtitle' : 'section-subtitle dark'}
                                    >{description}</p>
                                    <Link to="/contact">
                                        <Button buttonStyle='style-primary' buttonColor='purple' buttonSize='size-auto' arrow='arrow-light'>{buttonLabel1}</Button>
                                    </Link>
                        </div>
                    </div>
                    <div className="col section-col">
                        <div className='section-img-wrapper'>
                            <img src={img} alt={alt} className='section-img'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Section