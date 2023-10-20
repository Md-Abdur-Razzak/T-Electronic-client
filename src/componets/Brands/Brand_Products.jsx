import React, {  useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper/modules";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import { useLoaderData, useParams } from 'react-router-dom';
import SeminaryProduct from './SeminaryProduct';
import { MyContext } from '../Router/Authprovider';



const Brand_Products = () => {
   const [brandProduct,setBrandProduct]=useState([])
   const [sliderpage,setsliderPage]=useState({})
   const {slider}=useContext(MyContext)

   
    const newData = useLoaderData()
  const {name} = useParams()
  useEffect (()=>{
    const filter = newData?.filter(data=>data.BrandName == name)
        setBrandProduct(filter)
   
     
  },[name,newData])
  useEffect (()=>{
    const slfinde = slider?.find(data=>data.brand == name)
    console.log(slfinde);
 
        setsliderPage(slfinde)
    
  },[slider,name])
    return (
          <div >
              {
                brandProduct.length==0?<div className='flex justify-center font-bold '><img className='h-[500px]' src="https://i.ibb.co/X43cN8s/product-not-found.jpg" alt="" /></div>:
                <div>
         <div>

    <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    autoplay={true}
    grabCursor={true}
    delay={"100"}
    loop={true}
    pagination={{ clickable: true }}>

    {/*----------Slider----------1--------*/}
    <ul>
      <li className="relative">
        <div>
      
        </div>
        <SwiperSlide>
          <img
            src={sliderpage.img1}
            style={{ width: "100%", height: "100vh", opacity: "0.7" }}
          />
          <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center">
            <div>
              <h3 className=" text-pink-500 text-5xl font-extrabold my-auto mb-3 text-center ">
              {sliderpage.des1}
              </h3>
              <p className=" text-white text-5xl my-auto mt-3 py-3 text-center font-extrabold">
              {sliderpage.name1}
              </p>
              <button className="py-3 px-6 flex justify-center text-center m-auto my-5 font-extrabold text-xl text-white rounded-md bg-[Hotpink] ">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </li>
    </ul>
    {/*----------Slider----------2--------*/}
    <ul>
      <li className="relative">
        <SwiperSlide>
          <img
            src={sliderpage.img2}
            style={{ width: "100%", height: "100vh", opacity: "0.7" }}
          />
          <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center">
          <div>
              <h3 className="  text-pink-500 text-5xl my-auto mb-3 text-center font-extrabold">
              {sliderpage.des2}
              </h3>
              <p className=" text-white text-5xl my-auto mt-3 py-3 text-center font-extrabold">
              {sliderpage.name2}
              </p>
              <button className="py-3 px-6 flex justify-center text-center m-auto my-5 font-extrabold text-xl text-white rounded-md bg-[Hotpink]">
                Shop Now 
              </button>
            </div>
          </div>
        </SwiperSlide>
      </li>
    </ul>
    {/*----------Slider----------3--------*/}
    <ul>
      <li className="relative">
        <SwiperSlide>
          <img
            src={sliderpage.img3}
            style={{ width: "100%", height: "100vh", opacity: "0.7" }}
          />
          <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center">
          <div>
              <h3 className="  text-pink-500 text-5xl my-auto mb-3 text-center font-extrabold">
              {sliderpage.des3}
              </h3>
              <p className=" text-white text-5xl my-auto mt-3 py-3 text-center font-extrabold">
              {sliderpage.name3}
              </p>
              <button className="py-3 px-6 flex justify-center text-center m-auto my-5 font-extrabold text-xl text-white rounded-md bg-[Hotpink] ">
              Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </li>
    </ul>

    
   
  </Swiper>
</div>
  </div>
 }
          {/* map functon */}
          {
          brandProduct.length==0?"": <div className='0 mt-[70px]'>
              
          <div className='md:w-[80%] w-[90%] mx-auto'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-4'>
                {brandProduct.map(product=><SeminaryProduct product={product} key={product._id}></SeminaryProduct>)}
          </div>
          </div>
        </div>
          }
          
          
  </div>
      
      
    );
};

export default Brand_Products;
// // {
// <div>

//   <Swiper
//     modules={[Navigation, Pagination, Autoplay]}
//     spaceBetween={50}
//     slidesPerView={1}
//     navigation
//     autoplay={true}
//     grabCursor={true}
//     delay={"100"}
//     loop={true}
//     pagination={{ clickable: true }}>

//     {/*----------Slider----------1--------*/}
//     <ul>
//       <li className="relative">
//         <div>
      
//         </div>
//         <SwiperSlide>
//           <img
//             src={sliderpage.img1}
//             style={{ width: "100%", height: "100vh", opacity: "0.7" }}
//           />
//           <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center">
//             <div>
//               <h3 className=" text-pink-500 text-5xl font-extrabold my-auto mb-3 text-center ">
//               {sliderpage.des1}
//               </h3>
//               <p className=" text-white text-5xl my-auto mt-3 py-3 text-center font-extrabold">
//               {sliderpage.name1}
//               </p>
//               <button className="py-3 px-6 flex justify-center text-center m-auto my-5 font-extrabold text-xl text-white rounded-md bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
//                 Shop Now
//               </button>
//             </div>
//           </div>
//         </SwiperSlide>
//       </li>
//     </ul>
//     {/*----------Slider----------2--------*/}
//     <ul>
//       <li className="relative">
//         <SwiperSlide>
//           <img
//             src={sliderpage.img2}
//             style={{ width: "100%", height: "100vh", opacity: "0.7" }}
//           />
//           <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center">
//           <div>
//               <h3 className="  text-pink-500 text-5xl my-auto mb-3 text-center font-extrabold">
//               {sliderpage.des2}
//               </h3>
//               <p className=" text-white text-5xl my-auto mt-3 py-3 text-center font-extrabold">
//               {sliderpage.name2}
//               </p>
//               <button className="py-3 px-6 flex justify-center text-center m-auto my-5 font-extrabold text-xl text-white rounded-md bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
//                 Shop Now 
//               </button>
//             </div>
//           </div>
//         </SwiperSlide>
//       </li>
//     </ul>
//     {/*----------Slider----------3--------*/}
//     <ul>
//       <li className="relative">
//         <SwiperSlide>
//           <img
//             src={sliderpage.img3}
//             style={{ width: "100%", height: "100vh", opacity: "0.7" }}
//           />
//           <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center">
//           <div>
//               <h3 className="  text-pink-500 text-5xl my-auto mb-3 text-center font-extrabold">
//               {sliderpage.des3}
//               </h3>
//               <p className=" text-white text-5xl my-auto mt-3 py-3 text-center font-extrabold">
//               {sliderpage.name3}
//               </p>
//               <button className="py-3 px-6 flex justify-center text-center m-auto my-5 font-extrabold text-xl text-white rounded-md bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
//               Shop Now
//               </button>
//             </div>
//           </div>
//         </SwiperSlide>
//       </li>
//     </ul>

    
   
//   </Swiper>
// </div>

// // }


