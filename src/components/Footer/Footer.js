import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-neutral-900 text-yellow-50 py-4 text-center mt-10'>
            All the rights reserved by <Link to='/home' className='font-semibold text-xl text-teal-600'>AR STUDIO</Link>
        </div>
    );
};

export default Footer;