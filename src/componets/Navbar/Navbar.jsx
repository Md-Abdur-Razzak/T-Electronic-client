import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import icon from '../../assets/2592818.png'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100  sticky inset-0 z-10  rounded-none border  bg-opacity-30  text-black shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-2 lg:py-2">
    
      
        <div className="navbar-start ">
        <div className="dropdown md:px-12">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             <NavLink
            to={"/"}
            className={({ isActive, isPending }) =>
            isActive
            ? "text-[blue] underline"
            : isPending
            ? "pending"
            : ""
            }
            >Home</NavLink>
            <NavLink
            to={"/blog"}
            className={({ isActive, isPending }) =>
            isActive
            ? "text-[blue] underline"
            : isPending
            ? "pending"
            : ""
            }
            >Blog</NavLink>
            <NavLink
            to={`/Po`}
            className={({ isActive, isPending }) =>
            isActive
            ? "text-[blue] underline"
            : isPending
            ? "pending"
            : ""}
            >Populer Events</NavLink>
          </ul>
        </div>
            <div className='md:flex flex-col justify-center items-center'>
                <img  src={icon} className="w-[100px] h-[70px] max-[426px]:w-[70px]" />
                <h1 className='text-2xl font-extrabold max-[426px]:text-sm'>TechElectroHub</h1>
            </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal flex gap-5 px-1">
        <NavLink
            to={"/"}
            className={({ isActive, isPending }) =>
            isActive
            ? "text-[blue] underline"
            : isPending
            ? "pending"
            : ""
            }
            >Home</NavLink>
            <NavLink
            to={"/blog"}
            className={({ isActive, isPending }) =>
            isActive
            ? "text-[blue] underline"
            : isPending
            ? "pending"
            : ""
            }
            >Blog</NavLink>
            <NavLink
            to={`/Po`}
            className={({ isActive, isPending }) =>
            isActive
            ? "text-[blue] underline"
            : isPending
            ? "pending"
            : ""}
            >Populer Events</NavLink>
        </ul>
      </div>
      <div className="navbar-end md:px-12">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
                <img src={"https://i.ibb.co/Y79Vw8B/user.png" } />
            </div>
        </label>
        
           
           <Link to=''>
           <button className="btn text-sky-500 font-bold">Login</button>
          </Link>
        
      </div>
        </div>
   
   
  );
    
};

export default Navbar;