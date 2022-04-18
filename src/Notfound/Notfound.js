import React from 'react';
import { Link } from 'react-router-dom';
import image from '../img/404_img.jpg'

const Notfound = () => {
    return (
        <div className='text-center'>
            <img src={image} alt="404 imgae" className='mx-auto w-44' />
            <h1 className='mt-5 mb-3 text-6xl text-teal-600 font-bold'>Oops....!</h1>
            <p>There are nothing to show . Go back to <span className='text-teal-700 font-semibold'>{<Link to='/home'>Home</Link>}</span> page</p>
        </div>
    );
};

export default Notfound;