import React from 'react';

const MycartsDetails = ({data,hadeldelet}) => {
  const {productImg,productPrice,productsName,BrandName,_id}=data
    return (
        <div>
                <div >
            <div className='md:flex bg-base-100 shadow-md rounded-md border border-blue-300'>
           
            <div className="card bg-base-100  shadow-xl rounded-md">
                    <img src={productImg} className='h-[255px] md:w-[350px] rounded-md' alt="Shoes" />
            </div>
            <div className="card-body  ">
                    <h2 className="card-title font-bold py-2 px-3 flex justify-center rounded-md bg-blue-400 text-white">{BrandName}</h2>
                    <h2 className="card-title font-bold">{productsName}</h2>
                
                    <hr />
                    <div className='text-xl font-semibold flex flex-wrap gap-3'>
                        <div className='flex items-center gap-2'>
                           
                            <p>{productPrice}</p>
                           
                        </div>
                    
                        
                    </div>
                    <hr />
                    <h1 className='flex justify-end  text-2xl'>
                    <i onClick={()=>hadeldelet(_id)} className="fa-solid fa-trash text-red-500 p-3 border rounded-full cursor-pointer"></i>
                    </h1>
            </div>
       
   </div>
          
</div>
        </div>
    );
};

export default MycartsDetails;