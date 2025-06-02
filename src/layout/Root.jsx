import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Apps from '../Pages/app/Apps';
import Profile from '../Pages/Profile/Profile';
import { Outlet } from 'react-router';
import Banner from '../components/banner/Banner';
import Footer from '../components/footer/Footer';

const Root = () => {
    return (
        <div>
             <nav className='w-11/12 mx-auto py-4'>
                <Navbar></Navbar>
             </nav>
             <main>
                <section className='w-11/12 mx-auto'>
                    <Banner></Banner>
                </section>

                <Outlet></Outlet>
                <section className='w-11/12 mx-auto'>
                    
                    <Apps></Apps>
                </section>
             </main>
             <footer className='mt-8'>
                <Footer></Footer>
             </footer>
        </div>
    );
};

export default Root;