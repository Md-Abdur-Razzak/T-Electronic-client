import React, {  useEffect, useState } from 'react';

import { useLoaderData, useParams } from 'react-router-dom';
import SeminaryProduct from './SeminaryProduct';



const Brand_Products = () => {
   const [brandProduct,setBrandProduct]=useState([])
    const newData = useLoaderData()
  const {name} = useParams()
  useEffect (()=>{
    const filter = newData?.filter(data=>data.BrandName == name)
    console.log(filter);
    setBrandProduct(filter)
  },[name,newData])
    return (
        <div className='bg-blue-200 mt-[70px]'>
       
          <div className='md:w-[80%] w-[90%] mx-auto'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-4'>
                {brandProduct.map(product=><SeminaryProduct product={product} key={product._id}></SeminaryProduct>)}
           </div>
          </div>
        </div>
    );
};

export default Brand_Products;