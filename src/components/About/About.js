import React from 'react';
import { ArchiveIcon } from '@heroicons/react/solid'

const About = () => {
    return (
        <div>
            <ArchiveIcon className='w-24 text-teal-600 mx-auto'></ArchiveIcon>
            <div className='w-11/12 mx-auto text-center'>
                <h1 className='text-teal-800 text-4xl font-bold my-5'>About Me</h1>
                <p>Hi this is me, Ariful Islam. I am a student of Mathematics. I am doing well with my studies. But this is not my passion. I want to do something well in It section. Now I am learning web developement. My first aim to gather skill as much as possible about web developement. After that i will have to find a suitable job for my career. Because if don't step into a professional space, I will lost my skills. I know basic skills as html5, css3, bootstrap, tailwind etc.Than I will learn advance technolgies like React, Mongodb, Node js . </p>
            </div>
        </div>
    );
};

export default About;