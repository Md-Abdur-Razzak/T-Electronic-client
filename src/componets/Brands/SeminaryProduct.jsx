import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
const SeminaryProduct = ({product}) => {
    const  {_id,rating,productImg,productPrice,typesofproducts,productsName,BrandName} =product

    return (
        <div className='mt-[50px]  '>
           <div className=" shadow-md border-blue-300 rounded-md border-2 h-[550px] ">
            <img className=' h-[200px] w-full rounded-t-md' src={productImg} alt="Shoes" />
            <hr />
        <div className="p-7 rounded-md  "> 

           <div className='flex justify-between'>
            <h2 className="inline-block text-white font-bold p-2 px-5 rounded-full bg-blue-900">{BrandName}</h2>
            <p className='inline-block text-white font-bold p-2 ml-2  px-5 rounded-full bg-pink-500'>{typesofproducts}</p>
           </div>
            <h2 className=" text-2xl font-extrabold mt-9">{productsName}</h2>
            <div className=" flex items-center py-2">
           <Rating readOnly style={{maxWidth:'120px'}} value={`${rating}`}/>
            <h1 className='text-3xl font-bold ml-2'>{rating}</h1>
          </div>
        
        <h1 className='text-4xl font-bold pb-1'>{productPrice}</h1>
        <hr />
        <br />
            <div className="flex justify-between">
            <Link to={`/details/${_id}`}><button className="btn btn-primary">Details</button></Link>
            <Link to={`/update/${_id}`}><button className="btn btn-primary">Update</button></Link>
            </div>
        </div>
    </div>
</div>
    );
};

export default SeminaryProduct;