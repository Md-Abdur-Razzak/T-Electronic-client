import React, { useEffect, useState } from 'react';
import TopsalerCord from './TopsalerCord';

const Topsalary = () => {
    const [sale,setSale]=useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/TopSalar')
        .then(res=>res.json())
        .then(data=>setSale(data))
    },[])
    
    return (
        <div className='bg-[#9ce9ee] mt-36 py-12'>
        <h1 className='text-4xl  font-extrabold flex justify-center'>Top sellers Products</h1>
            <div className='w-[80%] mx-auto grid lg:grid-cols-3 md:grid-cols-2 mt-[70px] gap-4'>
                {
                    sale.map(item=><TopsalerCord item={item} key={item.id}></TopsalerCord>)
                }
            </div>
        </div>
    );
};

export default Topsalary;