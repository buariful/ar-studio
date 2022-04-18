import { AcademicCapIcon } from '@heroicons/react/solid';
import React from 'react';

const Blog = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <AcademicCapIcon className='w-24 text-teal-700 mt-4 mb-6 mx-auto'></AcademicCapIcon>
            <div className='my-5'>
                <h1 className="text-3xl font-semibold text-center">
                    Difference between <span className='text-teal-800'>authorization</span> and <span className='text-teal-800'>authentication</span>?
                </h1>
                <table className="table-auto border-collapse border border-slate-400 mt-5">
                    <tbody className='text-left'>
                        <tr>
                            <td className='border pl-8 py-4 border-slate-300 ... '>Authentication verifies who the user is.</td>
                            <td className='border pl-8 py-4  border-slate-300 ...'>Authorization determines what resources a user can access. </td>
                        </tr>
                        <tr>
                            <td className='border pl-8 py-4  border-slate-300 ...'>Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</td>
                            <td className='border pl-8 py-4  border-slate-300 ...'>Authorization works through settings that are implemented and maintained by the organization.</td>
                        </tr>
                        <tr>
                            <td className='border pl-8 py-4  border-slate-300 ...'>Authentication is the first step of a good identity and access management process.</td>
                            <td className='border pl-8 py-4  border-slate-300 ...'>Authorization always takes place after authentication.</td>
                        </tr>
                        <tr>
                            <td className='border pl-8 py-4  border-slate-300 ...'>Authentication is visible to and partially changeable by the user.</td>
                            <td className='border pl-8 py-4  border-slate-300 ...'>Authorization isn't visible to or changeable by the user.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="my-5">
                <h1 className="text-3xl font-semibold text-center">
                    Why are you using <span className='text-teal-800'>firebase</span> What other options do you have to implement authentication <span className='text-teal-800'>authentication</span>?

                </h1>

                <p className='mt-4 font-semibold'>Firebase is basically a Google-backed app development platform which was initially developed by James Tamplin and Andrew Lee in 2011. There are many alternatives of firebase.such as Auth0, Octa, MongoDb, Passport etc. I use Firebase because it is :</p>

                <ul className='mt-4'>
                    <li>Reliable and Extensive Databases</li>
                    <li>Fast and Safe Hosting</li>
                    <li>Google Analytics</li>
                    <li>Firebase Cloud Messaging for Cross-Platforms</li>
                    <li>Free Multi-Platform Firebase Authentication</li>
                    <li>Firebase Testing Services to Improve App Quality.</li>
                </ul>
            </div>

            <div className="my-5">
                <h1 className="text-3xl font-semibold text-center">What other services does <span className='text-teal-800'>firebase</span> provide other than authentication ?</h1>
                <p className="mt-4 font-semibold">
                    Hosting, Serverless applications, Machine learning capabilities, Firebase testing service , Configurations and improvements etc,
                </p>
            </div>
        </div >
    );
};

export default Blog;