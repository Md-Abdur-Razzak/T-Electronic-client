import React, { useContext} from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MyContext } from '../Router/Authprovider';
import { Rating } from '@smastrom/react-rating';


const Product_Details = () => {
  const {users} = useContext(MyContext)
  const email = users.email

    const data = useLoaderData()
    const  {_id,rating ,productDetais,productImg,productPrice,typesofproducts,productsName,BrandName} =data
console.log(rating);
    const handesendData = () =>{
      const mycartData =  {email,rating,productDetais,productImg,productPrice,typesofproducts,productsName,BrandName}

      fetch('https://tae-sever-side.vercel.app/mycart',{
        method:"POST",
        headers:{
          'content-type':"application/json"
        },
        body:JSON.stringify(mycartData)
      })
      .then(res=>res.json())
      .then((data)=>{
        if (data.insertedId) {
          toast.success("Add to cart Successfully")
         
          
        }
      })
    }
    return (
        <div className='mt-[100px]'>
          <div className='lg:w-[90%] md:w-[90%] w-[99%] md:p-0 p-9  mx-auto justify-evenly  md:flex md:gap-20'>
            <div><img className='h-[350px] md:w-[500px] rounded-md w-[100%]' src={productImg} alt="" /></div>
            <div className='space-y-4'>
           <div className='flex gap-2 text-2xl md:mt-0 mt-9 text-white  font-bold items-center '>
            <h2 className="p-2 md:px-5 bg-[#0d0d3f] rounded-full">{BrandName}</h2>
            <p className='p-2 md:px-5 bg-[hotpink] rounded-full'>{typesofproducts}</p>
           </div>

            <h2 className="text-3xl font-bold">{productsName}</h2>
           
            <div className='md:w-[400px] w-[95%] justify-center'>
            <p className='text-xl text-justify '>{productDetais}</p>
            </div> 
            
            <div className="rating flex items-center">
           <Rating readOnly style={{maxWidth:'120px'}} value={`${rating}`}/>
            <h1 className='text-3xl font-bold ml-2'>{rating}</h1>
          </div>
        <h1 className='text-3xl font-bold'>{productPrice}</h1>
        <button onClick={handesendData} className='btn bg-blue-500 text-white'>Add to Cart</button>
            </div>
          </div>
        </div>
    );
};

export default Product_Details;