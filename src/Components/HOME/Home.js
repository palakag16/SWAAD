import React from 'react';
import Aboutcheif from './Aboutcheif';
import Footer from './Footer';
import Homebanner from './Homebanner';
import Location from './Location';
import Makereservation from './Makereservation';
import Menusec from './Menusec';
import Homegallery from './Homegallery';

const Home = () => {
    return (
        <>
        
        <Homebanner/>
        <Menusec />
        <Makereservation/>
            <Aboutcheif/>
            <Location/>
            <br></br>
            <Homegallery/>
            <Footer/>
        </>
    )
}

export default Home
