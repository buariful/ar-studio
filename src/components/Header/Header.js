import { MenuAlt2Icon, MenuIcon, XIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png'
const Header = () => {
    const [icon, setIcon] = useState(true);
    const iconChange = () => {
        setIcon(!icon)
    }
    return (
        <div className='bg-teal-500 sticky top-0'>

            <div className="w-11/12 mx-auto" >
                {icon ? <MenuIcon className='w-10 md:hidden' onClick={iconChange}></MenuIcon> : <XIcon className='w-10 md:hidden' onClick={iconChange}></XIcon>}


                <div className={`${icon ? "hidden" : "block"} md:flex justify-around items-center`}>
                    <Link to='/home' className={`flex font-semibold items-center`}><img src={logo} alt="" className='w-12 mr-2' /> AR STUDIO</Link>

                    <div className='md:flex'>
                        <Link to='/home' className='block py-8 text-white ml-3 md:ml-5 font-semibold'>Home</Link>
                        <Link to='/About' className='block py-8 text-white ml-3 md:ml-5 font-semibold'>About</Link>
                        <Link to='/Blog' className='block py-8 text-white ml-3 md:ml-5 font-semibold'>Blog</Link>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Header;