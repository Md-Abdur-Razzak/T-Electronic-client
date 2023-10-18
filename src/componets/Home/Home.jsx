import React from 'react';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import HappyClient from '../HappyClient/HappyClient';
import Contack from '../contack/Contack';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
         <div>
            <Brands></Brands>
         </div>
         <div className='mt-[200px]'>
            <HappyClient></HappyClient>
         </div>
         <div className='mt-[200px]'>
           <Contack></Contack>
         </div>
        </div>
    );
};

export default Home;