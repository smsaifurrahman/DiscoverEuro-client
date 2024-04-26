import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext) || {} ;

    const navLinks = <>
            <NavLink to={'/'} className={({isActive}) => isActive ? ' font-bold text-xl text-orange-600 p-2 rounded-xl border-2 border-orange-300' : 'font-bold p-2 text-xl rounded-xl border-2 border-orange-300'}> Home </NavLink>
            <NavLink to={'/allspot'} className= {({isActive}) => isActive ? ' font-bold text-orange-600 border-2 border-orange-300 text-xl p-2 rounded-xl md:mx-2' : 'font-bold p-2 text-xl rounded-xl border-2 border-orange-300  md:mx-2'} > All Tourists Spots </NavLink>
            <NavLink to={'/addspot'} className={({isActive}) => isActive ? ' font-bold text-orange-600 text-xl border-2 border-orange-300  p-2 rounded-xl' : 'font-bold p-2 text-xl rounded-xl border-2 border-orange-300'}> Add Tourists Spot </NavLink>
            <NavLink to={'/mylist'} className={({isActive}) => isActive ? ' font-bold text-orange-600 text-xl border-2 border-green-300  p-2 rounded-xl  md:mx-2' : 'font-bold p-2 text-xl rounded-xl border-2 border-green-300  md:mx-2'}> My List </NavLink>
    
    </>
    const handleLogout = () => {
      logOut()
      .then(result =>{
      toast.success('You are logged Out')
      
      })
      .catch()
    } 

    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <a className="btn btn-ghost font-bold text-2xl">DiscoverEuro</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user  
      ? <div className='flex gap-2 items-center justify-center'>
        <div className="">
          <img title={user.displayName} className='w-12 rounded-full' alt="Tailwind CSS Navbar component" src={user.photoURL} />
        </div>
        <Link to={'/'} > <button onClick={handleLogout} className='btn'>Logout</button> </Link>
        </div>
      
      : 
      <div>
        <Link to={'/login'}> <button className='btn mr-2'>Login</button> </Link>
      <Link to={'/register'} > <button className='btn'>Register</button> </Link> 
      </div> 
      
    }
  </div>
</div>
    );
};

export default Navbar;