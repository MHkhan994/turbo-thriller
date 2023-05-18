import React from 'react';
import Banner from '../Banner/Banner';
import DataTabs from '../DataTabs/DataTabs';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const toys = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <DataTabs toys={toys}></DataTabs>
        </div>
    );
};

export default Home;