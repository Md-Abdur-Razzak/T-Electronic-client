
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../Router/Authprovider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const {singWithEmailAndPassword}=useContext(MyContext)
   const handelLogin = (e) =>{
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

  singWithEmailAndPassword(email,password)
.then((res)=>{
 
 
   
   return toast.success("Log In success")
     
})
.catch((error)=>{
 toast.error("Invalid Email And Password")
   
})
   }
    return (
        <div className=' bg-base-200 pb-9 '>
        <div className=''>
       
        </div>
          <div className="hero bg-base-200">
        <div className="hero-content flex-col mt-20">
          <div className="text-center lg:text-left ">
            <h1 className="text-5xl font-bold">Login now! </h1>
          
          </div>
          <div className="card  border border-3 border-cyan-700 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-3">
          <form onSubmit={handelLogin}>
          <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" required className="input input-bordered w-72 " />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" required className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button  className="btn btn-primary">Login</button>
              
              </div>
              <div>
                <div>
                   
                </div >
                  <p className='text-[15px]'>Dont’t Have An Account ?<Link className='text-red text-blue-400 underline' to={'/reg'}> Registration</Link></p>
              </div>
            </div>
          </form>
          </div>
        </div>
      </div>
      
      </div>
    );
};

export default Login;