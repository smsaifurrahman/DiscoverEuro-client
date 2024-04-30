import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext) || {} ;
  const [theme, setTheme] = useState('light');

  useEffect(()=>{

    localStorage.setItem('theme',theme);
    const localTheme = localStorage.getItem('theme');
    document.querySelector('html').setAttribute('data-theme',localTheme)

  },[theme])


  const handleToggle = (e) => {
    if(e.target.checked){
      setTheme('night')
    }
    else{
      setTheme('light')
    }
    
  }

    const navLinks = <>
            <NavLink to={'/'} className={({isActive}) => isActive ? ' font-bold text-xl text-red-500 p-2 rounded-xl border-2 border-red-300 ' : 'font-bold p-2 text-xl rounded-xl border-2 border-red-300 '}> Home </NavLink>
            <NavLink to={'/allspot'} className= {({isActive}) => isActive ? ' font-bold text-red-500 border-2 border-red-300  text-xl p-2 rounded-xl md:mx-2' : 'font-bold p-2 text-xl rounded-xl border-2 border-red-300   md:mx-2'} > All Tourists Spots </NavLink>
            <NavLink to={'/addspot'} className={({isActive}) => isActive ? ' font-bold text-red-500 text-xl border-2 border-red-300   p-2 rounded-xl' : 'font-bold p-2 text-xl rounded-xl border-2 border-red-300 '}> Add Tourists Spot </NavLink>
            <NavLink to={'/mylist'} className={({isActive}) => isActive ? ' font-bold text-red-500 text-xl border-2 border-red-300  p-2 rounded-xl  md:mx-2' : 'font-bold p-2 text-xl rounded-xl border-2 border-red-300  md:mx-2'}> My List </NavLink>
            <NavLink to={'/mylists'} className={({isActive}) => isActive ? ' font-bold text-red-500 text-xl border-2 border-red-300  p-2 rounded-xl  md:mx-2' : 'font-bold p-2 text-xl rounded-xl border-2 border-red-300  md:mx-2'}> My List </NavLink>
    
           
    
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
          <Tooltip anchorSelect=".my-anchor-element" place='top'>{user && user.displayName}</Tooltip>
        <div className="navbar-start ">
          <div className="dropdown relative z-[2]  ">
            <div tabIndex={0} role="button" className="btn  btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
          </div>
          <Link to={'/'} className="btn btn-ghost font-bold text-2xl md:text-3xl text-red-500 ">DiscoverEuro</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {navLinks}
          </ul>
        </div>
        
  <div className="navbar-end">
  <div className='mr-2'>
          <label className=" cursor-pointer grid place-items-center">
          <input 
          onChange={handleToggle}
          type="checkbox" value="" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
          <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
          <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </label>
      </div>
      
  <div>
  {
      user  
      ? <div className='flex gap-2 items-center justify-center'>
        <div className="">
          <img className='w-12 my-anchor-element rounded-full' alt="Tailwind CSS Navbar component" src={user.photoURL} />
        </div>
        <Link to={'/'} > <button onClick={handleLogout} className='btn'>Logout</button> </Link>

        
        </div>
      
      : 
      <div className='flex '>
         <NavLink to={'/login'} className={({isActive}) => isActive ? ' font-bold text-xl text-red-500 p-2 rounded-xl mr-1 md:mr-2 border-2 border-red-300 ' : 'font-bold p-2 text-xl rounded-xl border-2 mr-2 border-red-300 '}> Login </NavLink> 
         <NavLink to={'/register'} className={({isActive}) => isActive ? ' font-bold text-xl text-red-500 p-2 rounded-xl border-2 border-red-300 ' : 'font-bold p-2 text-xl rounded-xl border-2 border-red-300 '}> Register </NavLink>
        {/* <Link to={'/login'}> <button className='btn mr-2 '>Login</button> </Link> */}
      {/* <Link to={'/register'} > <button className='btn'>Register</button> </Link>  */}
      </div> 
      
    }
  </div>
  </div>
</div>
    );
};

export default Navbar;