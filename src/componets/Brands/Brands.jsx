import React, { useContext } from 'react';
import { MyContext } from '../Router/Authprovider';
import { Link } from 'react-router-dom';

const Brands = () => {
    const {brands} = useContext(MyContext)
    return (
      <>
         <div className='bg-[#5AEDC2] mt-[120px]'>
         <div className='flex justify-center p-12'>
                 <h1 className='text-5xl font-extrabold'>Our Brands </h1>
            </div>
        <div className='w-[80%] mx-auto grid lg:grid-cols-3 md:grid-cols-2 mt-[10px] gap-4'>
           {
                brands?.map(brand=><Link to={`/bpro/${brand.id}`} key={brand.id}>
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img src={brand.logo} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{brand.name}</h2>
                        
                    </div>
                </div>

                </Link>)
           }
        </div>
         </div>
      
      </>
    );
};

export default Brands;