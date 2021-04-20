import React from 'react';
import { Button } from './Button';
import './Services.css';
import { MdAddCircleOutline, MdWallpaper, MdTimeline } from 'react-icons/md';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-scroll';

function Pricing() {
  return (
    <IconContext.Provider value={{ size: 48 }} className="icons">
      <div className='service_section' id="services">
        <div className='service_wrapper'>
          <div className='service_container'>
            <div className='service_container-card'>
              <div className='service_container-cardInfo'>
                <div className='icon'>
                  <MdWallpaper />
                </div>
                <h3>Graphic Design</h3>
                <p>Stunning visuals & enticing graphics. We create logos, social content, YouTube thumbnails & more! </p>
                <Link to='contact-container' smooth={true} duration={1000}>
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
                <p>Strengthen up your social media platforms with brand-tailored images, infographics & stories.</p>
                <Link to='contact-container' smooth={true} duration={1000}>
                  <Button buttonStyle='style-secondary' arrow='arrow-dark'>
                    Learn more
                  </Button>
                </Link>
              </div>
            </div>
            <div className='service_container-card'>
              <div className='service_container-cardInfo'>
                <div className='icon'>
                  <MdTimeline />
                </div>
                <h3>Marketing</h3>
                <p>Build your audience and capture the attention of more, with enticing graphics & strong branding.</p>
                <Link to='contact-container' smooth={true} duration={1000}>
                  <Button buttonStyle='style-secondary' arrow='arrow-dark'>
                    Learn more
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;