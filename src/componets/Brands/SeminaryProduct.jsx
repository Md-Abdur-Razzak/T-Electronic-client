import React from 'react';
import { Link } from 'react-router-dom';

const SeminaryProduct = ({product}) => {
    const  {_id,Rating,productDetais,productImg,productPrice,typesofproducts,productsName,BrandName} =product

    return (
        <div className='mt-[50px]'>
           <div className="card card-compact  bg-base-100 shadow-xl">
            <img className='h-[250px]' src={productImg} alt="Shoes" />
        <div className="card-body">
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
        <hr />
            <div className="flex justify-between">
            <button className="btn btn-primary">Details</button>
            <Link to={`/update/:${_id}`}><button className="btn btn-primary">Update</button></Link>
            </div>
        </div>
    </div>
</div>
    );
};

export default SeminaryProduct;