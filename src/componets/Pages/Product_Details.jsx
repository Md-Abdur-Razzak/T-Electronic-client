import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Product_Details = () => {
    const data = useLoaderData()
    const  {_id,Rating,productDetais,productImg,productPrice,typesofproducts,productsName,BrandName} =data
    console.log(data);
    return (
        <div className='mt-[100px]'>
          <div className='lg:w-[60%] md:w-[70%] w-[80%] mx-auto justify-evenly items-center md:flex gap-20'>
            <div><img className='h-[350px] w-[500px]' src={productImg} alt="" /></div>
            <div className='space-y-4'>
            <h2 className="card-title">{productsName}</h2>
            <h2 className="card-title">{BrandName}</h2>
            <p>{productDetais}</p>
            <p>{typesofproducts}</p>
            <div className="rating">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <h1>{Rating}</h1>
        </div>
        <h1>{productPrice}</h1>
        <button className='btn bg-blue-500 text-white'>Add to Cart</button>
            </div>
          </div>
        </div>
    );
};

export default Product_Details;