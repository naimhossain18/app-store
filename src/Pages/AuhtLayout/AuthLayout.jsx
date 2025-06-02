import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/footer/Footer';

const AuthLayout = () => {
    return (
        <div>
             <nav className='w-11/12 mx-auto py-4'>
                <Navbar></Navbar>
             </nav>
             <main>
                <Outlet>
                    
                </Outlet>
             </main>

             <footer className='mt-8'>
                <Footer></Footer>
             </footer>
            
        </div>
    );
};

export default AuthLayout;