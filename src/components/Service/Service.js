import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { name, lens, lighting, metadata, hosting, editing, price, img } = props.data;
    return (
        <div className='bg-teal-100 px-4 rounded-md '>
            <img src={img} alt="" className='w-full mt-4' />
            <div className="mt-4 ml-3">
                <h1 className="text-2xl font-semibold text-teal-600"> {name} </h1>
                <ul className='mt-4'>
                    <li>Professional lighting setup <span className='text-teal-700 text-right font-medium'>{lighting}</span></li>
                    <li>Camera and lens kits <span className='text-teal-700 text-right font-medium'>{lens}</span></li>
                    <li>Multi-shooter options <span className='text-teal-700 text-right font-medium'>{metadata}</span></li>
                    <li>Library hosting <span className='text-teal-700 text-right font-medium'>{hosting}</span></li>
                    <li>Photo editing <span className='text-teal-700 text-right font-medium'>{editing}</span></li>
                    <li>Price <span className='text-teal-700 text-right font-bold text-2xl'>${price}</span></li>
                </ul>
                <Link to='/cart' className='py-2 px-10 bg-teal-500 text-white rounded-md mt-10 block text-center'>Purchase</Link>
            </div>
        </div>
    );
};

export default Service;