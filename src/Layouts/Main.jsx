import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default Main;