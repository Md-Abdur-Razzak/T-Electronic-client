import React, { useEffect, useState } from 'react';
import MycartsDetails from './MycartsDetails';
import Swal from 'sweetalert2'

const Mycart = () => {
    const [myData,setMyData]=useState([])
    useEffect(()=>{

        fetch(`http://localhost:3000/mycart`)
        .then(res=>res.json())
        .then(data=>setMyData(data))

    },[])
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

            fetch(`http://localhost:3000/mycart/${id}`,{
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
                'Your file has been deleted.',
                'success'
              )
            }
          })
       

    }
    return (
        <div>
            <div className='lg:w-[80%] w-[95%] mx-auto grid lg:grid-cols-2 gap-3 mt-16'>
                {
                    myData?.map(data=><MycartsDetails hadeldelet={hadeldelet} data={data} key={data._id}></MycartsDetails>)
                }
            </div>
        </div>
    );
};

export default Mycart;