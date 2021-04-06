import React from 'react';
import MainSection from '../../MainSection';
import Services from '../../Services';
import Section from '../../Section';
import SectionTwo from '../../SectionTwo';
import Contact from '../../Contact';
import {homeOne, homeTwo, homeThree} from './Data';


function Home() {
    return (
        <>
            <canvas className="canvas-top"></canvas>
            <MainSection {...homeOne}/>
            <Services/>
            <Section {...homeTwo}/>
            <SectionTwo {...homeThree}/>
            <Contact {...Contact}/>
        </>
    )
}

export default Home