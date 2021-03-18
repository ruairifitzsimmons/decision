import React from 'react';
import { Button } from './Button';
import './Services.css';
import { IoIosRocket } from 'react-icons/io';
import { BsXDiamondFill } from 'react-icons/bs';
import { FaPencilRuler } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#EAEAEA', size: 48 }}>
      <div className='service_section'>
        <div className='service_wrapper'>
          <div className='service_container'>
            <div className='service_container-card'>
              <div className='service_container-cardInfo'>
                <div className='icon'>
                  <FaPencilRuler />
                </div>
                <h3>Graphic Design</h3>
                <p>Design to us is something magical - we are lucky that our clients let us get creative and build their products</p>
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
                  <BsXDiamondFill />
                </div>
                <h3>Something</h3>
                <p>Relevant information will go in here regarding the topic. Not sure about using services or the platforms the services are on</p>
                <Button buttonStyle='style-secondary' arrow='arrow-dark'>
                  Learn more
                </Button>
              </div>
            </div>
            <div className='service_container-card'>
              <div className='service_container-cardInfo'>
                <div className='icon'>
                  <IoIosRocket />
                </div>
                <h3>Marketing</h3>
                <p>We strategically grow, engage and monetize your social media platforms.
                  Each post will increase your brands influence
                </p>
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