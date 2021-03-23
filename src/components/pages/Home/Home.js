import React from 'react';
import MainSection from '../../MainSection';
import Section from '../../Section';
import {homeOne, homeTwo} from './Data';
import Services from '../../Services';

function Home() {
    return (
        <>
            <MainSection {...homeOne}/>
            <Services/>
            <Section {...homeTwo}/>
        </>
    )
}

export default Home