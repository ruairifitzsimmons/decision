import React from 'react';
import MainSection from '../../MainSection';
import {homeOne} from './Data';
import Services from '../../Services';

function Home() {
    return (
        <>
            <MainSection {...homeOne}/>
            <Services />
        </>
    )
}

export default Home