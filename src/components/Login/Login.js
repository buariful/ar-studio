import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailLogRef = useRef('');
    const passLogRef = useRef('');
    const [errors, seterror] = useState('')

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
    );

    const navigate = useNavigate('');

    const handleLogin = event => {
        event.preventDefault();
        const email = emailLogRef.current.value;
        const password = passLogRef.current.value;
        signInWithEmailAndPassword(email, password);

        if (user) {
            navigate('/blog')
        }
        if (error) {
            seterror(error.message)
        }
    }

    return (
        <div>
            <h1 className='text-teal-700 text-2xl font-bold text-center my-5'>Log In</h1>
            <form className='md:w-1/2 mx-auto' onSubmit={handleLogin}>

                <input
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="email"
                    placeholder="Email" required ref={emailLogRef} />


                <input
                    type="password"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="password"
                    placeholder="Password" required ref={passLogRef} />



                <input type="submit" value="Login" className="block bg-teal-700 text-white w-full p-3 rounded mb-4" />
                <p className='text-red-600 font-semibold'>{errors}</p>
                <div className="text-center text-sm text-grey-dark mt-4">
                    <p>Do have already an account? <Link to='/signup' className='font-semibold text-teal-700'>Sign up</Link></p>
                </div>

                <div className="text-center">
                    <span className='text-center'>Forget password ?</span> <button
                        onClick={async () => {
                            const email = emailLogRef.current.value;
                            await sendPasswordResetEmail(email);
                            alert('Sent email');
                        }} className="mx-auto text-red-600 font-semibold">

                        Reset password
                    </button>
                </div>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;