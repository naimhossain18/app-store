import React from 'react';
import { Link, useLoaderData } from 'react-router';
import AppCard from './AppCard';

const Apps = () => {

    const appsData = useLoaderData();
    // console.log(appsData)


    return (
        <div>
           <div className='grid grid-cols-3 w-11/12 mx-auto items-center justify-items-center'>
            {
            appsData.map(appData => <AppCard appData={appData} ></AppCard>)
           }

           </div>
            <Link to={'/'}>back to home</Link>
        </div>
    );
};

export default Apps;