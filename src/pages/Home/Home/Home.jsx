import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import DataTabs from '../DataTabs/DataTabs';
import { useLoaderData } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'


const Home = () => {
    const toys = useLoaderData()
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return (
        <div>
            <Banner></Banner>
            <DataTabs toys={toys}></DataTabs>
        </div>
    );
};

export default Home;