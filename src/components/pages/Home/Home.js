import React from 'react';
import MainSection from '../../MainSection';
import Section from '../../Section';
import SectionTwo from '../../SectionTwo';
import {homeOne, homeTwo, homeThree} from './Data';
import Services from '../../Services';

function Home() {
    return (
        <>
            <MainSection {...homeOne}/>
            <Services/>
            <Section {...homeTwo}/>
            <SectionTwo {...homeThree}/>
        </>
    )
}

export default Home