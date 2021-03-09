import React from 'react';
import MainSection from '../../MainSection';
import {homeOne} from './Data';

function Home() {
    return (
        <>
            <MainSection {...homeOne}/>
        </>
    )
}

export default Home