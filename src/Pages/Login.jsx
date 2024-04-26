import React, { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaEye,FaEyeSlash  } from "react-icons/fa";

const Login = () => {

        const {logIn, googleSignIn , gitHubSignIn } = useContext(AuthContext) || {};
    const [error,setError] = useState()

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email,password)
        .then(result => {
            console.log(result);
            toast.success('You are signed in Successfully')
        })
        .catch(error => {
          toast.error('Incorrect Email or Password')

        })
        
    }

    //social media sign In 
    const handleSocialSignIn = socialMediaSignIn =>{
        socialMediaSignIn()
        .then()
        .catch()
    }


    return (

        <div className='flex flex-col items-center mb-6'>
             <h1 className='text-2xl font-bold my-4'>Please Login here</h1>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                    <label className="label">
                    <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                    <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
                </form>
                <div className='text-center font-bold'>
           
           <p className="px-3 text-xl my-3 dark:text-gray-600">----- Login with social accounts ------</p>
            <div className='border-2 border-green-300 rounded-xl mb-2 mx-3'>
                <button onClick={()=>{handleSocialSignIn(googleSignIn)}} className='text-green-600 text-3xl'><FcGoogle  /></button>
            </div>
            <div className='border-2 border-green-300 rounded-xl mb-6 mx-3'>
            <button onClick={()=>{handleSocialSignIn(gitHubSignIn)}}  className=' text-3xl'><FaGithub />
             </button>    
            </div>
                   

           </div>
            </div>
           
        </div>

    );
};

export default Login;