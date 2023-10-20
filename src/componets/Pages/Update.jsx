import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const Update = () => {
    const updateData = useLoaderData()
    
    const handelAddUpdate = (e) =>{
            e.preventDefault()
            const from = e.target
            const productsName = from.pName.value
            const BrandName = from.BrandName.value
            const productPrice = from.pPrice.value
            const productDetais = from.pDetails.value
            const typesofproducts = from.typesofproducts.value
            const rating=from.Rating.value
            const productImg = from.pImg.value
            const prodectsAllDetails = {rating,productDetais,productImg,productPrice,typesofproducts,productsName,BrandName}
          console.log(prodectsAllDetails);
            fetch(`https://tae-sever-side.vercel.app/Addproduct/${updateData._id}`,{
                method:"PUT",
                headers:{
                    'content-type':'application/json'
                },
                body :JSON.stringify(prodectsAllDetails)
            })
            .then(res =>res.json())
            .then((data)=>{
               toast.success("product Update successfully")
            })
    }
    return (
        <div>
           <div className="form-control">
          
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content w-[50%] max-[769px]:w-[90%] flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Update Products </h1>
      
    </div>
    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
      <form onSubmit={handelAddUpdate} className="card-body">
       <div className='md:flex justify-between md:gap-4'>
       <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input type="text" placeholder="Product Name" defaultValue={updateData?.productsName} name='pName' className="input input-bordered  " required />
        </div>
        <div className="form-control  w-full">
          <label className="label">
            <span className="label-text">BrandName</span>
          </label>
          <select  className="select select-primary w-full max-w-xs " name='BrandName' defaultValue={updateData?.BrandName} required>
              <option disabled selected>Brand Name </option>
              <option>Apple</option>
              <option>Samsung</option>
              <option>Sony</option>
              <option>Intel</option>
              <option>Oppo</option>
              <option>Google</option>
          </select>
          {/* <input type="text" placeholder="Brand-Name" defaultValue={updateData?.BrandName} name='BrandName' className="input input-bordered w-full" required /> */}
         
        </div>
       </div>
       <div className='md:flex justify-between md:gap-4'>
       <div className="form-control w-full">
          <label className="label">
            <span className="label-text">price</span>
          </label>
          <input type="text" placeholder="price" name='pPrice' defaultValue={updateData?.productPrice} className="input input-bordered w-full" required />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <input type="text" placeholder="Product Details" defaultValue={updateData?.productDetais} name='pDetails' className="input input-bordered w-full" required />
        
        </div>
       </div>
       <div className='md:flex justify-between md:gap-4'>
       <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Product Type </span>
          </label>
          <input type="text" placeholder="Product Type" defaultValue={updateData?.typesofproducts} name='typesofproducts' className="input input-bordered w-full" required />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type="text" placeholder="Rating" defaultValue={updateData?.rating}  name='Rating' className="input input-bordered w-full" required />
        
        </div>
       </div>
        <div className="form-control mt-3  ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>
          <input type="text" placeholder="PhotoURL" defaultValue={updateData?.productImg} name='pImg' className="input input-bordered" required />
        
        </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Update</button>
        </div>
      </form>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Update;