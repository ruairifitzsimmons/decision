import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './MainSection.css';

function MainSection({
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
        <canvas className="canvas"></canvas>
        <div className={lightBg ? 'home_main-section' : 'home_main-section lightBg'}>
            <div className="container">
                <div className="row home_main-row"
                style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                    <div className="col home_main-col">
                        <div className="home_main-text-wrapper">
                            <div className="top-line">{topLine}</div>
                                <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                                    <p className={lightTextDesc ? 'home_main-subtitle' : 'home_main-subtitle dark'}
                                    >{description}</p>
                                    <Link to="/contact">
                                        <Button buttonStyle='style-primary' buttonSize='size-auto' arrow='arrow-light'>{buttonLabel1}</Button>
                                    </Link>
                                    <Link to="/contact">
                                        <Button buttonStyle='style-secondary' buttonSize='size-auto'>{buttonLabel2}</Button>
                                    </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className='home_main-img-wrapper'>
                            <img src={img} alt={alt} className='home_main-img'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default MainSection