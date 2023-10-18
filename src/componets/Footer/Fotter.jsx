import icon from "../../assets/2592818.png"
const Fotter = () => {
    return (
       <div className='mt-[100px] bg-[#1f4b8e] lg:h-[400px] md:h-[800px]'>
            
            <div className='md:flex md:justify-between flex-wrap  w-[80%] bg-red pt-[100px] mx-auto text-white'>
                <div className='w-[300px] flex flex-col justify-center items-center gap-3 '>
                    <img className='w-9' src={icon} alt="" />
                    <p className='text-justify'>Educational and training events are diverse gatherings, from workshops to webinars, designed to enhance skills, knowledge, and expertise.</p>
                    <div className='flex gap-2 text-3xl font-bold'>
                        <h1> <i className="fa-brands fa-facebook" ></i> </h1>
                        <h1><i className="fa-brands fa-twitter"></i> </h1>
                       
                    </div>
                </div>
                <div className=''>
                    <h1 className='pt-4 text-2xl'>Resources</h1>
                  <div className='pt-4 '>
                    <h1 className=''>About us</h1>
                    <h1 className='mt-2'>Gallery</h1>
                    <h1  className='mt-2'>Services</h1>
                    <h1  className='mt-2'>Contact</h1>
                  </div>
                </div>
                <div>
                    <h1 className=' pt-4 text-2xl'>Populer Events</h1>
                    <h1  className='mt-2'>Parenting and Family Workshops</h1>
                    <h1  className='mt-2'>Specialized Industry Training</h1>
                    <h1  className='mt-2'>Trade Shows and Expos:</h1>
                    <h1  className='mt-2'>Leadership Retreats</h1>
                </div>
                
               
            </div>
            <hr className='mt-9' />
            <div className='flex justify-center text-[#918987] mt-3 md:text-xl'>
                Copyright © 2023 E-TRAINING. All Rights Reserved.
            </div>
       </div>
    );
};

export default Fotter;