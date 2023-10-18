import React from 'react';

const AddProducts = () => {
    const handelAddData = (e) =>{
        e.preventDefault()
        const from = e.target
        const productsName = from.pName.value
        const BrandName = from.BrandName.value
        const productPrice = from.pPrice.value
        const productDetais = from.pDetails.value
        const typesofproducts = from.typesofproducts.value
        const Rating=from.Rating.value
        const productImg = from.pImg.value
        const prodectsAllDetails = {Rating,productDetais,productImg,productPrice,typesofproducts,productsName,BrandName}
      console.log(prodectsAllDetails);

    }
   
    return (
        <div>
           <div className="form-control">
          
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content w-[50%] max-[769px]:w-[90%] flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Products add </h1>
      
    </div>
    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
      <form onSubmit={handelAddData} className="card-body">
       <div className='md:flex justify-between md:gap-4'>
       <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input type="text" placeholder="Product Name" name='pName' className="input input-bordered  " required />
        </div>
        <div className="form-control  w-full">
          <label className="label">
            <span className="label-text">BrandName</span>
          </label>
          <input type="text" placeholder="Brand-Name" name='BrandName' className="input input-bordered w-full" required />
         
        </div>
       </div>
       <div className='md:flex justify-between md:gap-4'>
       <div className="form-control w-full">
          <label className="label">
            <span className="label-text">price</span>
          </label>
          <input type="text" placeholder="price" name='pPrice' className="input input-bordered w-full" required />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <input type="text" placeholder="Product Details" name='pDetails' className="input input-bordered w-full" required />
        
        </div>
       </div>
       <div className='md:flex justify-between md:gap-4'>
       <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Product Type </span>
          </label>
          <input type="text" placeholder="Product Type" name='typesofproducts' className="input input-bordered w-full" required />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type="text" placeholder="Rating" name='Rating' className="input input-bordered w-full" required />
        
        </div>
       </div>
        <div className="form-control mt-3  ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>
          <input type="text" placeholder="PhotoURL" name='pImg' className="input input-bordered" required />
        
        </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Add Product</button>
        </div>
      </form>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default AddProducts;