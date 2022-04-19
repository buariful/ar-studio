import { sendEmailVerification } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'
import SocialLogin from '../SocialLogin/SocialLogin';

const Signup = () => {
    const emailRef = useRef('');
    const pasRef = useRef('');
    const confirmRef = useRef('');
    const [errors, seterror] = useState('')

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    const navigate = useNavigate('')



    const handlesubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = pasRef.current.value;
        const confirmpass = confirmRef.current.value;

        if (password !== confirmpass) {
            seterror("Please enter same password")
        }
        else if (error) {
            seterror(error.message)
        }
        else if (user) {
            navigate("/about")
        }
        else {

            createUserWithEmailAndPassword(email, password);

        }

        console.log(email, password, confirmpass)
    }
    return (
        <div>
            <h1 className='text-teal-700 text-2xl font-bold text-center my-5'>Sign Up</h1>
            <form className='md:w-1/2 mx-auto' onSubmit={handlesubmit}>

                <input
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="email"
                    placeholder="Email" required ref={emailRef} />


                <input
                    type="password"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="password"
                    placeholder="Password" required ref={pasRef} />

                <input
                    type="password"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="password"
                    placeholder="Confirm Password" required ref={confirmRef} />

                <p className='text-red-600 font-semibold'>{errors}</p>

                <input type="submit" value="Signup" className="block bg-teal-700 text-white w-full p-3 rounded mb-4" />

                <div className="text-center text-sm text-grey-dark mt-4">
                    <p>Do have already an account? <Link to='/login' className='font-semibold text-teal-700'>Login</Link></p>
                </div>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Signup;