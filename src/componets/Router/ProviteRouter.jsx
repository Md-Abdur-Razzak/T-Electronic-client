import React, { useContext } from 'react';
import { MyContext } from './Authprovider';
import { Navigate, useLocation } from 'react-router-dom';
import { ThreeCircles } from 'react-loader-spinner';

const ProviteRouter = ({children}) => {
    const {users,lodder}=useContext(MyContext)
    const location = useLocation()
    console.log(location.pathname);
    if(lodder){
        return <h1 className='flex justify-center mt-[100px]'>
            <ThreeCircles
        height="100"
        width="100"
        color="blue"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
        </h1>
    }
    if (users) {
        return children
    }
    else{
        return <Navigate state={location.pathname} to={`/login`}></Navigate>
    }

};

export default ProviteRouter;