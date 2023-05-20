import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import DataTabs from '../DataTabs/DataTabs';
import { useLoaderData } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Helmet } from 'react-helmet';
import Gallery from '../Gallery/Gallery';


const Home = () => {
    const toys = useLoaderData()
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return (
        <div>
            <Helmet>
                <title>Turbo Thriller - Homepage </title>
            </Helmet>
            <Banner></Banner>
            <Gallery></Gallery>
            <DataTabs toys={toys}></DataTabs>
        </div>
    );
};

export default Home;