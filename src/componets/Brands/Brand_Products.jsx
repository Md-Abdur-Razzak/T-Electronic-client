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
    const slfinde = slider?.find(data=>data.name == name)
    
    setsliderPage(slfinde)
  },[slider,name])
    return (
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
                  src="https://i.ibb.co/1rb2xb0/home-1.jpg"
                  style={{ width: "100%", height: "100vh", opacity: "0.5" }}
                />
                <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center">
                  <div>
                    <h3 className=" text-sky-500 text-5xl my-auto mb-3 text-center font-bold">
                      50% Discaunt
                    </h3>
                    <p className=" text-pink-500 text-5xl my-auto mt-3 text-center font-bold">
                      Rokomary  Shoping Moll
                    </p>
                    <button className="py-3 px-6 flex justify-center text-center m-auto my-5 font-bold text-xl text-white rounded-md bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
                      Visite Side  
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
                  src="https://i.ibb.co/g7GsTXF/home-2.jpg"
                  style={{ width: "100%", height: "100vh", opacity: "0.5" }}
                />
                <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center">
                <div>
                    <h3 className=" text-sky-500 text-5xl my-auto mb-3 text-center font-bold">
                      50% Discaunt
                    </h3>
                    <p className=" text-pink-500 text-5xl my-auto mt-3 text-center font-bold">
                      Rokomary  Shoping Moll
                    </p>
                    <button className="py-3 px-6 flex justify-center text-center m-auto my-5 font-bold text-xl text-white rounded-md bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
                      Visite Side  
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
                  src="https://i.ibb.co/nCKw1KS/home-3.jpg"
                  style={{ width: "100%", height: "100vh", opacity: "0.5" }}
                />
                <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center">
                <div>
                    <h3 className=" text-sky-500 text-5xl my-auto mb-3 text-center font-bold">
                      50% Discaunt
                    </h3>
                    <p className=" text-pink-500 text-5xl my-auto mt-3 text-center font-bold">
                      Rokomary  Shoping Moll
                    </p>
                    <button className="py-3 px-6 flex justify-center text-center m-auto my-5 font-bold text-xl text-white rounded-md bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
                      Visite Side  
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            </li>
          </ul>
          {/*----------Slider----------4--------*/}
          <ul>
            <li className="relative">
              <SwiperSlide>
                <img
                  src="https://i.ibb.co/C5Hv95q/home-4.jpg"
                  style={{ width: "100%", height: "100vh", opacity: "0.5" }}
                />
                <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center">
                <div>
                    <h3 className=" text-sky-500 text-5xl my-auto mb-3 text-center font-bold">
                      50% Discaunt
                    </h3>
                    <p className=" text-pink-500 text-5xl my-auto mt-3 text-center font-bold">
                      Rokomary  Shoping Moll
                    </p>
                    <button className="py-3 px-6 flex justify-center text-center m-auto my-5 font-bold text-xl text-white rounded-md bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
                      Visite Side  
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            </li>
          </ul>
          {/*----------Slider----------5--------*/}
          <ul>
            <li className="relative">
              <SwiperSlide>
                <img
                  src="https://i.ibb.co/tDKxKGs/home-5.jpg"
                  style={{ width: "100%", height: "100vh", opacity: "0.5" }}
                />
                <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center">
                <div>
                    <h3 className=" text-sky-500 text-5xl my-auto mb-3 text-center font-bold">
                      50% Discaunt
                    </h3>
                    <p className=" text-pink-500 text-5xl my-auto mt-3 text-center font-bold">
                      Rokomary  Shoping Moll
                    </p>
                    <button className="py-3 px-6 flex justify-center text-center m-auto my-5 font-bold text-xl text-white rounded-md bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
                      Visite Side  
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            </li>
          </ul>
        </Swiper>
      </div>
      
      
      
      
      
      
      
      
      
      {/* slider end  */}
      <div className='bg-blue-200 mt-[70px]'>
       {sliderpage?.name}
          <div className='md:w-[80%] w-[90%] mx-auto'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-4'>
                {brandProduct.map(product=><SeminaryProduct product={product} key={product._id}></SeminaryProduct>)}
           </div>
          </div>
        </div>
     </div>
    );
};

export default Brand_Products;