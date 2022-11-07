import React from 'react';
import { Outlet } from 'react-router-dom';
import Headers from '../components/Headers/Headers';
import Footer from '../shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Headers></Headers>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;