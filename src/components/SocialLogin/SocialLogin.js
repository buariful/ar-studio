import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import googleImg from '../../img/google.png'


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);



    let errorMessage;
    if (error) {

        errorMessage = <div>
            <p>Error: {error.message}</p>
        </div>

    }

    return (
        <div>
            <div className='mt-5 w-1/2 mx-auto flex items-center text-center justify-center'>
                <div className='w-1/3 bg-teal-600' style={{ height: "1px" }}></div>
                <p className='mx-3'>OR</p>
                <div className='w-1/3 bg-teal-600' style={{ height: "1px" }}></div>
            </div>


            <p className='text-red-600 font-semibold text-center'>{errorMessage}</p>
            <button className='bg-teal-700 text-white flex items-center justify-center mx-auto py-2 px-5 rounded' onClick={() => signInWithGoogle()}>
                <img src={googleImg} alt="" style={{ width: "25px" }} className="mr-2" />
                <span>Sign in with Google</span>
            </button>
        </div>
    );
};

export default SocialLogin;