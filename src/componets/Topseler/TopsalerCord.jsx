import React from 'react';
import { Link } from 'react-router-dom';

const TopsalerCord = ({item}) => {
    const {name,brand,img,price}=item
    return (
        <div>
            <Link>
                <div className=" shadow-xl border border-[#1c1c60] rounded-md">
                  <figure> <img className='h-[250px] w-full  rounded-t-md' src={img} alt="Shoes" /></figure>
                    <div className="p-4 ] h-[200px] rounded-b-md ">
                        <span className="inline rounded-full py-2 text-white px-3 bg-[#123e3f]">{brand}</span>
                       
                        <h2 className="card-title p-2 font-bold">{name}</h2>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            
                        </div>
                        <h1 className='font-bold text-2xl'>{price}</h1>
                        
                    </div>
                </div>

                </Link>
        </div>
    );
};

export default TopsalerCord;