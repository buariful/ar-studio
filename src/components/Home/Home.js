import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div>
            {/* banner */}
            <div className='banner flex'>
                <div className="md:w-5/12 bannerText mt-8">
                    <h1 className='text-left text-4xl text-black font-bold'>AR STUDIO</h1>
                    <h3 className='text-2xl mt-2 mb-4'>A studio of creativity, Experts and hospitality.</h3>
                    <p className='mb-10'>Our in-house photography services team made up of professional photographers can add value to your website with high-resolution team photos, corporate event photography and product photography.</p>

                    <Link to='/blog' className='py-2 px-10 bg-teal-500 text-white rounded-md '>Blog</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;