import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../Router/Authprovider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
    const {creatEmilAndPassword}=useContext(MyContext)
    const handelRegistration = (e) =>{
        e.preventDefault()
            const email = e.target.email.value
            const password = e.target.password.value
            // const name = e.target.name.value
            // const img = e.target.img.value
            console.log(email,password);
            
        if (! /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/.test(password)){
            return toast.error("Password must be at least 6 characters long and contain at least one uppercase letter and one special character  ")
        }
      
        creatEmilAndPassword(email,password)
        .then((res)=>{
           return toast.success("congratulations!  Registration successful ")
          
      })
      .catch(()=>{
          return toast.error("email already exists ")
      })
    }
    return (
        <div className='bg-[rgba(227,224,240,0.52)]'>
        <div>
 
        </div>
        <div className="hero pb-9 py-2.5">
         
         <div className="hero-content flex-col mt-20">
           <div className="text-center lg:text-left ">
             <h1 className="text-5xl font-bold">Registration</h1>
           
           </div>
           <div className="card border border-3 border-cyan-700 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-3">
           <form onSubmit={handelRegistration} >
           <div className="card-body">
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Name</span>
                 </label>
                 <input type="text" placeholder="Name" name='name'  className="input input-bordered " />
               </div>
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">PhotoURL</span>
                 </label>
                 <input type="text" placeholder="PhotoURL" name='img' className="input input-bordered w-72" />
               </div>
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Email</span>
                 </label>
                 <input type="email" placeholder="email" name='email' required className="input input-bordered w-72" />
               </div>
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Password</span>
                 </label>
                 <input type="password" name='password' placeholder="password" required className="input input-bordered" />
                
               </div>
               <div className="form-control mt-6">
                 <button  className="btn btn-primary">Registration</button>
               </div>
               <div className='text-xl'>
                  <span>Already have an account? <Link to={"/login"} className='text-blue-600 underline'>Login</Link></span>
               </div>
             </div>
           </form>
           </div>
         </div>
       </div>
     </div>
    );
};

export default Registration;