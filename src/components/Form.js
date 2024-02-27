import React, { useRef } from 'react'
import { useState } from 'react';
import { validateForm } from '../utils/validateForm';

const Form = () => {

    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    let email = useRef(null);
    let password =  useRef(null);
    let fullName = useRef(null);

    const handleSubmit = () => {

        const message = validateForm(email.current.value, password.current.value, fullName.current ? fullName.current.value : undefined);
        // console.log(message);

        setErrorMessage(message);


    };

    const toggleForm = () => {
        setIsSignIn(!isSignIn);
    };
    

    return (
    <div className='absolute w-[450px] bg-black p-12 bg-opacity-85 rounded-lg'>
        <h3 className='text-white text-4xl mb-10 mx-7 font-bold'>{ isSignIn ? "Sign In" :"Sign Up" }</h3>
        <form className='flex flex-col text-white' onSubmit={(e) => e.preventDefault()}>

            {!isSignIn && <input ref={fullName} type = 'text' placeholder='Full Name' className='text-black p-2 my-2 mx-7 rounded-lg'/>}
            <input ref = {email} type = 'text' placeholder='Email or phone number' className='text-black p-2 my-2 mx-7 rounded-lg'/>
            <input ref = {password} type = 'password' placeholder='Password' className='text-black p-2 my-2 mx-7 rounded-lg'/>

            <span className='text-red-600 font-semibold my-2 mx-7'>{errorMessage}</span>

            <button onClick={handleSubmit} className='p-3 m-7 bg-red-600 rounded-lg'>{ isSignIn ? "Sign In" :"Sign Up" }</button>

            {isSignIn ? <p className='mx-7 my-32'>New to Netflix? <span className='font-bold hover:cursor-pointer' onClick={toggleForm}>Sign up now</span></p> 
            : <span className='mx-7 my-32' onClick={toggleForm}> Already a member! <span className='font-bold hover:cursor-pointer'>Sign In </span></span>}
        </form>
    </div>
    )
}

export default Form