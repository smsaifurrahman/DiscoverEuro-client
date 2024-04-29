import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

import { ToastContainer, toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';

const Register = () => {
  const {createUser,logOut} = useContext(AuthContext) || {};
  const [error, setError] = useState('');
  const navigate = useNavigate()
    const handleRegister = e => {
     
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const name = form.name.value;
      const photo = form.photo.value;
      const password = form.password.value;

      if(password < 6) {
        setError('Password should be at least 6 character');
        return
      }
      else if(!/[A-Z]/.test(password)) {
        setError('Your password should have at least one uppercase ');
        return
    }
      else if(!/[a-z]/.test(password)) {
        setError('Your password should have at least one Lowercase ');
        return
    }

            // reset error
        setError('')


      createUser(email,password)
      .then(result => {
       
        updateProfile(result.user,{
          displayName: name,
          photoURL: photo

        })
        .then()
        .catch()
        e.target.reset();
        logOut()
        console.log(result);
        toast.success('You have registered successfully');
        navigate('/login');

      })
      .catch(error => {
        // console.log(error);
        setError('Email is already used')
      })



      console.log({email,password,photo});
    }

    return (
       <div className='flex flex-col items-center my-8'>
        <h1 className='text-2xl font-bold'>Please Register here</h1>
             <div className="card shrink-0 w-full max-w-sm border-2 shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="You Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
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
              {error && <span className='text-red-500 '> {error} </span>  }
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <p className="text-center mb-6">Already have account? <Link to={'/login'}><span className="text-green-600 font-bold">Login here</span></Link> </p>
            </form>
            </div>
       </div>
    );
};

export default Register;