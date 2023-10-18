import React, {  useEffect, useState } from 'react';

import { useLoaderData, useParams } from 'react-router-dom';
import ProductSlider from './ProductSlider';


const Brand_Products = () => {
   const [newD,setDAta]=useState([])
    const newData = useLoaderData()
  const {name} = useParams()
  useEffect (()=>{
    const finter = newData?.filter(data=>data.name == name)
    setDAta(finter)
  },[name,newData])
    return (
        <div>
        
     
           {newD.map(slider=><ProductSlider slider={slider}  key={slider.id}></ProductSlider>)}
        </div>
    );
};

export default Brand_Products;