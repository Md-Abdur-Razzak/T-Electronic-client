import React, { useContext, useEffect, useState } from 'react';
import MycartsDetails from './MycartsDetails';
import Swal from 'sweetalert2'
import { MyContext } from '../Router/Authprovider';


const Mycart = () => {
    const [myData,setMyData]=useState([])
    const [filteringData,setFiltring]=useState([])
    const {users}= useContext(MyContext)
    const email = users.email

   
    useEffect(()=>{

        fetch(`https://tae-sever-side.vercel.app/mycart`)
        .then(res=>res.json())
        .then(data=>setMyData(data))

    },[])
    
    useEffect(()=>{
        const find =myData.filter(em=>em.email == email)
        setFiltring(find)
       

    },[email,myData])

  
    const hadeldelet = (id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

            fetch(`https://tae-sever-side.vercel.app/mycart/${id}`,{
            method:"DELETE"
            })
            .then(res=>res.json())
            .then((data)=>{
                if (data.deletedCount>0) {
                    const filter = myData?.filter(data=>data._id !== id)
                    setMyData(filter)
                }
            })
              Swal.fire(
                'Deleted!',
                'Your Product has been deleted.',
                'success'
              )
            }
          })
       

    }

 
    return (
        <div>
            {
                filteringData.length==0? <div className='flex justify-center items-center mt-[130px]'>
                    <div className=''>
                    <img className='w-[200px] rounded-full ' src={'https://i.ibb.co/QdPgrJj/product-not-available-icon-fla3.webp'} alt="" />
                    <h1 className='mt-2  text-blue-950 '>You Haven't added to cart yet</h1>
                </div>
                </div>
                :
                <div className='lg:w-[80%] w-[95%] mx-auto grid lg:grid-cols-2 gap-3 mt-16'>
                {
                    filteringData?.map(data=><MycartsDetails hadeldelet={hadeldelet} data={data} key={data._id}></MycartsDetails>)
                }
            </div>
            }
           
        </div>
    );
};

export default Mycart;