import React from 'react';
import { Button } from './Button';
import './Services.css';
import { MdAddCircleOutline, MdWallpaper, MdTimeline } from 'react-icons/md';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <IconContext.Provider value={{ size: 48 }} className="icons">
      <div className='service_section'>
        <div className='service_wrapper'>
          <div className='service_container'>
            <div className='service_container-card'>
              <div className='service_container-cardInfo'>
                <div className='icon'>
                  <MdWallpaper />
                </div>
                <h3>Graphic Design</h3>
                <p>A short description would go here about the relevant topic. Sell it to them nicely, but don't bore them.</p>
                <Link to="/products">
                  <Button buttonStyle='style-secondary' arrow='arrow-dark'>
                    Learn more
                  </Button>
                </Link>
              </div>
            </div>
            <div className='service_container-card'>
              <div className='service_container-cardInfo'>
                <div className='icon'>
                  <MdAddCircleOutline />
                </div>
                <h3>Content Creation</h3>
                <p>A short description would go here about the relevant topic. Sell it to them nicely, but don't bore them.</p>
                <Button buttonStyle='style-secondary' arrow='arrow-dark'>
                  Learn more
                </Button>
              </div>
            </div>
            <div className='service_container-card'>
              <div className='service_container-cardInfo'>
                <div className='icon'>
                  <MdTimeline />
                </div>
                <h3>Marketing</h3>
                <p>A short description would go here about the relevant topic. Sell it to them nicely, but don't bore them.</p>
                <Button buttonStyle='style-secondary' arrow='arrow-dark'>
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;