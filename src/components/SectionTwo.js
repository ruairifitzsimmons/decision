import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './SectionTwo.css';

function Section({
    lightBg,
    topLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel1,
    img,
    alt,
    imgStart
}) {
    return (
        <>
        <div className={lightBg ? 'home_section2 lightBg' : 'home_section2 darkBg'}>
            <div className="section-container">
                <div className="row sectiontwo-row"
                style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                    <div className="col sectiontwo-col">
                        <div className="sectiontwo-text-wrapper">
                            <div className="sectiontwo-top-line">{topLine}</div>
                                <h1 className={lightText ? 'sectiontwo-heading' : 'heading dark'}>{headline}</h1>
                                    <p className={lightTextDesc ? 'sectiontwo-subtitle' : 'sectiontwo-subtitle dark'}
                                    >{description}</p>
                                    <Link to="/contact">
                                        <Button buttonStyle='style-primary' buttonColor='blue' buttonSize='size-auto' arrow='arrow-light'>{buttonLabel1}</Button>
                                    </Link>
                        </div>
                    </div>
                    <div className="col sectiontwo-col">
                        <div className='sectiontwo-img-wrapper'>
                            <img src={img} alt={alt} className='sectiontwo-img'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Section